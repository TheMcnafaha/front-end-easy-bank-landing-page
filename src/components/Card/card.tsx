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
      <div>
        <img src={img_link} alt={img_alt} />
        <h5>By {author}</h5>
        <h4>{title}</h4>
        <p>{intro_text}</p>
      </div>
    );
  },
);
