import { type FC } from 'react';
import { CodeBlock } from './CodeBlock';

// Import raw files
import coreCss from '../../style/core.css?raw';
import sidebarAnatomy from '../ui/Sidebar/Sidebar.anatomy.txt?raw';
import formAnatomy from '../ui/Form/Form.anatomy.txt?raw';

const codeMap: Record<string, { code: string; language: string }> = {
  'core-css': { code: coreCss, language: 'css' },
  'sidebar-anatomy': { code: sidebarAnatomy, language: 'tsx' },
  'form-anatomy': { code: formAnatomy, language: 'tsx' },
};

interface DirtyFixCodeBlockProps {
  id: string;
  className?: string;
}

export const DirtyFixCodeBlock: FC<DirtyFixCodeBlockProps> = ({ id, className }) => {
  const entry = codeMap[id];
  if (!entry) {
    return <div className="tw-text-red-500">No code found for id: {id}</div>;
  }
  return (
    <CodeBlock language={entry.language} className={className}>
      {entry.code}
    </CodeBlock>
  );
};

export default DirtyFixCodeBlock;