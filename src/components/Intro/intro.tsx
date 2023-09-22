import { component$ } from "@builder.io/qwik";
import { Button } from "../Button/button";

export interface IntroProps {}

export const Intro = component$<IntroProps>(() => {
  return (
    <section class="bg-tp-veryLigthGray text-center max-w-xs mb-16">
      <h2 class="text-3xl text-tp-darkBlue pb-4">
        Next generation digital banking
      </h2>
      <p class=" text-tp-grayishBlue pb-2">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <Button text="Request Invite"></Button>
    </section>
  );
});
