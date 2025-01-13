import React from "react";
import users from "../data/users.json";
import {
  Content,
  fetchOneEntry,
  getBuilderSearchParams,
  isPreviewing,
  type BuilderContent,
} from "@builder.io/sdk-react";
import { CUSTOM_COMPONENTS } from "../builder-registry";

// const BUILDER_API_KEY = import.meta.env.VITE_PUBLIC_BUILDER_KEY;
const BUILDER_API_KEY = '6efd0c48c4d24847b8d4855991e579f3';
const MODEL_NAME = "figma-imports";

export default function BuilderPage() {
  const [notFound, setNotFound] = React.useState(false);
  const [content, setContent] = React.useState<BuilderContent | null>(null);


console.log("BUILDER_API_KEY ", BUILDER_API_KEY);
  // get the page content from Builder
  React.useEffect(() => {
    fetchOneEntry({
      model: MODEL_NAME,
      apiKey: BUILDER_API_KEY,
      options: getBuilderSearchParams(new URL(location.href).searchParams),
      userAttributes: {
        urlPath: window.location.pathname,
      },

    })
      .then((content) => {
        console.log("content ", content);
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
        // data={{
        //   users
        // }}
        apiKey={BUILDER_API_KEY}
        customComponents={CUSTOM_COMPONENTS}
      />
    </>
  );
}
