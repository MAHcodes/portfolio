import TechStackItem from "./TechStackItem";

const TechStackList = ({techStack}) => (
  <>
    <h4 className="font-bold text-text text-base my-2">Tech Stack:</h4>
    {techStack.design.length > 0 ? (
      <TechStackItem items={techStack.design} title="Design:" />
    ) : null}
    {techStack.frontend.length > 0 ? (
      <TechStackItem items={techStack.frontend} title="Frontend:" />
    ) : null}
    {techStack.api.length > 0 ? (
      <TechStackItem items={techStack.api} title="API:" />
    ) : null}
    {techStack.backend.length > 0 ? (
      <TechStackItem items={techStack.backend} title="Backend:" />
    ) : null}
  </>
);

export default TechStackList;
