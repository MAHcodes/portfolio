import Head from "next/head";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import * as SKILLS from "../constants/techStacks";

const mySkills = Object.values(SKILLS)
  .map((skill) => skill.name)
  .sort((a, b) => (a > b ? 1 : 0))
  .join(", ");

const structuredData = {
  "@context": "http://www.schema.org",
  "@type": "Person",
  name: "MAHcodes",
  alternateName: "Mhmd",
  nationality: "Lebanese",
  email: "contact@mah.codes",
  image: `${process.env.NEXT_PUBLIC_HOST}/profile.jpg`,
  birthPlace: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beirut",
      addressRegion: "LB",
      addressCountry: "Lebanon",
    },
  },
  birthDate: "2002-2-10",
  telephone: "+961 81 921 320",
  gender: "Male",
  Description: "Frontend Web Developer based in Lebanon",
  disambiguatingDescription: "Founder of canadiansouq.com",
  jobTitle: "Frontend Web Developer",
  worksFor: [
    {
      "@type": "Organization",
      name: "Canadian Souq Inc.",
      sameAs: [
        "https://www.facebook.com/canadiansouq",
        "https://www.instagram.com/canadiansouq",
      ],
    },
  ],
  url: process.env.NEXT_PUBLIC_HOST,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beirut",
    addressRegion: "LB",
    addressCountry: "Lebanon",
  },
  sameAs: [
    "https://github.com/MAHcodes",
    "https://www.linkedin.com/in/mah-codes-66b0671b7/",
    "https://twitter.com/mahcodes",
  ],
};

const Home = () => (
  <>
    <Head>
      <title>MAHcodes - Frontend Web Developer based in Lebanon</title>
      <meta
        name="title"
        content="MAHcodes - Frontend Web Developer based in Lebanon"
      />
      <meta
        name="description"
        content={`MAHcodes - Frontend Web Developer based in Lebanon, my top skills: ${mySkills}`}
      />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="theme-color" content="#7287fd" />
      <meta
        name="keywords"
        content="frontend developer, developers in lebanon, mahcodes"
      />
      <link
        rel="shortcut icon"
        href={`${process.env.NEXT_PUBLIC_HOST}/logo.svg`}
        type="image/x-icon"
      />
      <meta name="robots" content="index, follow" />

      {/* open graph meta tags */}
      <meta
        property="og:title"
        content="MAHcodes - Frontend Web Developer based in Lebanon"
      />
      <meta
        property="og:description"
        content={`MAHcodes - Frontend Web Developer based in Lebanon, my top skills: ${mySkills}`}
      />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_HOST}/profile.jpg`}
      />
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_HOST} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />

      {/* twitter meta tags */}
      <meta
        name="twitter:description"
        content={`MAHcodes - Frontend Web Developer based in Lebanon, my top skills: ${mySkills}`}
      />
      <meta
        name="twitter:image"
        content={`${process.env.NEXT_PUBLIC_HOST}/profile.jpg`}
      />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_HOST} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="MAHcodes - Frontend Web Developer based in Lebanon"
      />

      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>

    <main>
      <Hero />
      <Work />
      <Skills />
      <Contact />
    </main>
  </>
);

export default Home;
