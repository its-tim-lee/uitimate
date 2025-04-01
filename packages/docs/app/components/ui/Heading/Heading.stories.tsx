import Heading6Levels from "#/components/demo/heading-6levels.tsx";
import HeadingOnlyTitle from "../../demo/heading-only-title.tsx";
import HeadingShortcutApi from "../../demo/heading-shortcut-api.tsx";
import HeadingArticle from "../../demo/heading-article.tsx";
import HeadingCard from "../../demo/heading-card.tsx";
import HeadingAlert from "../../demo/heading-alert.tsx";


export default {
  title: 'Example/Heading',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'API / 6 Levels',
  render: () => <Heading6Levels />
};
/**
 * DOC: If only title is provided, do not use subcomponents;
 * I don't prevent this in the code, cuz:
 * - it'd make the code unnecessarily complex;
 * - no one will do composition if simply one tag can do the job.
 */
export const Variant2 = {
  name: 'API / Only title',
  render: () => <HeadingOnlyTitle />
};

export const Variant21 = {
  name: 'API / Shortcut API Style',
  render: () => <HeadingShortcutApi />
};

export const Variant3 = {
  name: 'Scenario / Article',
  render: () => <HeadingArticle />
};


export const Variant4 = {
  name: 'Scenario / Card',
  render: () => <HeadingCard />
};

export const Variant5 = {
  name: 'Scenario / Alert',
  render: () => <HeadingAlert />
};
