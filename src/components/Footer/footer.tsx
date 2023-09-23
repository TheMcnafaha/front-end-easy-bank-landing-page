import { component$ } from "@builder.io/qwik";
import { Button } from "../Button/button";
export const Footer = component$(() => {
  return (
    <div class=" bg-tp-darkBlue py-6 ">
      <img
        class="fill-white my-0 mx-[auto] mb-4"
        src="./images/alt_logo.svg"
        alt="logo of EasyBank"
      />
      {/*  lesson learned: dont flex svgs xddd  */}
      <div class="flex flex-col items-center max-w-xs gap-3 my-0 mx-[auto]">
        <ul class=" flex justify-around gap-4">
          <li>
            <img src="./images/icon-facebook.svg " alt="logo of facebook" />
          </li>
          <li>
            <img src="./images/icon-youtube.svg " alt="logo of facebook" />
          </li>
          <li>
            <img src="./images/icon-twitter.svg " alt="logo of facebook" />
          </li>
          <li>
            <img src="./images/icon-pinterest.svg " alt="logo of facebook" />
          </li>
          <li>
            <img src="./images/icon-instagram.svg " alt="logo of facebook" />
          </li>
        </ul>
        <ul class="flex flex-col items-center gap-2 text-white text-xs mb-3">
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
        <Button text="Request Invite"></Button>
        <p class="text-tp-grayishBlue mt-3 text-xs">
          {" "}
          {" © Easybank. All Rights Reserved "}{" "}
        </p>
      </div>
    </div>
  );
});
