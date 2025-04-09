import { Icon } from "../Icon/Icon.tsx";
import Badge3Sizes from "#/components/demo/badge-3sizes.tsx";
import Badge3Modes from "#/components/demo/badge-3modes.tsx";

import {
  Badge,
} from "./Badge.tsx"
import { Avatar, AvatarFallback } from "../Avatar/Avatar.tsx";
import { AvatarImage } from "../Avatar/Avatar.tsx";

export default {
  title: 'Example/Badge',
  includeStories: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
