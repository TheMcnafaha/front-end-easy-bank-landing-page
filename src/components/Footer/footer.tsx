import { component$ } from "@builder.io/qwik";
import { Navigation } from "../Navigation/navigation";

export const Footer = component$(() => {
  return (
    <div>
      <img src="./images/logo.svg " alt="logo of EasyBank" />
      <ul>
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
      <Navigation></Navigation>
      <p> {" © Easybank. All Rights Reserved "} </p>
    </div>
  );
});
