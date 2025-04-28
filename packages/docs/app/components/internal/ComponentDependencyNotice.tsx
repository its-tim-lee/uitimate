import { useEffect, useState } from 'react';
import { generate } from '#/helpers/lock-info-generator';
import pkg from '#/../package.json';

export default function ComponentDependencyNotice({ component }: { component: string }) {
  const [deps, setDeps] = useState<{ vendor: Record<string, string>; native: string[] } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function runLock() {
      try {
        // Dynamically import the component's source code as raw text
        const mod = await import(`../ui/${component}/${component}.tsx?raw`);
        const code = mod.default || mod;
        setDeps(generate(code, pkg.dependencies));
      } catch (e) {
        setError(`Failed to load dependencies for ${component}`);
      }
    }
    runLock();
  }, [component]);

  if (error) return <div className="tw:text-destructive tw:font-bold">{error}</div>;
  if (!deps) return <div>Loading dependencies...</div>;

  return (
    <div className="tw:p-4 tw:rounded-lg tw:mb-4">
      <div className="tw:mb-2">
        <strong>Vendor dependencies:</strong>
        {Object.keys(deps.vendor).length === 0 ? (
          <span> None</span>
        ) : (
          <ul className="tw:list-disc tw:ml-6">
            {Object.entries(deps.vendor).map(([lib, ver]) => (
              <li key={lib}>{ver}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <strong>Uitimate components:</strong>
        {deps.native.length === 0 ? (
          <span> None</span>
        ) : (
          <ul className="tw:list-disc tw:ml-6">
            {deps.native.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}