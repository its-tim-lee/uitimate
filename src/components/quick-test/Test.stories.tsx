import React, { Children } from "react"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Button } from "../ui/Button/Button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/Breadcrumb/Breadcrumb"
import { Flat } from "../preset/flat"
import { Progress } from "../ui/Progress/Progress"

type Attendee = {
  id: string;
  name: string;
  title: string;
  avatar: string;
  attendance: boolean;
  isSpeaker: boolean;
  isSpeaking: boolean;
  skill: string;
};

export default {
  title: 'Example/Testory',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const ChildDoesUseContext = React.memo(() => {
  console.log('Render:ChildDoesUseContext')
  const val = React.useContext(Ctx1)
  return <div>
    <h1>ChildDoesUseContext</h1>
    <p>Context Value: {val}</p>
  </div>
})

/**
 * Without memo, it'd be re-rendered every time when parent re-renders
 */
const ChildNoUseContext = React.memo(() => {
  console.log('Render:ChildNoUseContext')
  return <div className='tw:border tw:border-red-500'>
    <h1>ChildNoUseContext</h1>
    <p>Without `memo`, it'd be re-rendered every time when parent re-renders</p>
  </div>
})

/**
 * different from ChildNoUseContext, no need to use memo, as long as it doesn't change, it'd not re-render
 */
const SlotComponent = (({ ...props }) => {
  console.info('Render: Slot Component')
  return <div {...props} className={cn('child-3-inner', props.className)}>
    <h1>SlotComponent: no use context</h1>
  </div>
})

const Ctx1 = React.createContext('val1')

const App = ({ children }: { children: React.ReactNode }) => {
  const [ctx, setCtx] = React.useState('val1')
  const [nonCtx, setNonCtx] = React.useState('This is non-context value')
  console.info('Render: App')
  return <Ctx1.Provider value={ctx}>
    <button onClick={() => setCtx(ctx === 'val1' ? 'val2' : 'val1')}>👉 change</button>
    <ChildDoesUseContext />
    <ChildNoUseContext />
    {children}
    <p>{nonCtx}</p>
    <button onClick={() => setNonCtx(nonCtx === 'This is non-context value' ? 'non-context value has been changed' : 'This is non-context value')}>👉 Change Non Context Value</button>
  </Ctx1.Provider>
}

export const Variant1 = {
  name: 'Default',
  render: () => {
    return (
      <App>
        <SlotComponent className='child-3-outer' />
      </App>
    )
  },
};


// document.documentElement.classList.toggle('dark');

export const Variant2 = {
  name: '@theme inline',
  render: () => {
    const switchTheme = () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
      }
    }
    return (
      <>
        <div className="tw:w-[320px] tw:bg-white tw:dark:bg-gray-800 tw:rounded-lg tw:px-6 tw:py-8 tw:ring tw:shadow-xl tw:ring-gray-900/5">
          <h3 className='tw:bg-(--chart-1)'>This utilize Shadcn's css var, and notice that it doesn't have tw prefix like other built-in Tailwind var (eg., `--tw-color-red-500`)</h3>
          <div>
            <span className="tw:inline-flex tw:items-center tw:justify-center tw:rounded-md tw:bg-indigo-500 tw:p-2 tw:shadow-lg">
              <svg
                className="tw:h-6 tw:w-6 tw:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {/* ... */}
              </svg>
            </span>
          </div>
          <div className=''>
            <section className='tw:first:underline tw:group/s1 tw:[&>[data-active]+p]:text-blue-600'>
              <h3 data-active className="tw:text-gray-900 tw:dark:text-white tw:mt-5 tw:text-base tw:font-medium tw:tracking-tight">
                The text style here will be different in light and dark mode
              </h3>
              <p className="tw:dark:hover:text-(--tw-color-red-500) tw:mt-2 tw:text-sm">
                The text at here will be blue thanks to the arbitrary variants, and will be red when hover in the dark mode.
              </p>
            </section>
            <section className='tw:group/s2'>
              <h3 data-active='true' className="tw:peer tw:group-hover/s2:bg-(--tw-color-red-500) tw:text-blue-500! tw:dark:text-white tw:mt-5 tw:text-base tw:font-medium tw:tracking-tight">
                This text ignores dark theme by using <code>!important</code>. But it'll show different bg color when in "group hover"
              </h3>
              <p className="tw:peer-data-[active=true]:underline tw:text-gray-500 tw:dark:text-gray-400 tw:mt-2 tw:text-sm tw:has-[a]:bg-red-500">
                <a href="https://www.google.com">just some dummy text</a>
              </p>
              <br className='tw:hidden tw:group-has-[footer]/s2:block' />
              <footer>This will only be shown when the parent has a specific child</footer>

            </section>
          </div>
        </div>

        <p>
          Notice that the button below will only show certain style when hovered but not in focused.
        </p>
        <button
          style={{
            '--btn-bg-color': 'var(--tw-color-indigo-500)'
          } as React.CSSProperties}
          className="tw:mt-4 tw:px-4 tw:py-2 tw:bg-(--btn-bg-color) tw:hover:not-focus:bg-indigo-700 tw:text-white tw:rounded-md tw:shadow-lg tw:cursor-pointer"
          onClick={switchTheme}
        >
          Switch to {document.documentElement.classList.contains('dark') ? 'light' : 'dark'} mode
        </button>
      </>
    )
  },
};

