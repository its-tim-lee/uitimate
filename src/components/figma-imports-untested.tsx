import React from "react";
import {
  Content,
  fetchOneEntry,
  getBuilderSearchParams,
  isPreviewing,
  type BuilderContent,
} from "@builder.io/sdk-react";
import { CUSTOM_COMPONENTS } from "../builder-registry";

// Builder Public API Key set in .env file
const BUILDER_API_KEY = import.meta.env.VITE_PUBLIC_BUILDER_KEY;
const MODEL_NAME = "figma-imports";

console.info('BUILDER_API_KEY', BUILDER_API_KEY);

export default function BuilderPage() {
  const [notFound, setNotFound] = React.useState(false);
  const [content, setContent] = React.useState<BuilderContent | null>(null);

  // get the page content from Builder
  React.useEffect(() => {
    fetchOneEntry({
      model: MODEL_NAME,
      apiKey: BUILDER_API_KEY,
      userAttributes: {
        urlPath: window.location.pathname,
      },
      options: getBuilderSearchParams(new URL(location.href).searchParams),
    })
      .then((content) => {
        if (content) {
          setContent(content);
        }
        setNotFound(!content);
      })
      .catch((err) => {
        console.log("Oops: ", err);
      });
  }, []);

  // If no page is found, return
  // a 404 page from your code.
  if (notFound && !isPreviewing()) {
    return <div>404 Page Not Found</div>;
  }

  // return the page when found
  return (
    <>
      {/* Render the Builder page */}
      <Content
        content={content}
        model={MODEL_NAME}
        apiKey={BUILDER_API_KEY}
        customComponents={CUSTOM_COMPONENTS}
      />
    </>
  );
}
