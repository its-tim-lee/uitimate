import type { Config } from 'release-it';

const config: Config & { increment: boolean; changelog: null } = {
  increment: false, // Do not bump any version since we'll do so using "changeset version"
  changelog: null,
  git: {
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
    releaseName: "v${version}",
    releaseNotes: "See the changelog for release notes: https://github.com/its-tim-lee/uitimate/blob/main/packages/docs/CHANGELOG.md#${version}",
    tokenRef: "GITHUB_TOKEN"
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