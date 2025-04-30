import { parse } from "@babel/parser";

export interface LockInfo {
  vendor: Record<string, string>;
  native: string[];
}

/**
 * Extracts vendor and native component dependencies from a file's source code.
 * @param code The source code of the file (e.g., Form.tsx)
 * @param pkgDeps The dependencies object from package.json
 * @returns LockInfo object with vendor and native arrays
 */
export function generate(code: string, pkgDeps: Record<string, string>): LockInfo {
  const ast = parse(code, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
  });

  const vendor: Record<string, string> = {};
  const native: string[] = [];

  for (const node of (ast.program.body as any[])) {
    if (node.type === "ImportDeclaration" || node.type === "ExportAllDeclaration") {
      const source: string = node.source.value; // @2025-04-30A
      // Vendor: @uitimate/*
      if (source.startsWith("@uitimate/")) {
        /**
         * @2025-04-30A
         * maybe we have the import statement like '@uitimate/lib-rhf-resolvers/zod' in our source code,
         * and that's literally what `source` above would be, but since a valid NPM package name can only have one slash,
         * that's what we're doing below, `base` will be '@uitimate/lib-rhf-resolvers'
         */
        const base = source.split("/").slice(0, 2).join("/");
        const depKey = Object.keys(pkgDeps).find(k => k === base);
        vendor[base] = depKey ? pkgDeps[depKey].replace(/^npm:/, "") : "UNKNOWN";
      }
      // Native: #/components/ui/*
      if (source.startsWith("#/components/ui/")) {
        // Extract the component name from the import path
        const match = source.match(/^#\/components\/ui\/([^/]+)/);
        if (match) {
          const compName = match[1];
          if (!native.includes(compName)) native.push(compName);
        }
      }
    }
  }
  return { vendor, native };
}