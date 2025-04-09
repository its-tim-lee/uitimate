import ProgressDemo from '../../demo/progress-demo';
import ProgressLoading from '../../demo/progress-loading';

export default {
  title: 'Example/Progress',
  includeStories: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const DEMO = {
  name: 'DEMO',
  render: () => <ProgressDemo />,
};

export const Loading = {
  name: 'Loading',
  render: () => <ProgressLoading />
};
