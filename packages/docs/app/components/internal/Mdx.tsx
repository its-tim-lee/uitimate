import { useMDXComponent } from '#/helpers/hooks/useMDXComponent'
import { type ComponentProps } from 'react';
import ComponentPageUsage from './ComponentPageUsage.tsx';
import { DemoScenariosSection, DemoRecipeSection, DependenciesSection } from './ApiDoc.tsx';
import { cn } from '#/helpers/utils.ts';
import { Link } from 'react-router';
import VersatileTabs from './VersatileTabs.tsx';
import { VersatileTabs2, VersatileTabs2List, VersatileTabs2Trigger, VersatileTabs2Content } from './VersatileTabs2.tsx';
import ComponentPageHero from './ComponentPageHero.tsx';
import { QA, DefinitionSection, QASection, QuickDemoSection, QuickStartSection } from './IntroductionDoc.tsx';
import { QA2, QA2Item, QA2Trigger, QA2Content } from './QA2.tsx';
import Banner from './InfoBanner.tsx';
import { LinkScrollTo } from './LinkScrollTo.tsx';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/Collapsible/Collapsible.tsx';
import { Icon } from '../ui/Icon/Icon.tsx';
import ComponentDependencyNotice from './ComponentDependencyNotice';
import OneClickSetup from './OneClickSetup';
import { DependenciesListingSection, OneClickSetupSection } from './SetupDoc.tsx';
import TerminalCommandInstructor, { Pnpm, Yarn, Npm } from './TerminalCommandInstructor';
import { CodeBlock } from './CodeBlock';
import PathAdjuster from './PathAdjusterWrapper';
import DownloadHelpers from './DownloadHelpers';
import { HelpersPathSection, ComponentsPathSection } from './PathPreferenceSection';

const components = {
  PathAdjuster,
  TerminalCommandInstructor,
  Pnpm,
  Yarn,
  Npm,
  DependenciesListingSection,
  OneClickSetupSection,
  OneClickSetup,
  DownloadHelpers,
  ComponentPageHero,
  ComponentPageUsage,
  DemoScenariosSection,
  DemoRecipeSection,
  DependenciesSection,
  QuickStartSection,
  QuickDemoSection,
  DefinitionSection,
  QASection,
  Banner,
  QA,
  QA2,
  QA2Item,
  QA2Trigger,
  QA2Content,
  VersatileTabs,
  VersatileTabs2,
  VersatileTabs2List,
  VersatileTabs2Trigger,
  VersatileTabs2Content,
  HelpersPathSection,
  ComponentsPathSection,
  Details: ({ ...props }: ComponentProps<typeof Collapsible>) => <Collapsible {...props} />,
  DetailsTrigger: ({ children, ...props }: ComponentProps<typeof CollapsibleTrigger>) => {
    return (
      <CollapsibleTrigger {...props} className='tw:cursor-pointer tw:flex tw:items-center tw:gap-2 tw:p-4 tw:pl-0 tw:text-muted-foreground'>
        <Icon icon='lucide:chevron-right' className='tw:in-data-[state=open]:rotate-90' />
        {children}
      </CollapsibleTrigger>
    )
  },
  DetailsContent: ({ ...props }: ComponentProps<typeof CollapsibleContent>) => <CollapsibleContent className='tw:p-4 tw:pt-0 tw:-mt-10 tw:text-muted-foreground' {...props} />,
  pre: (preProps: any) => { // code block
    const codeElement = preProps.children;
    const codeString = codeElement?.props?.children || '';
    const className = codeElement?.props?.className || '';
    return (
      <CodeBlock className={className} {...preProps}>
        {codeString}
      </CodeBlock>
    );
  },
  code: ({ className, ...props }: { className?: string } & React.HTMLAttributes<HTMLElement>) => {
    // Don't apply styling if it's within a pre (code block)
    const isInPre = className?.includes('language-') || false;
    if (isInPre) return <code className={className} {...props} />;
    return (
      <code
        className={cn(
          "tw:code not-prose",
          className
        )}
        {...props}
      />
    );
  },
  a: ({ className, ...props }: ComponentProps<'a'>) => {
    if (!props.href) {
      return <a className={cn("tw:link", className)} {...props} />;
    }
    // if it's an external link...
    if (props.href.startsWith('http') || props.href.startsWith('https')) {
      return (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className={cn("tw:link", className)}
          to={props.href}
          {...props}
        />
      );
    }

    // If it starts with /, ./, or ../ treat it as a path
    if (props.href.startsWith('/') || props.href.startsWith('./') || props.href.startsWith('../')) {
      const relativePath = props.href.startsWith('/') ? `.${props.href}` : props.href;
      return (
        <Link
          className={cn("tw:link", className)}
          to={relativePath}
          {...props}
        />
      );
    }

    // Otherwise, treat it as a scroll target
    return (
      <LinkScrollTo
        to={props.href}
        className={className}
      >
        {props.children}
      </LinkScrollTo>
    );
  },
  ComponentDependencyNotice,
  CodeBlock,
}


type MdxProps = ComponentProps<'div'> & {
  code: string
}
export const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}