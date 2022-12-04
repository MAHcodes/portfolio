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
      "This is my best project I built, because I'm the owner of the business, So I made my own decisions.",
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
      "Official Page for the Arch Based Linux Distro XeroLinux...",
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
      "LunarVim is an open source porject, my contribution is desining and building the landing page.",
    techStack: {
      design: [figma],
      frontend: [reactjs, docusaurus],
    },
    url: "https://lunarvim.org",
    sourceCode: "https://github.com/LunarVim/lunarvim.org",
  },
  {
    thumbnail: "/images/mahcodes.png",
    title: "MAH.codes",
    description:
      "My personal portfolio, built within 48 hours, check the git history on github for proof.",
    techStack: {
      design: [figma],
      frontend: [nextjs, tailwindcss],
    },
    url: "https://mah.codes",
    sourceCode: "https://github.com/MAHcodes/portfolio",
  },
];
