import { component$ } from "@builder.io/qwik";

export interface NavigationProps {}

export const Navigation = component$<NavigationProps>(() => {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Blog</li>
      <li>Careers</li>
    </ul>
  );
});
