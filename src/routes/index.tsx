import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/Button/button";
import { Card } from "~/components/Card/card";
import { SimpleCard } from "~/components/SimpleCard/simpleCard";
export default component$(() => {
  return (
    <>
      {/*  intro section */}
      <section class="bg-tp-veryLigthGray flex flex-col justify-center text-center  mb-16">
        <div class="my-0 mx-[auto] max-w-2xs ">
          <h2 class="text-4xl text-tp-darkBlue  pb-3">
            Next generation digital banking
          </h2>
          <p class=" text-tp-grayishBlue pb-2 text-sm">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button text="Request Invite"></Button>
        </div>
      </section>

      {/*  why us section */}
      <div class=" bg-tp-lightGrayish    grid grid-cols-1 justify-items-center py-8">
        <section class=" text-center max-w-2xs ">
          <div class="pb-6">
            <h2 class="text-3xl text-tp-darkBlue py-4 ">
              Why choose Easybank?
            </h2>
            <p class="text-tp-grayishBlue ">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <section>
            <ul>
              <li>
                <SimpleCard
                  title="Online Banking"
                  description="
  Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world."
                  image_link="./images/icon-online.svg"
                  image_alt="digital drawing of a credit card"
                ></SimpleCard>
              </li>

              <li>
                <SimpleCard
                  title="Simple Budgeting"
                  description="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits. "
                  image_link="./images/icon-budgeting.svg"
                  image_alt="digital drawing of a credit card"
                ></SimpleCard>
              </li>
              <li>
                <SimpleCard
                  title="Fast Onboarding"
                  description=" We don’t do branches. Open your account in minutes online and start taking control of your finances right away. "
                  image_link="./images/icon-onboarding.svg"
                  image_alt="digital drawing of a credit card"
                ></SimpleCard>
              </li>

              <li>
                <SimpleCard
                  title="Open API"
                  description=" Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. "
                  image_link="./images/icon-api.svg"
                  image_alt="digital drawing of a credit card"
                ></SimpleCard>
              </li>
            </ul>
          </section>
        </section>
      </div>

      {/*  article section */}

      <div class=" bg-tp-veryLightGray ">
        <section class=" my-0 mx-[auto] max-w-xs py-8 text-center">
          <h3 class="text-3xl pb-6 text-tp-darkBlue">Latest Articles</h3>

          <Card
            title="Recieve money in any curency with no fees"
            author="Claire Robinson"
            intro_text=" The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … "
            img_link="./images/image-currency.jpg"
            img_alt="multiple and different dollars spread around"
          ></Card>

          <Card
            title="Treat yourself without worrying about money"
            author="Wilson Hutton"
            intro_text=" Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you … "
            img_link="./images/image-restaurant.jpg"
            img_alt="airplane wing amid cluods on a sunny day"
          ></Card>

          <Card
            title="Take your Easybank card wherever you go"
            author="Wilson Hutton"
            intro_text=" We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … "
            img_link="./images/image-plane.jpg"
            img_alt="colorful confetti thrown against a blue wall"
          ></Card>

          <Card
            title="Our invite-only Beta accounts are now live!"
            author="Claire Robinson"
            intro_text=" Our invite-only Beta accounts are now live! After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... "
            img_link="./images/image-confetti.jpg"
            img_alt="multiple and different dollars spread around"
          ></Card>
        </section>
      </div>
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
