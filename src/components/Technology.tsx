import { Cpu, Eye, Gauge, Zap, Shield, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Cpu,
    title: "Optimized Deep Learning",
    description: "Lightweight model designed for low-power smartphones with <2MB footprint.",
  },
  {
    icon: Eye,
    title: "Attention Mechanisms",
    description: "Advanced neural networks focus on clinically relevant image regions.",
  },
  {
    icon: Gauge,
    title: "Robust Preprocessing",
    description: "Augmentation techniques ensure consistent results across image quality.",
  },
  {
    icon: Zap,
    title: "Explainability Tools",
    description: "Grad-CAM heatmaps highlight suspicious regions for clinical review.",
  },
];

const metrics = [
  { label: "Accuracy", value: "~94%", description: "Proof-of-concept" },
  { label: "Model Size", value: "<2MB", description: "Mobile-optimized" },
  { label: "Inference", value: "<1s", description: "Real-time results" },
  { label: "False Negatives", value: "Minimized", description: "Safety first" },
];

const Technology = () => {
  return (
    <section id="technology" className="py-20 md:py-32 bg-gradient-section relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky/10 text-sky text-sm font-medium mb-4">
              Technology
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Innovation Behind RadiAID
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              State-of-the-art machine learning, designed for real-world clinical environments—not just lab benchmarks.
            </p>
          </div>
        </ScrollReveal>

        {/* Patent Pending Badge */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20">
              <ShieldCheck className="w-5 h-5 text-teal" />
              <span className="text-sm font-medium text-teal">Patent Pending Technology</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 100}>
              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-sky/30 transition-all duration-300 hover:shadow-soft h-full">
                <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center mb-4 group-hover:bg-sky/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-sky" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Performance Metrics */}
        <ScrollReveal delay={200}>
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-card border border-border">
            <h3 className="font-display text-xl font-semibold text-foreground text-center mb-8">
              Performance Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-teal mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Disclaimer */}
        <ScrollReveal delay={300}>
          <div className="max-w-3xl mx-auto mt-12 p-6 rounded-xl bg-muted/50 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-coral" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Important Disclaimer</h4>
                <p className="text-sm text-muted-foreground">
                  RadiAID is a screening and triage support tool, not a standalone diagnostic replacement. 
                  All results should be reviewed by qualified healthcare professionals. Clinical validation 
                  is ongoing.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Technology;