export const Variant3 = {
  name: 'TWExercise1',
  render: () => {
    const [selectedId, setSelectedId] = React.useState('')
    const attendees: Attendee[] = [
      {
        id: React.useId(),
        name: 'Leslie Abbott',
        title: 'Co-Founter / CEO',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        attendance: true,
        isSpeaker: true,
        isSpeaking: true,
        skill: 'Marketing, Sales, Leadership'
      },
      {
        id: React.useId(),
        name: 'Tim Cook',
        title: 'CTO',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        attendance: true,
        isSpeaker: true,
        isSpeaking: false,
        skill: 'Innovation, AI Research, Cloud Infrastructure'
      },
      {
        id: React.useId(),
        name: 'John Doe',
        title: 'Developer',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        attendance: false,
        isSpeaker: false,
        isSpeaking: false,
        skill: 'Software Development, Cloud Computing, AI'
      },
      {
        id: React.useId(),
        name: 'Amanda Lee',
        title: 'Developer Relations',
        avatar: 'https://mighty.tools/mockmind-api/content/human/125.jpg',
        attendance: true,
        isSpeaker: false,
        isSpeaking: false,
        skill: 'Technical Writing, Frontend Development'
      },
      {
        id: React.useId(),
        name: 'Peter Matis',
        title: 'Social Media Manager',
        avatar: 'https://mighty.tools/mockmind-api/content/human/122.jpg',
        attendance: true,
        isSpeaker: false,
        isSpeaking: false,
        skill: ''
      },
      {
        id: React.useId(),
        name: 'Sophia Turner',
        title: 'Product Manager',
        avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        attendance: true,
        isSpeaker: false,
        isSpeaking: false,
        skill: 'Product Development, UX Design'
      },
      {
        id: React.useId(),
        name: 'Michael Brown',
        title: 'Data Analyst',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        attendance: true,
        isSpeaker: false,
        isSpeaking: false,
        skill: 'Data Analysis, Machine Learning'
      },
      {
        id: React.useId(),
        name: 'Emily Davis',
        title: 'UX Designer',
        avatar: 'https://mighty.tools/mockmind-api/content/human/108.jpg',
        attendance: true,
        isSpeaker: false,
        isSpeaking: false,
        skill: 'User Experience, Graphic Design'
      },
    ]
    const ListItem = ($e: Attendee) => (
      <li
        data-selected={selectedId === $e.id}
        data-disabled={!$e.attendance}
        data-muted={selectedId !== $e.id && selectedId !== ''}
        key={$e.id}
        className="tw:bg-gradient-to-r tw:even:from-gray-950 tw:even:from-5% tw:even:via-zinc-900 tw:even:via-50% tw:even:to-gray-950 tw:even:to-95% tw:[&[data-selected=true]_[data-divider]]:hidden tw:data-[selected=true]:scale-130 tw:data-[selected=true]:transition tw:data-[selected=true]:delay-150 tw:data-[selected=true]:duration-500 tw:data-[selected=true]:ease-in-out tw:data-[muted=true]:opacity-30 tw:relative tw:group/list-item tw:flex tw:flex-col tw:items-start tw:gap-5 tw:w-full tw:h-fit tw:p-6"
        onClick={() => setSelectedId($e.id)}
        onBlur={() => setSelectedId('')}
        tabIndex={0}
      >
        <div className='tw:flex tw:flex-row tw:items-center tw:gap-5'>
          <div className='tw:group/avatar tw:relative is-avatar' inert={!$e.attendance}>
            <Icon icon='lucide:external-link' className="tw:text-2xl tw:absolute tw:top-2/4 tw:left-2/4 tw:-translate-x-2/4 tw:-translate-y-2/4 tw:group-hover/avatar:block tw:hidden" />
            <img
              data-avatar
              alt="avatar"
              className="tw:group-[.is-avatar]/avatar:opacity-50 tw:group-hover/avatar:opacity-50 tw:w-16 tw:group-inert/avatar:opacity-50 tw:outline-2 tw:outline-offset-4 tw:outline-transparent tw:[[data-selected=true]_&]:outline-gray-600"
              src={$e.avatar}
            />
          </div>
          {/* tw:has-[:hover]:bg-red-500 */}
          {/* TODO: multiple peer groups */}
          <div className="tw:flex tw:flex-col tw:gap-2">
            <div className="tw:flex tw:items-center tw:gap-2 tw:text-white tw:text-md tw:font-medium tw:capitalize tw:group-data-[disabled=true]/list-item:line-through">
              <span tabIndex={0} className="tw:peer/name tw:group-[[data-selected=true]_&]/list-item:bg-red-500!">{$e.name}</span>
              {$e.isSpeaking && <Icon
                data-live
                icon='fluent:live-20-filled'
                className="tw:text-yellow-300 tw:peer-hover/name:rotate-90"
              />}
            </div>
            <div className=" tw:group-hover/list-item:hidden tw:text-gray-600 tw:text-md tw:font-extralight tw:capitalize">{$e.title}</div>
            <div className="tw:hidden tw:group-hover/list-item:flex tw:gap-2 tw:text-gray-500">
              <Icon icon='lucide:twitter' className='tw:hover:text-cyan-300' />
              <Icon icon='lucide:linkedin' className='tw:hover:text-blue-300' />
            </div>
          </div>
          <Button variant='outline' className="tw:focus:text-red-500 tw:group-has-[[data-live]]/list-item:block tw:hidden tw:font-extrabold tw:ml-3">ENTER</Button>
        </div>

        <div className="tw:flex tw:flex-row tw:gap-1">
          {
            $e.skill.split(',').map(($e) => (
              <span tabIndex={0} data-badges className="tw:hover:not-focus:bg-gray-800 tw:hover:focus:text-yellow-500 tw:focus:bg-gray-800 tw:text-gray-400 tw:text-sm tw:font-extralight tw:capitalize tw:empty:hidden tw:py-1 tw:px-2 tw:bg-gray-900 tw:rounded-md">{$e}</span>
            ))
          }
        </div>
        <div data-divider className="tw:group-data-[muted=true]/list-item:hidden tw:mx-auto tw:left-0 tw:right-0 tw:group-hover/list-item:hidden tw:group-[:last-of-type]/list-item:hidden tw:absolute tw:bottom-0 tw:w-[85%] tw:bg-white/9 tw:h-[1px]"></div>
      </li>
    )
    return (
      <div className='tw:flex tw:gap-4'>
        <div className=' tw:bg-gray-950 tw:**:data-avatar:rounded-full tw:outline tw:outline-gray-800 tw:outline-offset-2 tw:rounded-md'>
          <h1 className='tw:p-4 tw:text-gray-400'>Speakers</h1>
          <ul className="">
            {attendees.filter($e => $e.isSpeaker).map(($e) => ListItem($e))}
          </ul>
          <br />
          <h1 className='tw:text-gray-400 tw:p-4'>Registers</h1>
          <ul>
            {attendees.filter($e => !$e.isSpeaker).map(($e) => ListItem($e))}
          </ul>
        </div>
        <div className='tw:outline tw:outline-gray-800 tw:outline-offset-2 tw:rounded-md tw:p-4'>
          <h1 className='tw:p-4 tw:text-gray-400'>Meeting code</h1>
          <ul className='tw:list-disc tw:list-inside tw:marker:text-sky-400 tw:selection:bg-fuchsia-300 tw:selection:text-fuchsia-900'>
            <li>
              Mute when you don't speak
            </li>
            <li>
              Test mic before joining
            </li>

          </ul>
          <h1 className='tw:p-4 tw:text-gray-400'>Agreement</h1>
          <p className='tw:px-4'>
            By joining the meeting, you agree to the <a href="https://www.google.com">terms of service</a> and <a href="https://www.google.com">privacy policy</a>
          </p>
          <Button variant='outline'>Submit</Button>
        </div>
      </div>)
  }
}

