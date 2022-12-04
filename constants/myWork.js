import {
  figma,
  nextjs,
  tailwindcss,
  storybook,
  strapi,
  redux,
  graphql,
  typescript,
} from "./techStacks";

export const myWork = [
  {
    thumbnail: "/images/canadiansouq.avif",
    title: "canadiansouq.com",
    description:
      "This is my best site I built, because I'm the owner of the business, So I made my own decisions with everything.",
    techStack: {
      design: [figma],
      frontend: [nextjs, typescript, redux, tailwindcss, storybook],
      api: [graphql],
      backend: [strapi],
    },
    url: "https://canadiansouq.com",
    sourceCode: "https://github.com/MAHcodes/canadiansouq.com",
  },
];
