import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Contribution from "@/components/Contribution";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Github from "@/components/Github";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skill />
      <Project />
      <Github />
      <Contribution />
      <Contact />
      <Footer />
    </div>
  );
}
