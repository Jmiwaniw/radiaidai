import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
            <span className="text-sm font-medium text-primary-foreground/90">AI-Powered Pediatric Cancer Detection</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Screen Smarter,{" "}
            <span className="text-teal-light">Not Harder</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            RadiAID uses AI to screen pediatric bone radiographs for osteosarcoma—helping clinicians identify malignant tumors earlier, especially in low-resource settings.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#how-it-works">
                Learn How It Works
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/about">Our Team</Link>
            </Button>
          </div>

          {/* 3 E's - Guiding Principles */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Enable",
                description: "Early detection using X-ray machines that already exist in clinics worldwide.",
              },
              {
                title: "Enhance",
                description: "Diagnostic confidence for healthcare providers with limited resources.",
              },
              {
                title: "Ensure",
                description: "That children receive the treatment they need before it's too late.",
              },
            ].map((principle) => (
              <div key={principle.title} className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 text-left">
                <div className="text-2xl md:text-3xl font-display font-bold text-teal-light mb-2">{principle.title}</div>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
