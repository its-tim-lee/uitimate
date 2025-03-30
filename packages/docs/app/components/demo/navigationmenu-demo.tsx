import { NavigationMenu, NavigationMenuItem, NavigationMenuContent, NavigationMenuLink, NavigationMenuTrigger } from "@/components/ui/NavigationMenu/NavigationMenu.tsx"
import { Heading, HeadingSubtitle, HeadingTitle } from "@/components/ui/Heading/Heading.tsx"
import { Cta } from "@/components/ui/Cta/Cta.tsx"

export default () => {
  return (
    <NavigationMenu>

      <NavigationMenuItem value='first'>
        <NavigationMenuTrigger >Run</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className='tw:w-[400px] tw:bg-black tw:p-10'>
            <Heading size='h2' className='tw:mb-6'>
              <HeadingTitle className='tw:text-yellow-500 tw:mb-2'>Run</HeadingTitle>
              <HeadingSubtitle className='tw:text-white tw:text-sm'>Run your app with confidence and deliver the best experience for your users</HeadingSubtitle>
            </Heading>
            <Cta className='tw:rounded-full tw:border-solid tw:border-yellow-500 tw:border-2 tw:bg-transparent tw:text-white tw:hover:bg-yellow-500 tw:hover:text-black' variant='ghost' size='sm'>Go to Run</Cta>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger className='tw:text-sm'>Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className='tw:w-[400px] tw:bg-white tw:p-10 tw:text-black'>
            <h3 className='tw:font-bold'>Run Products</h3>
            <div className='tw:flex tw:gap-8 tw:mt-4 tw:text-xs'>
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
        <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenu>
  )
}