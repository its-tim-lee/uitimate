import type { Config } from 'release-it';

const config: Config & { increment: boolean; changelog: null } = {
  increment: false, // Do not bump any version since we'll do so using "changeset version"
  changelog: null,
  git: {
    changelog: undefined,
    commit: true,
    commitMessage: "chore(release): v${version}",
    tag: true,
    tagName: "v${version}",
    push: true,
    requireBranch: 'main',
    /**
     * This setup assumes the current changed files are just from the result of running `changeset version`
     */
    requireCleanWorkingDir: false
  },
  github: {
    release: true,
    releaseName: "v${version}", // @ts-ignore
    releaseNotes: ({ version }) => {
      return `See the changelog for full details: \
https://github.com/its-tim-lee/uitimate/blob/main/packages/docs/CHANGELOG.md#${version}`;
    },
  },
  npm: {
    publish: false
  },
  // hooks: {
  //   "before:init": [
  //     "pnpm --dir ../../ run cs"
  //   ]
  // }
};

export default config;