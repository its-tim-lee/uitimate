import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../DropdownMenu/DropdownMenu"
import { Flat } from "../../preset/flat/index.tsx";
import { Button } from "../Button/Button.tsx";
import { Heading, HeadingSubtitle, HeadingTitle } from "../Heading/Heading.tsx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./NavigationMenu.tsx"

export default {
  title: 'Components/NavigationMenu',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'Default',
  render: () => {
    return (
      <NavigationMenu value='first'>
        <NavigationMenuItem value='first'>
          <NavigationMenuTrigger >Run</NavigationMenuTrigger>
          <NavigationMenuContent className='tw:fit tw:flex tw:flex-col tw:md:flex-row tw:gap-4'>
            <div className='tw:w-[500px] tw:bg-black tw:p-10'>
              <Heading size='h1'>
                <HeadingTitle className='tw:text-yellow-500 tw:mb-4'>Run</HeadingTitle>
                <HeadingSubtitle className='tw:text-white'>Run your app with confidence and deliver the best experience for your users</HeadingSubtitle>
              </Heading>
              <Button className='tw:rounded-full tw:border-solid tw:border-yellow-500 tw:border-2 tw:bg-transparent tw:text-white tw:hover:bg-yellow-500 tw:hover:text-black' variant='ghost' size='sm'>Go to Run</Button>
            </div>
            <div className='tw:w-[500px] tw:bg-white tw:p-10'>
              <h3 className='tw:font-bold'>Run Products</h3>
              <div className='tw:flex tw:gap-8 tw:mt-8'>
                <ul className='tw:flex tw:flex-col tw:gap-4'>
                  <li><a href='#'>A/B Testing</a></li>
                  <li><a href='#'>App Distribution</a></li>
                  <li><a href='#'>Cloud Messaging</a></li>
                  <li><a href='#'>Crashlytics</a></li>
                  <li><a href='#'>Google Analytics</a></li>
                </ul>
                <ul className='tw:flex tw:flex-col tw:gap-4'>
                  <li><a href='#'>In-App Messaging</a></li>
                  <li><a href='#'>Performance Monitoring</a></li>
                  <li><a href='#'>Remote Config</a></li>
                  <li><a href='#'>Test Lab</a></li>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">Pricing</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          Docs


        </NavigationMenuItem>
      </NavigationMenu>
    )
  },
};