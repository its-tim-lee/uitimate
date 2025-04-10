import React from 'react';
import { Heading, HeadingSubtitle, HeadingTitle } from "#/components/ui/Heading/Heading"
import { Icon } from "#/components/ui/Icon/Icon"
import { Cta } from "#/components/ui/Cta/Cta"
import { Link, useLocation } from 'react-router';
import { generateGitHubUrl } from "#/helpers/uri";
import repo from "#/data/repo";
import { upperCamelCase } from "#/helpers/font";
const ComponentPageHero = ({ title, subtitle }: { title: string; subtitle: React.ReactNode; }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/');

  // Assuming the URL structure is /docs/components/{category}/{componentName}/api
  const componentCategory = upperCamelCase(pathSegments[3]);
  const componentName = upperCamelCase(pathSegments[4]);
  const pageName = pathSegments[5].toLowerCase(); // api or introduction

  const branch = 'main';
  const basePath = 'packages/docs/app/components/ui';
  const filePath = `${basePath}/${componentName}/${componentName}.tsx`;

  const viewComponentUrl = generateGitHubUrl({
    owner: repo.owner,
    repo: repo.name,
    branch,
    filePath,
    action: 'view'
  });

  const reportBugUrl = generateGitHubUrl({
    owner: repo.owner,
    repo: repo.name,
    action: 'issue' as const,
    issueTitle: `${componentCategory} Component / ${componentName} / concise-issue-title`,
  });

  const editPageUrl = generateGitHubUrl({
    owner: repo.owner,
    repo: repo.name,
    branch,
    filePath: `${basePath}/${componentName}/${componentName}.${pageName}.tsx`, // Adjusted for the API page
    action: 'edit'
  });

  return <div className='tw:mb-6'>
    <Heading size="h1" className="tw:mb-4">
      <HeadingTitle className="tw:mb-2">{title}</HeadingTitle>
      <HeadingSubtitle>{subtitle}</HeadingSubtitle>
    </Heading>
    <div className="tw:flex tw:gap-2 tw:flex-wrap">
      <Link to={viewComponentUrl} target="_blank" >
        <Cta shapes={['badge']} variant="outline">
          <Icon icon='lucide:github' /> View the component
        </Cta>
      </Link>
      <Link to={reportBugUrl} target="_blank" >
        <Cta shapes={['badge']} variant="outline">
          <Icon icon='lucide:bug' /> Report a Bug
        </Cta>
      </Link>
      {/* <Cta shapes={['badge']} variant="outline" >
        <Icon icon='lucide:figma' /> Figma Design
      </Cta> */}
      <Link to={editPageUrl} target="_blank">
        <Cta shapes={['badge']} variant="outline">
          <Icon icon='lucide:edit-3' /> Edit this page
        </Cta>
      </Link>
    </div>
  </div>
}

export default ComponentPageHero;