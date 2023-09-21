import { component$ } from "@builder.io/qwik";
import { NavBar } from "~/components/NavBar/navbar";
export default component$(() => {
  return (
    <header>
      <NavBar></NavBar>
    </header>
  );
});
