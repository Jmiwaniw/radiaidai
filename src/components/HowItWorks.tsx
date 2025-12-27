import { Upload, Brain, FileCheck, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Capture or Upload",
    description: "Upload a digital radiograph or photograph an X-ray film using your smartphone. Our optional quality-box accessory ensures consistent lighting and alignment.",
    features: ["Digital radiographs", "Smartphone photos", "Quality-box compatible"],
  },
  {
    icon: Brain,
    step: "02",
    title: "AI Analysis",
    description: "Our lightweight deep-learning model analyzes the image in under one second, combining imaging features with optional patient metadata.",
    features: ["<1 second processing", "Age & sex integration", "Lesion location data"],
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Clear Results",
    description: "Receive a probability score (benign vs. malignant) with a visual heatmap highlighting suspicious regions—designed for non-specialist interpretation.",
    features: ["Probability score", "Visual heatmaps", "Actionable guidance"],
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
            Three easy steps from X-ray to actionable insight—designed for clinicians in any setting.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[2.75rem] top-full w-0.5 h-16 bg-gradient-to-b from-teal/30 to-transparent" />
              )}
              
              <div className="flex flex-col md:flex-row gap-6 mb-8 group">
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
                <div className="flex-1 p-6 rounded-2xl bg-card border border-border hover:border-teal/30 transition-all duration-300 hover:shadow-soft">
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

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center md:hidden mb-8">
                  <ArrowDown className="w-5 h-5 text-teal/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
