import { component$ } from "@builder.io/qwik";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./favicon-32x32.png"
      />

      <title>Frontend Mentor | Easybank landing page</title>
    </>
  );
});
