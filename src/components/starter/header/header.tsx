import { component$ } from "@builder.io/qwik";
import { NavBar } from "~/components/NavBar/navbar";
import { Navigation } from "~/components/Navigation/navigation";
export default component$(() => {
  return (
    <header>
      <NavBar></NavBar>
      <Navigation></Navigation>
    </header>
  );
});
