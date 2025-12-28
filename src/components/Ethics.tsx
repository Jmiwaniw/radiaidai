import { Shield, Eye, Users, Lock, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const principles = [
  {
    icon: Lock,
    title: "Data Privacy",
    description: "Patient data is protected with industry-standard encryption and never shared without explicit consent.",
  },
  {
    icon: Eye,
    title: "AI Transparency",
    description: "Explainable AI outputs with visual heatmaps ensure clinicians understand every prediction.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    description: "RadiAID supports—never replaces—clinical decision-making by qualified healthcare professionals.",
  },
  {
    icon: Shield,
    title: "Clinical Oversight",
    description: "All AI recommendations are designed for review and validation by trained medical staff.",
  },
  {
    icon: Heart,
    title: "Health Equity",
    description: "Built specifically to serve underserved communities and reduce global healthcare disparities.",
  },
];

const Ethics = () => {
  return (
    <section id="ethics" className="py-20 md:py-32 bg-gradient-section relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-coral/10 text-coral text-sm font-medium mb-4">
              Ethics & Responsibility
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built on Trust
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe responsible AI in healthcare requires unwavering commitment to ethics, transparency, and equity.
            </p>
          </div>
        </ScrollReveal>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <ScrollReveal key={principle.title} delay={index * 100}>
              <div
                className={`group p-6 rounded-2xl bg-card border border-border hover:border-teal/30 transition-all duration-300 hover:shadow-soft h-full ${
                  index === 4 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                  <principle.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ethics;
