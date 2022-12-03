import Link from "next/link";
import AnimatedText from "./AnimatedText";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-28 flex items-center relative overflow-hidden"
      style={{ minHeight: "calc(15vw + 45vh)" }}
    >
      <div className="container w-fit md:w-auto my-auto text-text">
        <h3>
          Hello👋 I&apos;m <span className="font-bold">MAHcodes</span>
        </h3>
        <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-lavender pt-4 pb-8">
          Frontend Developer
        </h1>
        <p className="text-xl mb-8">
          I craft <span className="font-bold">AWESOME</span> websites with ️❤️
        </p>
        <div className="flex items-center gap-2">
          <Link href="#projects">
            <Button variant="primary" size="lg">
              Projects
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="secondary" size="lg">
              Contact
            </Button>
          </Link>
        </div>
      </div>
      <AnimatedText />
    </section>
  );
};

export default Hero;
