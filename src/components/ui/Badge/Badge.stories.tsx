import IconV2 from "../Icon/IconV2.tsx";
import copySVG from "@iconify/icons-lucide/copy";
const { body: copy } = copySVG as any;
import githubSVG from "@iconify/icons-lucide/github";
const { body: github } = githubSVG as any;
import branchSVG from "@iconify/icons-lucide/git-branch";
const { body: branch } = branchSVG as any;
import timleeImage from '@/assets/timlee.jpg'
import Badge5Variants from "@/components/demo/badge-5variants.tsx";
import Badge3Sizes from "@/components/demo/badge-3sizes.tsx";
import Badge3Modes from "@/components/demo/badge-3modes.tsx";
import BadgePill from "@/components/demo/badge-pill.tsx";
import BadgeAnchor from "@/components/demo/badge-anchor.tsx";
import BadgeAPIDoc from "@/components/demo/badge-apidoc.tsx";
import BadgeCTA from "@/components/demo/badge-cta.tsx";

import {
  Badge,
} from "./Badge.tsx"
import { Avatar, AvatarFallback } from "../Avatar/Avatar.tsx";
import { AvatarImage } from "../Avatar/Avatar.tsx";

export default {
  title: 'Example/Badge',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'API / 5 Variants',
  render: () => <Badge5Variants />
};

export const Variant2 = {
  name: 'API / 3 Sizes',
  render: () => <Badge3Sizes />
};

export const Variant23 = {
  name: 'API / 3 modes',
  render: () => <Badge3Modes />
};

export const Variant3 = {
  name: 'Scenario / API Doc',
  render: () => <BadgeAPIDoc />
};

export const Variant4 = {
  name: 'Scenario / CTA',
  render: () => <BadgeCTA />
};

export const Variant5 = {
  name: 'API / Pill',
  render: () => <BadgePill />
};

export const Variant6 = {
  name: 'Edge Case / Icon mode in 3 sizes',
  render: () => {
    return (
      <div className="tw:flex tw:flex-col tw:gap-2">
        <Badge variant='outline' mode='icon' size='sm'>
          <IconV2 ssr icon={github} />
          <span className="tw:sr-only">View on Github</span>
        </Badge>
        <Badge variant='outline' mode='icon'>
          <IconV2 ssr icon={github} />
          <span className="tw:sr-only">View on Github</span>
        </Badge>
        <Badge variant='outline' mode='icon' size='lg'>
          <IconV2 ssr icon={github} />
          <span className="tw:sr-only">View on Github</span>
        </Badge>
      </div>
    )
  }
};

export const Variant7 = {
  name: 'Edge Case / Pill mode in 3 sizes',
  render: () => {
    return (
      <div className="tw:flex tw:gap-2">
        <section className="tw:flex tw:flex-col tw:gap-2 tw:items-start">
          <Badge variant="secondary" mode='pill' size='sm'>
            <Avatar>
              <AvatarImage src={timleeImage} alt="@itistimlee" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
            Tim Lee
          </Badge>
          <br />
          <Badge variant="secondary" mode='pill' size='sm'>
            <IconV2 ssr icon={github} />
            Github
          </Badge>
          <br />
          <Badge variant="secondary" mode='pill' size='sm'>Tim Lee</Badge>
        </section>
        <section className="tw:flex tw:flex-col tw:gap-2 tw:items-start">
          <Badge variant="secondary" mode='pill'>
            <Avatar>
              <AvatarImage src={timleeImage} alt="@itistimlee" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
            Tim Lee
          </Badge>
          <br />
          <Badge variant="secondary" mode='pill'>
            <IconV2 ssr icon={github} />
            Github
          </Badge>
          <br />
          <Badge variant="secondary" mode='pill'>Tim Lee</Badge>
        </section>
        <section className="tw:flex tw:flex-col tw:gap-2 tw:items-start">
          <Badge variant="secondary" mode='pill' size='lg'>
            <Avatar>
              <AvatarImage src={timleeImage} alt="@itistimlee" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
            Tim Lee
          </Badge>
          <br />
          <Badge variant="secondary" mode='pill' size='lg'>
            <IconV2 ssr icon={github} />
            Github
          </Badge>
          <br />
          <Badge variant="secondary" mode='pill' size='lg'>Tim Lee</Badge>
        </section>
      </div>
    )
  }
};

export const Variant8 = {
  name: 'API / Anchor',
  render: () => <BadgeAnchor />
};