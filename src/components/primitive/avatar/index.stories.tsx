import { Avatar, AvatarFallback, AvatarImage } from './index.tsx';

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
  render: () => {

    return (
      <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    );
  },
};
