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
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
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

        {/* Steps with Images - Alternating Layout */}
        <div className="max-w-6xl mx-auto space-y-20">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={step.step} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                {/* Phone Image */}
                <div className="flex-1 flex justify-center">
                  <div className="relative max-w-[260px] md:max-w-[280px]">
                    <img 
                      src={step.image} 
                      alt={step.imageAlt}
                      className="w-full h-auto rounded-[2rem] shadow-lg"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 max-w-xl">
                  <div className="flex items-start gap-4">
                    {/* Step Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-xl bg-teal flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                          {step.step}
                        </span>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-5 leading-relaxed text-lg">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-4 py-1.5 rounded-full bg-teal-muted text-teal text-sm font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
