type GitHubUriParams = {
  owner: string;
  repo: string;
  branch?: string;
  filePath?: string;
  action: 'view' | 'edit' | 'issue';
  issueTitle?: string;
  issueBody?: string;
};

export const generateGitHubUrl = ({ owner, repo, branch, filePath, action, issueTitle, issueBody }: GitHubUriParams) => {
  const baseUrl = `https://github.com/${owner}/${repo}`;
  switch (action) {
    case 'view':
      return `${baseUrl}/blob/${branch}/${filePath}`;
    case 'edit':
      return `${baseUrl}/edit/${branch}/${filePath}`;
    case 'issue':
      return `${baseUrl}/issues/new?title=${encodeURIComponent(issueTitle || '')}&body=${encodeURIComponent(issueBody || '')}`;
    default:
      throw new Error('Invalid action specified');
  }
}