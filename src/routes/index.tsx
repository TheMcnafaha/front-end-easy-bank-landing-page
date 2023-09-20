import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/Button/button";
import { Card } from "~/components/Card/card";
export default component$(() => {
  return (
    <>
      <section>
        <img
          src="./image-mockups.png "
          alt="multiple phones logged into easybank"
        />
        <h2>Next generation digital banking</h2>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button text="Request Invite"></Button>
      </section>

      <section>
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </section>

      <section>
        <h2>Online Banking</h2>
        <p>
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
        </p>
      </section>

      <section>
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>

        <ul>
          <li>
            <Card
              title="Online Banking"
              description="
  Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world."
              image_link="./icon-online.svg"
              image_alt="digital drawing of a credit card"
            ></Card>
          </li>

          <li>
            <Card
              title="Simple Budgeting"
              description="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits. "
              image_link="./icon-budgeting.svg"
              image_alt="digital drawing of a credit card"
            ></Card>
          </li>
          <li>
            <Card
              title="Fast Onboarding"
              description=" We don’t do branches. Open your account in minutes online and start taking control of your finances right away. "
              image_link="./icon-onboarding.svg"
              image_alt="digital drawing of a credit card"
            ></Card>
          </li>

          <li>
            <Card
              title="Open API"
              description=" Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. "
              image_link="./icon-api.svg"
              image_alt="digital drawing of a credit card"
            ></Card>
          </li>
        </ul>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
