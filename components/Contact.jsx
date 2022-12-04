import Title from "./Title";
import Email from "./icons/Email";
import Phone from "./icons/Phone";
import ContactInfo from "./ContactInfo";
import { socials } from "../constants/socials";

const Contact = () => (
  <section id="contact" className="my-20 lg:mt-32 container">
    <Title text="Need a Website?" />
    <div className="flex gap-8 items-center justify-center mt-4 flex-col md:flex-row">
      <Box>
        <h3 className="text-lg pb-8 font-bold">Contact me</h3>
        <ContactInfo
          href="mailto:contact@mah.codes"
          Icon={Email}
          text="contact@mah.codes"
        />
        <ContactInfo
          href="tel:+96181921320"
          Icon={Phone}
          text="+961 81 921 320"
        />
      </Box>
      <Box>
        <h3 className="text-lg pb-8 font-bold">Follow me on</h3>
        {socials.map((social) => (
          <ContactInfo
            key={social.href}
            href={social.href}
            Icon={social.Icon}
            text={social.title}
          />
        ))}
      </Box>
    </div>
  </section>
);

const Box = ({ children }) => (
  <div className="flex items-center flex-col gap-4 justify-between p-8 rounded-md shadow-md w-full">
    {children}
  </div>
);

export default Contact;