export const OrdersDashboard = {
  name: 'Orders Dashboard',
  render: () => {
    return (
      <div className="tw:w-full tw:max-w-[1200px] tw:mx-auto tw:p-6">
        {/* Breadcrumb */}
        <nav className="tw:mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Icon icon="lucide:chevron-right" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/orders">Orders</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Icon icon="lucide:chevron-right" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Recent Orders</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        {/* Main Content */}
        <Flat className="tw:mb-6">
          <div className="tw:flex tw:flex-col tw:gap-4 tw:items-start">
            <div>
              <h2 className="tw:text-2xl tw:font-bold tw:mb-2">Your Orders</h2>
              <p className="tw:text-gray-500">
                Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis.
              </p>
            </div>
            <Button>Create New Order</Button>
          </div>
        </Flat>

        {/* Stats Cards */}
        <div className="tw:grid tw:grid-cols-2 tw:gap-6">
          {/* This Week's Stats */}
          <Flat>
            <div className="tw:space-y-2">
              <p className="tw:text-sm tw:text-gray-500">This Week</p>
              <div className="tw:flex tw:flex-col tw:items-baseline tw:space-x-2">
                <h3 className="tw:text-3xl tw:font-bold">$1,329</h3>
                <span className="tw:text-sm">+25% from last week</span>
              </div>
              <Progress value={75} className="tw:w-full" />
            </div>
          </Flat>

          {/* This Month's Stats */}
          <Flat>
            <div className="tw:space-y-2">
              <p className="tw:text-sm tw:text-gray-500">This Month</p>
              <div className="tw:flex tw:flex-col tw:items-baseline tw:space-x-2">
                <h3 className="tw:text-3xl tw:font-bold">$5,329</h3>
                <span className="tw:text-sm">+10% from last month</span>
              </div>
              <Progress value={25} className="tw:w-full" />
            </div>
          </Flat>
        </div>
      </div>
    )
  }
};