import { component$ } from "@builder.io/qwik";

export interface ButtonProps {
  text: string;
}

export const Button = component$<ButtonProps>(({ text }) => {
  return (
    <button
      class="bg-gradient-to-r font-bold px-5 py-2 rounded-2xl text-white  text-xs from-tp-limeGreen to-tp-brightCyan"
      type="button"
    >
      {text}
    </button>
  );
});
