import {
  figma,
  nextjs,
  tailwindcss,
  storybook,
  strapi,
  redux,
  graphql,
  typescript,
  reactjs,
  styledcomponents,
  docusaurus,
} from "./techStacks";

export const myWork = [
  {
    thumbnail: "/images/canadiansouq.avif",
    title: "canadiansouq.com",
    description:
      "This is my best project I built, because I'm the owner of the business, So I made my own decisions with everything.",
    techStack: {
      design: [figma],
      frontend: [nextjs, typescript, redux, tailwindcss, storybook],
      api: [graphql],
      backend: [strapi],
    },
    url: "https://canadiansouq.com",
    sourceCode: "https://github.com/MAHcodes/canadiansouq.com",
  },
  {
    thumbnail: "/images/xerolinux.avif",
    title: "xerolinux.xyz",
    description:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.",
    techStack: {
      design: [figma],
      frontend: [reactjs, styledcomponents],
    },
    url: "https://xerolinux.xyz",
    sourceCode: "https://github.com/MAHcodes/xerolinux.xyz",
  },
  {
    thumbnail: "/images/lunarvim.avif",
    title: "lunarvim.org",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    techStack: {
      design: [figma],
      frontend: [reactjs, docusaurus],
    },
    url: "https://lunarvim.org",
    sourceCode: "https://github.com/MAHcodes/lunarvim.org",
  },
];
