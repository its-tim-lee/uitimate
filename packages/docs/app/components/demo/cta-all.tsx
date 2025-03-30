import { Icon } from "@/components/ui/Icon/Icon.tsx"
import { Cta } from "@/components/ui/Cta/Cta.tsx"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar/Avatar.tsx"

export default () => {
  return (
    <div className="tw:flex tw:flex-col tw:gap-2">
      <h1>Button</h1>
      <hr />
      <div className="tw:flex tw:gap-2">
        <Cta variant="primary" size="sm" muted>
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="secondary" size="sm" >
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="destructive" size="sm" >
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="outline" size="sm" >
          <Icon icon="lucide:plus" />Add
        </Cta>
        <Cta variant="ghost" size="sm" >
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="link" size="sm" >
          <Icon icon="lucide:plus" /> Add
        </Cta>
      </div>
      <div className="tw:flex tw:gap-2">
        <Cta variant="primary"  >
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="secondary"  >
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="destructive"  >
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="outline"  >
          <Icon icon="lucide:plus" />Add
        </Cta>
        <Cta variant="ghost"  >
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="link"  >
          <Icon icon="lucide:plus" /> Add
        </Cta>
      </div>
      <div className="tw:flex tw:gap-2">
        <Cta variant="primary" size="lg">
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="secondary" size="lg" >
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="destructive" size="lg" >
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="outline" size="lg" >
          <Icon icon="lucide:plus" />Add
        </Cta>
        <Cta variant="ghost" size="lg" >
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="link" size="lg" >
          <Icon icon="lucide:plus" /> Add
        </Cta>
      </div>

      {/*
      We can do stuff like this, but it should have no such use cases,
      so really don't need to deal with it in any way (eg., no need to set min-width)
      */}
      <div className="tw:flex tw:gap-2">
        <Cta variant="primary" size="sm">
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="secondary" size="md" >
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="destructive" size="lg" >
          <Icon icon="lucide:plus" />
        </Cta>
      </div>
      <div className="tw:flex tw:gap-2">
        <h1></h1>
        <Cta variant="primary" size="sm" shapes={['icon']} >
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="secondary" size="sm" shapes={['icon']} >
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="destructive" size="sm" shapes={['icon']} >
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="outline" size="sm" shapes={['icon']} >
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="ghost" size="sm" shapes={['icon']} >
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="link" size="sm" shapes={['icon']} >
          <Icon icon="lucide:plus" />
        </Cta>
      </div>
      <br />
      <h1>Toggle Button</h1>
      <hr />
      <div className="tw:flex tw:gap-2">
        <Cta variant="primary" size="sm" defaultPressed>
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="secondary" size="sm" defaultPressed>
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="destructive" size="sm" defaultPressed>
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="outline" size="sm" defaultPressed>
          <Icon icon="lucide:plus" />Add
        </Cta>
        <Cta variant="ghost" size="sm" defaultPressed>
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="link" size="sm" defaultPressed>
          <Icon icon="lucide:plus" /> Add
        </Cta>
      </div>
      <div className="tw:flex tw:gap-2">
        <Cta variant="primary" size="sm" shapes={['icon']} defaultPressed>
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="secondary" size="sm" shapes={['icon']} defaultPressed>
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="destructive" size="sm" shapes={['icon']} defaultPressed>
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="outline" size="sm" shapes={['icon']} defaultPressed>
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="ghost" size="sm" shapes={['icon']} defaultPressed>
          <Icon icon="lucide:plus" />
        </Cta>
      </div>
      <br />
      <h1>Badge Toggle Button</h1>
      <hr />
      <div className="tw:flex tw:gap-2">
        <Cta variant="primary" size="sm" shapes={['badge']} defaultPressed>
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="secondary" size="sm" shapes={['badge']} defaultPressed>
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="destructive" size="sm" shapes={['badge']} defaultPressed>
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="outline" size="sm" shapes={['badge']} defaultPressed>
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="ghost" size="sm" shapes={['badge']} defaultPressed>
          <Icon icon="lucide:plus" /> Add
        </Cta>
      </div>
      <div className="tw:flex tw:gap-2">
        <Cta variant="primary" size="sm" shapes={['icon', 'badge']} defaultPressed>
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="secondary" size="sm" shapes={['icon', 'badge']} defaultPressed>
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="destructive" size="sm" shapes={['icon', 'badge']} defaultPressed>
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="outline" size="sm" shapes={['icon', 'badge']} defaultPressed>
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta className="tw:rounded-none" variant="ghost" size="sm" shapes={['icon', 'badge']} defaultPressed>
          <Icon icon="lucide:plus" />
        </Cta>
        {/* <div className="tw:flex tw:gap-2">
          <Cta variant="primary" shapes={['pill', 'badge']} defaultPressed>
            <Avatar>
              <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
            Tim Lee
          </Cta>
          <Cta variant="secondary" shapes={['pill', 'badge']} defaultPressed>
            <Avatar>
              <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
            Tim Lee
          </Cta>
          <Cta variant="destructive" shapes={['pill', 'badge']} defaultPressed>
            <Avatar>
              <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
            Tim Lee
          </Cta>
          <Cta variant="outline" shapes={['pill', 'badge']} defaultPressed>
            <Avatar>
              <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
            Tim Lee
          </Cta>
          <Cta variant="ghost" shapes={['pill', 'badge']} defaultPressed>
            <Avatar>
              <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
            Tim Lee
          </Cta>
        </div>
        <div className="tw:flex tw:gap-2">
          <Cta variant="primary" shapes={['pill', 'badge']} defaultPressed>
            <Icon icon='lucide:github' />
            Github
          </Cta>
          <Cta variant="secondary" shapes={['pill', 'badge']} defaultPressed>
            <Icon icon='lucide:github' />
            Github
          </Cta>
          <Cta variant="destructive" shapes={['pill', 'badge']} defaultPressed>
            <Icon icon='lucide:github' />
            Github
          </Cta>
          <Cta variant="outline" shapes={['pill', 'badge']} defaultPressed>
            <Icon icon='lucide:github' />
            Github
          </Cta>
          <Cta variant="ghost" shapes={['pill', 'badge']} defaultPressed>
            <Icon icon='lucide:github' />
            Github
          </Cta>
        </div> */}
      </div>
      <br />
      <h1>Badge</h1>
      <hr />
      <div className="tw:flex tw:gap-2">
        <Cta variant="primary" size="sm" shapes={['badge']} muted>
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="secondary" size="sm" shapes={['badge']} muted>
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="destructive" size="sm" shapes={['badge']} muted>
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="outline" size="sm" shapes={['badge']} muted>
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="ghost" size="sm" shapes={['badge']} muted>
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="link" size="sm" shapes={['badge']} muted>
          <Icon icon="lucide:plus" /> Add
        </Cta>
      </div>
      <div className="tw:flex tw:gap-2">
        <Cta variant="primary" shapes={['icon', 'badge']} muted>
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="secondary" shapes={['icon', 'badge']} muted>
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="destructive" shapes={['icon', 'badge']} muted>
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="outline" shapes={['icon', 'badge']} muted>
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="ghost" shapes={['icon', 'badge']} muted>
          <Icon icon="lucide:plus" />
        </Cta>
      </div>
      {/* <div className="tw:flex tw:gap-2">
        <Cta asChild variant="primary" shapes={['pill', 'badge']} >
          <span>
            <Avatar>
              <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
            Tim Lee
          </span>
        </Cta>
        <Cta asChild variant="secondary" shapes={['pill', 'badge']} >
          <span>
            <Avatar>
              <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
            Tim Lee
          </span>
        </Cta>
        <Cta asChild variant="destructive" shapes={['pill', 'badge']} >
          <span>
            <Avatar>
              <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
            Tim Lee
          </span>
        </Cta>
        <Cta asChild variant="outline" shapes={['pill', 'badge']} >
          <span>
            <Avatar>
              <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
            Tim Lee
          </span>
        </Cta>
        <Cta asChild variant="ghost" shapes={['pill', 'badge']} >
          <span>
            <Avatar>
              <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
            Tim Lee
          </span>
        </Cta>
      </div>
      <div className="tw:flex tw:gap-2">
        <Cta asChild variant="primary" shapes={['pill', 'badge']} >
          <span>
            <Icon icon='lucide:github' />
            Github
          </span>
        </Cta>
        <Cta asChild variant="secondary" shapes={['pill', 'badge']} >
          <span>
            <Icon icon='lucide:github' />
            Github
          </span>
        </Cta>
        <Cta asChild variant="destructive" shapes={['pill', 'badge']} >
          <span>
            <Icon icon='lucide:github' />
            Github
          </span>
        </Cta>
        <Cta asChild variant="outline" shapes={['pill', 'badge']} >
          <span>
            <Icon icon='lucide:github' />
            Github
          </span>
        </Cta>
        <Cta asChild variant="ghost" shapes={['pill', 'badge']} >
          <span>
            <Icon icon='lucide:github' />
            Github
          </span>
        </Cta>
      </div> */}
      <br />
      <h1>Badge Button</h1>
      <hr />
      <div className="tw:flex tw:gap-2">
        <Cta variant="primary" size="sm" shapes={['badge']} >
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="secondary" size="sm" shapes={['badge']} >
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="destructive" size="sm" shapes={['badge']} >
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="outline" size="sm" shapes={['badge']} >
          <Icon icon="lucide:plus" />Add
        </Cta>
        <Cta variant="ghost" size="sm" shapes={['badge']} >
          <Icon icon="lucide:plus" /> Add
        </Cta>
        <Cta variant="link" size="sm" shapes={['badge']} >
          <Icon icon="lucide:plus" /> Add
        </Cta>
      </div>
      <div className="tw:flex tw:gap-2">
        <Cta variant="primary" size="sm" shapes={['icon', 'badge']} >
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="secondary" size="sm" shapes={['icon', 'badge']} >
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="destructive" size="sm" shapes={['icon', 'badge']} >
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="outline" size="sm" shapes={['icon', 'badge']} >
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="ghost" size="sm" shapes={['icon', 'badge']} >
          <Icon icon="lucide:plus" />
        </Cta>
        <Cta variant="link" size="sm" shapes={['icon', 'badge']} >
          <Icon icon="lucide:plus" />
        </Cta>
      </div>
      {/* <div className="tw:flex tw:gap-2">
        <Cta variant="primary" shapes={['pill', 'badge']} >
          <Avatar>
            <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
            <AvatarFallback>TL</AvatarFallback>
          </Avatar>
          Tim Lee
        </Cta>
        <Cta variant="secondary" shapes={['pill', 'badge']} >
          <Avatar>
            <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
            <AvatarFallback>TL</AvatarFallback>
          </Avatar>
          Tim Lee
        </Cta>
        <Cta variant="destructive" shapes={['pill', 'badge']} >
          <Avatar>
            <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
            <AvatarFallback>TL</AvatarFallback>
          </Avatar>
          Tim Lee
        </Cta>
        <Cta variant="outline" shapes={['pill', 'badge']} >
          <Avatar>
            <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
            <AvatarFallback>TL</AvatarFallback>
          </Avatar>
          Tim Lee
        </Cta>
        <Cta variant="ghost" shapes={['pill', 'badge']} >
          <Avatar>
            <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
            <AvatarFallback>TL</AvatarFallback>
          </Avatar>
          Tim Lee
        </Cta>
      </div>
      <div className="tw:flex tw:gap-2">
        <Cta variant="primary" shapes={['pill', 'badge']} >
          <Icon icon='lucide:github' />
          Github
        </Cta>
        <Cta variant="secondary" shapes={['pill', 'badge']} >
          <Icon icon='lucide:github' />
          Github
        </Cta>
        <Cta variant="destructive" shapes={['pill', 'badge']} >
          <Icon icon='lucide:github' />
          Github
        </Cta>
        <Cta variant="outline" shapes={['pill', 'badge']} >
          <Icon icon='lucide:github' />
          Github
        </Cta>
        <Cta variant="ghost" shapes={['pill', 'badge']} >
          <Icon icon='lucide:github' />
          Github
        </Cta>
      </div> */}

    </div>
  )
}