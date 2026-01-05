import { Smartphone, Zap, Globe, Shield } from "lucide-react";

const pillars = [
  {
    icon: Smartphone,
    title: "Accessibility",
    description: "Works with existing X-ray infrastructure—digital radiographs or smartphone photos of physical films.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "AI-powered analysis delivers results in under one second, enabling rapid clinical decisions.",
  },
  {
    icon: Globe,
    title: "Equity",
    description: "Purpose-built for low-resource healthcare systems where specialist access is limited.",
  },
];

const Solution = () => {
  return (
    <section id="solution" className="py-20 md:py-32 bg-navy">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/20 text-teal-light text-sm font-medium mb-4">
            Our Solution
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            RadiAID: AI for Every Clinic
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            A mobile AI diagnostic screening tool designed to classify bone tumors as benign vs. malignant, prioritize urgent referrals, and reduce missed diagnoses—anywhere in the world.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 h-full"
            >
              <div className="w-14 h-14 rounded-lg bg-teal/20 flex items-center justify-center mb-6">
                <pillar.icon className="w-7 h-7 text-teal-light" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="max-w-4xl mx-auto p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-teal-light" />
                What RadiAID Does
              </h3>
              <ul className="space-y-3 text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-light mt-2 flex-shrink-0" />
                  <span>Classifies bone tumors as benign vs. malignant</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-light mt-2 flex-shrink-0" />
                  <span>Prioritizes cases for urgent specialist referral</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-light mt-2 flex-shrink-0" />
                  <span>Reduces missed diagnoses in frontline care</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-teal-light" />
                How It Works
              </h3>
              <ul className="space-y-3 text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky mt-2 flex-shrink-0" />
                  <span>Upload digital radiographs directly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky mt-2 flex-shrink-0" />
                  <span>Photograph physical X-ray films with any smartphone</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky mt-2 flex-shrink-0" />
                  <span>AI-powered analysis in under one second</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
