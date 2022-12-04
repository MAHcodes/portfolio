import WebView from "./WebView";
import TechStackList from "./TechStackList";
import WorkButtons from "./WorkButtons";
import { myWork } from "../constants/myWork";
import Arrow from "./icons/Arrow";
import { Fragment } from "react";

const Work = () => (
  <section>
    <div id="work">
      {myWork.map((work, i) => (
        <Fragment key={work.url}>
          <div
            className={`flex justify-between flex-col gap-8 hover:shadow-lg transition-shadow bg-crust rounded-lg p-4 items-stretch container ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
          >
            <WebView url={work.url} src={work.thumbnail} alt={work.title} />
            <div className="flex-06 flex items-stretch flex-col justify-start">
              <h3 className="font-bold text-3xl">
                <a
                  href={work.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:underline underline-offset-4 text-lavender"
                >
                  {work.title}
                </a>
              </h3>
              <p className="py-4">{work.description}</p>
              <TechStackList techStack={work.techStack} />
              <WorkButtons url={work.url} sourceCode={work.sourceCode} />
            </div>
          </div>
          {i < myWork.length - 1 ? (
            <Arrow
              className={`w-24 ${i % 2 === 0
                  ? "rotate-45 ml-auto md:-translate-x-[200%]"
                  : "-rotate-45 scale-x-[-1] md:translate-x-[200%]"
                }`}
              stroke="stroke-overlay0"
            />
          ) : null}
        </Fragment>
      ))}
    </div>
  </section>
);

export default Work;
