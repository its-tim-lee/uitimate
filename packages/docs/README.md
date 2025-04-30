# Argos
```
$ np build:storybook
$ npx concurrently -k -s first -n "SB,TEST" -c "magenta,blue" \
    "npx http-server ./storybook-static --port 6006 --silent" \
    "npx wait-on tcp:127.0.0.1:6006 && npm run test-storybook"
$ npm exec -- argos upload --token <ARGOS_TOKEN> ./screenshots

```


# Todos
- [] Fix the Heading component
- [] Verify the site still work in the mobile
- [] Think about whether we should provide :
```
  * {
    /*
      This can be confused, but "the 2nd border" comes from `--color-border`
    */
    @apply tw:border-border;
  }
  body {
    @apply tw:bg-background tw:text-foreground;
  }
```

Tests
- [] Typecheck
  > note: For some reasons that the current setup of type checking may not be able to catch all the type issues. eg., if a file is tsx, but import it as ts file, the type-checking may not be able to catch it, but maybe some other program will complain that (eg., production build the storybook)
  > The sol: using ESLint with the import/no-unresolved rule (and the eslint-import-resolver-typescript plugin)

- [] Argos


Argos:
  - test some indendent Recipe components: Date Picker and Range Picker


Finally check:
  - [] Exclude the things i don't want people to see
  - [] Launch KeyPointer again
  - [] Sharp all my social stuff (Githib, Twitter, LinkedIn, ...)
  - [] Run example PR
  - [] Check all the possible links
  - [] Run different kind of versioning and check changelog rendering in all the places (eg., Github)


Nice to have
  - [] Some places use flat component which is still an experimental component, so the refactoring might need to be performed there
  - [] Use some better ideas from Shadcn (eg., tw-animate-css)
  - [] Use a better font