import { component$ } from "@builder.io/qwik";

export interface NavigationProps {
  gap: string;
}

export const Navigation = component$<NavigationProps>(({ gap = "0" }) => {
  const classString = `flex flex-col gap-${gap}`;
  return (
    <ul class={classString}>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Blog</li>
      <li>Careers</li>
    </ul>
  );
});
