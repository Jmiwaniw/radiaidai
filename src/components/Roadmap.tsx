import { CheckCircle, Circle, ArrowRight } from "lucide-react";

const phases = [
  {
    phase: "Phase I",
    status: "current",
    title: "Foundation",
    description: "Proof of concept and MVP development",
    items: [
      { label: "Proof-of-concept deep learning model", complete: true },
      { label: "MVP mobile application", complete: true },
      { label: "Quality-box prototype for consistent imaging", complete: true },
      { label: "Initial dataset curation and annotation", complete: true },
    ],
  },
  {
    phase: "Phase II",
    status: "future",
    title: "Validation",
    description: "Clinical testing and regulatory pathways",
    items: [
      { label: "Clinical validation in Uganda & Tanzania", complete: false },
      { label: "FDA 510(k) submission pathway", complete: false },
      { label: "CE Mark certification process", complete: false },
      { label: "Partnership expansion with regional hospitals", complete: false },
    ],
  },
  {
    phase: "Phase III",
    status: "future",
    title: "Scale",
    description: "Global deployment and feature expansion",
    items: [
      { label: "Offline, fully on-device AI inference", complete: false },
      { label: "Expanded tumor classification capabilities", complete: false },
      { label: "Multi-language support for global reach", complete: false },
      { label: "Integration with hospital information systems", complete: false },
    ],
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-muted text-teal text-sm font-medium mb-4">
            Development Roadmap
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From Prototype to Global Impact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our phased approach ensures rigorous validation while moving toward worldwide deployment.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                  phase.status === "current"
                    ? "bg-teal/5 border-teal/30 shadow-glow"
                    : "bg-card border-border hover:border-border/80"
                }`}
              >
                {/* Phase Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  phase.status === "current"
                    ? "bg-teal text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {phase.phase}
                  {phase.status === "current" && (
                    <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
                  )}
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {phase.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {phase.description}
                </p>

                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      {item.complete ? (
                        <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${
                        item.complete ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Connector Arrow (desktop) */}
                {index < phases.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
