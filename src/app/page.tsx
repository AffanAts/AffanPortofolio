// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import {TabsDefault} from "./tabs";
import ContactForm from "./contact-form";
 
export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      {/* <Testimonial />
      <PopularClients /> */}
      <TabsDefault></TabsDefault>
      <ContactForm />
      <Footer />
    </>
  );
}
