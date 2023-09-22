import { component$ } from "@builder.io/qwik";

export interface CardProps {
  title: string;
  description: string;
  image_link: string;
  image_alt: string;
}

export const SimpleCard = component$<CardProps>(
  ({ image_link, image_alt, title, description }) => {
    return (
      <div class=" flex flex-col items-center py-6">
        <img src={image_link} alt={image_alt} class=" mb-3" />
        <h3 class="text-xl mb-4">{title}</h3>
        <p class=" text-tp-grayishBlue">{description}</p>
      </div>
    );
  },
);
