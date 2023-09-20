import { component$ } from "@builder.io/qwik";
import { Button } from "../Button/button";

export interface IntroProps {}

export const Intro = component$<IntroProps>((props) => {
  return (
    <section>
      <img
        src="./image-mockups.png "
        alt="multiple phones logged into easybank"
      />
      <h2>Next generation digital banking</h2>
      <p>
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <Button text="Request Invite"></Button>
    </section>
  );
});
