import Title from "./Title";
import * as SKILLS from "../constants/techStacks"
import TechStackItem from "./TechStackItem";

const Skills = () => (
  <section id="skills" className="container">
    <Title text="My Skills" />
    <TechStackItem items={Object.values(SKILLS).sort((a, b) => a > b ? 1 : 0)} center />
  </section>
)
export default Skills;
