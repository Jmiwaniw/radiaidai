import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Technology from "@/components/Technology";
import Impact from "@/components/Impact";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Ethics from "@/components/Ethics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Technology />
        <Impact />
        <Roadmap />
        <Team />
        <Partners />
        <Ethics />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
