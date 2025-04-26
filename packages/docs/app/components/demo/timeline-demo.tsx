import { Icon } from "../ui/Icon/Icon"
import { TimelineContent, Timeline, TimelineDot, TimelineItem, TimelineTitle, TimelineLine } from "../ui/Timeline/Timeline"

export default () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineTitle>Install react-day-picker</TimelineTitle>
        <TimelineDot />
        <TimelineLine />
        <TimelineContent className="tw:flex tw:w-full tw:flex-col tw:gap-y-4 tw:overflow-hidden tw:text-balance tw:pt-4">
          <div className="tw:prose">
            <p>
              Install the package by running the following command in your
              terminal:{" "}
              <code className="tw:whitespace-pre tw:rounded tw:bg-slate-200/50 tw:p-1 tw:text-xs tw:dark:bg-slate-500/20">
                pnpm add react-day-picker@9.4.3
              </code>
              <br />
            </p>
          </div>
          {/* <Alert>
            <Info className="size-4" />
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
              It is important to have at least the version 9 of the
              react-day-picker package installed.
            </AlertDescription>
          </Alert> */}
          <div className="tw:prose">
            <p>
              For more information on how to install the package, check the
              official documentation for getting started{" "}
              {/* <Link href="https://daypicker.dev/start" target="_blank">
                here
              </Link> */}
              .
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineTitle>Update the Calendar component</TimelineTitle>
        <TimelineDot />
        <TimelineLine />
        <TimelineContent className="tw:flex tw:w-full tw:flex-col tw:gap-y-4 tw:overflow-hidden tw:text-balance tw:pt-4">
          {/* <Alert variant="warning">
            <Package className="size-4" />
            <AlertTitle>Update Required</AlertTitle>
            <AlertDescription>
              In case you have already used the calendar or date picker
              component from shadcn, you will need to update it with the
              following content. We are using{" "}
              <code className="whitespace-pre rounded bg-slate-200/50 p-1 text-xs dark:bg-slate-500/20">
                react-day-picker
              </code>{" "}
              version 9, while shadcn is still on v8, which are not compatible
              with each other.
            </AlertDescription>
          </Alert> */}
          <div className="tw:prose tw:flex tw:flex-col">
            <p>
              If you are starting from scratch, follow the instructions over{" "}
              {/* <Link
                href="https://ui.shadcn.com/docs/installation/next"
                target="_blank"
              >
                here
              </Link> */}
              .<br /> Once you have a working project with shadcn, create a{" "}
              <code className="tw:whitespace-pre tw:rounded tw:bg-slate-200/50 tw:p-1 tw:text-xs tw:dark:bg-slate-500/20">
                components/ui/calendar.tsx
              </code>{" "}
              file and paste the following code:
            </p>
          </div>
          {/* <CalendarCode /> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineTitle>Date Picker Component</TimelineTitle>
        <TimelineDot />
        <TimelineLine />
        <TimelineContent className="tw:mr-0 tw:pt-4">
          <div className="tw:prose tw:mr-0 tw:w-full tw:max-w-full tw:prose-pre:mt-0">
            Now create a new date-picker file and paste the following code,
            depending on your use case.
            <section>
              <div className="tw:flex tw:items-center tw:justify-between tw:gap-x-2">
                <h2>Basic Date Picker</h2>
                {/* <CopyCode
                  className="relative top-2 text-foreground hover:border hover:bg-transparent hover:text-foreground"
                  copyTooltip="Copy Demo Code"
                /> */}
              </div>
              {/* <Tabs defaultValue="preview">
                <TabsList className="mb-2 w-full [&>*]:flex-1">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview">
                  <DemoDisplay>
                    <DatePicker />
                  </DemoDisplay>
                </TabsContent>
                <TabsContent value="code">
                  <Suspense
                    fallback={
                      <Skeleton className="relative flex h-64 w-full items-center justify-center gap-2 text-center font-medium">
                        <Spinner />
                        loading code...
                      </Skeleton>
                    }
                  >
                    <DatePickerCode />
                  </Suspense>
                </TabsContent>
              </Tabs> */}
              <p>
                This is the basic date picker component that allows users to
                select a single date. The main advantage of this component
                over the shadcn default date picker is the ability navigate
                through years instead of only one month at a time. This is
                especially useful when selecting a date of birth.
              </p>
            </section>
            <section>
              <div className="tw:flex tw:items-center tw:justify-between tw:gap-x-2">
                <h2>Date Range Picker</h2>
                {/* <CopyCode
                  className="relative top-2 text-foreground hover:border hover:bg-transparent hover:text-foreground"
                  copyTooltip="Copy Demo Code"
                  path="features/date-picker/date-range-picker.tsx"
                /> */}
              </div>
              {/* <Tabs defaultValue="preview">
                <TabsList className="mb-2 w-full [&>*]:flex-1">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview">
                  <DemoDisplay>
                    <DateRangePicker />
                  </DemoDisplay>
                </TabsContent>
                <TabsContent value="code">
                  <Suspense
                    fallback={
                      <Skeleton className="relative flex h-64 w-full items-center justify-center gap-2 text-center font-medium">
                        <Spinner />
                        loading code...
                      </Skeleton>
                    }
                  >
                    <RangePickerCode />
                  </Suspense>
                </TabsContent>
              </Tabs> */}
              <p>
                This is the date range picker component that allows users to
                select a range of dates. It also allows users to navigate
                through years. This is especially useful when selecting a very
                long range of dates, such as a holiday period.
              </p>
            </section>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineTitle>Done!</TimelineTitle>
        <TimelineDot />
        <TimelineContent>
          <div className="tw:prose">
            <p className="tw:text-pretty">
              If you find any bugs or want to suggest improvements, feel free
              do so. This component is free to use, but if you find it useful,
              feel free to star the{" "}
              {/* <Link
                href={siteConfig.githubUrl}
                target="_blank"
                className="underline"
              >
                repository
              </Link>{" "} */}
              on GitHub.
              <br />
              If you want to be extra cool, you can also buy me a coffee and I
              will be forever grateful.
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>)
}