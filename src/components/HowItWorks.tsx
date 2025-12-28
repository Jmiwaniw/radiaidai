import { Upload, Brain, FileCheck, Globe } from "lucide-react";
import demoUpload from "@/assets/demo-upload.png";
import demoAnalyzing from "@/assets/demo-analyzing.png";
import demoResults from "@/assets/demo-results.png";
import demoLanguage from "@/assets/demo-language.png";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Capture or Upload",
    description: "Upload a digital radiograph or photograph an X-ray film using your smartphone.",
    features: ["Digital radiographs", "Smartphone photos", "Instant capture"],
    image: demoUpload,
    imageAlt: "RadiAID upload screen showing successful radiograph upload",
  },
  {
    icon: Brain,
    step: "02",
    title: "AI Analysis",
    description: "Our lightweight deep-learning model analyzes the image in under one second, combining imaging features with optional patient metadata.",
    features: ["<1 second processing", "Age & sex integration", "Lesion location data"],
    image: demoAnalyzing,
    imageAlt: "RadiAID AI processing screen showing analysis in progress",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Clear Results",
    description: "Receive a probability score (benign vs. malignant) with a visual heatmap highlighting suspicious regions—designed for non-specialist interpretation.",
    features: ["Probability score", "Visual heatmaps", "Actionable guidance"],
    image: demoResults,
    imageAlt: "RadiAID results screen showing malignancy probability and AI insights",
  },
  {
    icon: Globe,
    step: "04",
    title: "Multi-Language Support",
    description: "Available in multiple languages to ensure accessibility for healthcare providers around the world.",
    features: ["8+ languages", "Local accessibility", "Global reach"],
    image: demoLanguage,
    imageAlt: "RadiAID language selection screen with multiple language options",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-muted text-teal text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple. Fast. Lifesaving.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Four easy steps from X-ray to actionable insight—designed for clinicians in any setting.
          </p>
        </div>

        {/* Steps with Images */}
        <div className="max-w-6xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <div 
              key={step.step} 
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex gap-4 group">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center shadow-glow group-hover:shadow-[0_0_50px_hsl(174_62%_40%/0.3)] transition-shadow">
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative flex justify-center">
                  <div className="relative max-w-[280px]">
                    <img 
                      src={step.image} 
                      alt={step.imageAlt}
                      className="w-full h-auto drop-shadow-2xl"
                    />
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-teal/10 blur-2xl -z-10" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-sky/10 blur-2xl -z-10" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
