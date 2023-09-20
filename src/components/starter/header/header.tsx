import { component$ } from "@builder.io/qwik";
import { Navigation } from "~/components/Navigation/navigation";
export default component$(() => {
  return (
    <header>
      <img src="./logo.svg " alt="easybank logo" />
      <Navigation></Navigation>
    </header>
  );
});
