import { component$ } from "@builder.io/qwik";

export interface CardProps {
  title: string;
  description: string;
  image_link: string;
  image_alt: string;
}

export const Card = component$<CardProps>(
  ({ image_link, image_alt, title, description }) => {
    return (
      <div>
        <img src={image_link} alt={image_alt} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  },
);
