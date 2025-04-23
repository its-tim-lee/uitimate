import type { TestRunnerConfig } from "@storybook/test-runner";
import { getStoryContext } from "@storybook/test-runner";
import { argosScreenshot, type ArgosScreenshotOptions } from "@argos-ci/storybook";

const config: TestRunnerConfig = {
  tags: {
    include: ['qa'], // Only test stories with 'qa' tag
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context);
    const tags = storyContext.tags || [];
    const options: ArgosScreenshotOptions = {};
    if (tags.includes('fullpage')) {
      options.fullPage = true;
      options.fitToContent = false;
    }
    await argosScreenshot(page, context, options);
  },
};

export default config;