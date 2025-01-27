import { Icon } from "@iconify/react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "./Alert.tsx"

export default {
  title: 'Example/Alert',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}


export const Variant1 = {
  name: 'Destructive',
  render: () => {
    return <Alert variant="destructive">
      <Icon icon='lucide:circle-alert' className="tw-h-4 tw-w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  },
};

export const Variant2 = {
  name: 'Default',
  render: () => {
    return <Alert variant="default">
      <Icon icon='lucide:terminal' className="tw-h-4 tw-w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  },
};
