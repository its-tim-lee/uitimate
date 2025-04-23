import type { TestRunnerConfig } from "@storybook/test-runner";
import { argosScreenshot } from "@argos-ci/storybook";

const config: TestRunnerConfig = {
  tags: {
    include: ['qa'], // Only test stories with 'qa' tag
  },
  async postVisit(page, context) {
    await argosScreenshot(page, context);
  },
};

export default config;