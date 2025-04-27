# Argos
```
$ np build:storybook
$ npx concurrently -k -s first -n "SB,TEST" -c "magenta,blue" \
    "npx http-server ./storybook-static --port 6006 --silent" \
    "npx wait-on tcp:127.0.0.1:6006 && npm run test-storybook"
$ npm exec -- argos upload --token <ARGOS_TOKEN> ./screenshots

```


# Todos
- [] Develop auto-copy-paste mechanism
- [] Fix the Heading component
- [] Fix the index.css
  - [] Fix the font
- [] Verify the site still work in the mobile

Tests
- [] Typecheck
  > note: For some reasons that the current setup of type checking may not be able to catch all the type issues. eg., if a file is tsx, but import it as ts file, the type-checking may not be able to catch it, but maybe some other program will complain that (eg., production build the storybook)
  > The sol: using ESLint with the import/no-unresolved rule (and the eslint-import-resolver-typescript plugin)

- [] Argos
  > note: If sometime the storybook production build is failed, simply re-run the build may fix it

breakpoint
- [] Setup GA
- [] Exclude the things I don't want people to see
- [] Render the site's changelog on the site and on github
- [] Formalize site's versioning workflow
- Argos:
  - test some indendent Recipe components: Date Picker and Range Picker
- Nice to have
  - [] Some places use flat component which is still an experimental component, so the refactoring might need to be performed there
  - [] Use some better ideas from Shadcn (eg., tw-animate-css)