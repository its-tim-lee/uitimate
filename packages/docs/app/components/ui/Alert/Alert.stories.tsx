import { Icon } from "../Icon/Icon.tsx";

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
  name: 'API / 2 Variants',
  render: () => {
    return <Alert variant="destructive">
      <Icon icon='lucide:circle-alert' className="tw:h-4 tw:w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  },
};

export const Variant2 = {
  name: 'Scenario / Reminder',
  render: () => {
    return (
      <>
        <Alert>
          <Icon icon='lucide:shield-check' className="tw:h-4 tw:w-4" />
          <AlertTitle>Upated to the latest version!</AlertTitle>
        </Alert>
        <br />
        <Alert>
          <AlertTitle>Rollback to the previous version...</AlertTitle>
        </Alert>
      </>
    )
  },
};
