import { component$ } from "@builder.io/qwik";

export interface CardProps {
  img_link: string;
  img_alt: string;
  author: string;
  title: string;
  intro_text: string;
}

export const Card = component$<CardProps>(
  ({ img_link, img_alt, author, title, intro_text }) => {
    return (
      <div class="pb-6 ">
        <img class="rounded-t-lg" src={img_link} alt={img_alt} />
        <div class="bg-white py-6 rounded-b-lg px-4 text-left">
          <h5 class="mb-4 text-xs text-tp-grayishBlue">By {author}</h5>
          <h4 class="text-tp-darkBlue mb-2 text-lg">{title}</h4>
          <p class="text-tp-grayishBlue text-sm">{intro_text}</p>
        </div>
      </div>
    );
  },
);
