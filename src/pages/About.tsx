import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <WhyUs />
        <Team />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default About;
