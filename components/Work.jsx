import WebView from "./WebView";
import TechStackList from "./TechStackList";
import WorkButtons from "./WorkButtons";
import { myWork } from "../constants/myWork";

const Work = () => (
  <section>
    <div id="work" className="container">
      {myWork.map((work, i) => (
        <div
          key={work.url}
          className={`flex justify-between flex-col gap-8 px-4 bg-crust rounded-lg py-4 items-stretch ${
            i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          <WebView url={work.url} src={work.thumbnail} alt={work.title} />
          <div className="flex-06">
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
      ))}
    </div>
  </section>
);

export default Work;
