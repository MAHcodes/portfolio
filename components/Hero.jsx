import Link from "next/link";
import AnimatedText from "./AnimatedText";
import Button from "./Button";
import Arrow from "./icons/Arrow.jsx";
import Profile from "./icons/Profile";

const Hero = () => (
  <section
    id="hero"
    className="pt-32 lg:pt-52 pb-32 lg:pb-36 flex flex-col-reverse lg:flex-row items-center justify-between relative overflow-hidden container gap-8"
  >
    <div className="w-fit md:w-auto my-auto text-text">
      <p className="flex gap-2 items-center">
        Hello
        <video
          width="24"
          height="24"
          loop="true"
          muted
          src="/images/hi.webm"
          autoplay="true"
          alt="hand wavying hello"
        />
        I&apos;m a
      </p>
      <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-lavender pt-4 pb-8">
        Frontend Developer
      </h1>
      <p className="text-xl mb-8">
        I craft <span className="font-bold">AWESOME</span> websites with
        <span className="inline-flex pl-1">
          <video
            width="24"
            height="24"
            loop="true"
            muted
            src="/images/heart.webm"
            autoplay="true"
            alt="heart on fire, passion"
          />
        </span>
      </p>
      <div className="flex flex-col-reverse sm:flex-row items-center gap-3 mb-8 relative">
        <Link href="#work" className="w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            title="See my Work"
          >
            See my Work
          </Button>
        </Link>
        <Link href="#contact" className="w-full sm:w-auto">
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            title="Get in Touch"
          >
            Get in touch!
          </Button>
        </Link>
        <Arrow
          className="absolute left-0 bottom-0 lg:-translate-x-18 translate-y-full w-24 scale-x-[-1] -rotate-45"
          stroke="stroke-overlay0"
        />
      </div>
    </div>
    <div>
      <Profile fill="fill-text" />
    </div>
    <AnimatedText />
  </section>
);

export default Hero;
