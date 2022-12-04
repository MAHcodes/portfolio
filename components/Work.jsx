import Title from "./Titile";
import Button from "./Button";
import Strapi from "./icons/Strapi";

const Work = () => (
  <section>
    <div id="work" className="container bg-crust rounded-lg py-4">
      <Title text="My Work" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        cupiditate voluptate totam ipsum obcaecati unde laboriosam vero eos
        minima beatae illo dolor doloremque atque similique, dolore excepturi
        ipsa consequuntur expedita.
      </p>
      <Button variant="primary" size="lg" icon={<Strapi fill="fill-base" />}>Strapi</Button>
    </div>
  </section>
);

export default Work;
