import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Contribution from "@/components/Contribution";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Contribution />
      <Contact />
      <Footer />
    </div>
  );
}
