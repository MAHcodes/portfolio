import Head from "next/head";
import { useLayoutEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  useLayoutEffect(() => {
    document.documentElement.className = "mocha";
  }, []);

  return (
    <div>
      <Head>
        <title>MAH.codes Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
};

export default Home;
