import { component$ } from "@builder.io/qwik";

export interface ButtonProps {
  text: string;
}

export const Button = component$<ButtonProps>(({ text }) => {
  return <button type="button">{text}</button>;
});
