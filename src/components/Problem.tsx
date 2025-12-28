import { AlertTriangle, Clock, Globe, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  {
    icon: Heart,
    value: "#1",
    label: "Most Common",
    description: "Malignant bone tumor in children and adolescents",
  },
  {
    icon: Clock,
    value: "81%",
    label: "Advanced Cases",
    description: "Present with metastatic disease in low-resource regions",
  },
  {
    icon: AlertTriangle,
    value: "3×",
    label: "Higher Mortality",
    description: "Death rates in low-income vs. high-income countries",
  },
  {
    icon: Globe,
    value: "Months",
    label: "Delayed Diagnosis",
    description: "Average diagnostic delay in underserved communities",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-20 md:py-32 bg-gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-coral/10 text-coral text-sm font-medium mb-4">
              The Challenge
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Children are dying from preventable delays
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Osteosarcoma—the most common malignant bone tumor in children—has vastly different outcomes depending on where you live. In low-resource regions, delayed diagnosis leads to devastating consequences.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-teal/30 transition-all duration-300 hover:shadow-glow h-full">
                <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-4 group-hover:bg-coral/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-coral" />
                </div>
                <div className="text-3xl font-display font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-teal mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Key Issues */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal delay={0}>
            <div className="p-8 rounded-2xl bg-card border border-border h-full">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                The Diagnostic Gap
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0" />
                  <span>Advanced imaging (MRI, CT) is expensive and scarce in many regions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0" />
                  <span>X-rays are widely available—but radiologist expertise is not</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0" />
                  <span>Early-stage tumors are often missed without specialist training</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="p-8 rounded-2xl bg-card border border-border h-full">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                The Human Cost
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                  <span>Late-stage diagnosis often requires limb amputation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                  <span>5-year survival drops dramatically with metastatic disease</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                  <span>Children in low-income countries bear the greatest burden</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Problem;
