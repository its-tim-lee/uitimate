import InputDemo from '../../demo/input-demo.tsx';
import InputForm from '../../demo/input-form.tsx';
import InputWithButton from '../../demo/input-with-button.tsx';

export default {
  title: 'Example/Input',
  includeStories: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const DEMO = {
  name: 'DEMO',
  render: () => <InputDemo />
};

export const BUTTON = {
  name: 'SCENARIO / WITH BUTTON',
  render: () => <InputWithButton />
};

export const FORM = {
  name: 'SCENARIO / FORM',
  render: () => <InputForm />
};
