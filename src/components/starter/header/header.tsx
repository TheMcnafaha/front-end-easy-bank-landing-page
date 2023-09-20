import { component$ } from "@builder.io/qwik";
import { NavBar } from "~/components/NavBar/navbar";
import { Navigation } from "~/components/Navigation/navigation";
export default component$(() => {
  return (
    <header>
      <img src="./logo.svg " alt="easybank logo" />
      <NavBar></NavBar>
      <Navigation></Navigation>
    </header>
  );
});
