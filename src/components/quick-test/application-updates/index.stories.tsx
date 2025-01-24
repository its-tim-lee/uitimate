import { ApplicationUpdates } from "./ApplicationUpdates.tsx";

export default {
  title: "Example/ApplicationUpdates",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = {
  name: "Default",
  render: () => {
    return <ApplicationUpdates />;
  },
};
