import AvatarDemo from '../../demo/avatar-demo.tsx';

export default {
  title: 'Example/Avatar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Default = {
  name: 'Default',
  render: () => <AvatarDemo />
};
