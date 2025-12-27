import { GraduationCap, Building, Award, BookOpen } from "lucide-react";

const Partners = () => {
  return (
    <section id="partners" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-muted text-teal text-sm font-medium mb-4">
            Partners & Credibility
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Backed by Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            RadiAID is developed with support from world-class academic institutions and clinical experts.
          </p>
        </div>

        {/* Credibility Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          <div className="p-6 rounded-2xl bg-card border border-border hover:border-teal/30 transition-all duration-300 hover:shadow-soft text-center">
            <div className="w-12 h-12 rounded-xl bg-navy mx-auto flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Duke University
            </h3>
            <p className="text-sm text-muted-foreground">
              Faculty mentorship and research support
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border hover:border-teal/30 transition-all duration-300 hover:shadow-soft text-center">
            <div className="w-12 h-12 rounded-xl bg-teal/10 mx-auto flex items-center justify-center mb-4">
              <Building className="w-6 h-6 text-teal" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Clinical Partners
            </h3>
            <p className="text-sm text-muted-foreground">
              Validation sites in East Africa
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border hover:border-teal/30 transition-all duration-300 hover:shadow-soft text-center">
            <div className="w-12 h-12 rounded-xl bg-coral/10 mx-auto flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-coral" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Research-Backed
            </h3>
            <p className="text-sm text-muted-foreground">
              Peer-reviewed methodology foundations
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border hover:border-teal/30 transition-all duration-300 hover:shadow-soft text-center">
            <div className="w-12 h-12 rounded-xl bg-sky/10 mx-auto flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-sky" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Open Science
            </h3>
            <p className="text-sm text-muted-foreground">
              Committed to transparency and reproducibility
            </p>
          </div>
        </div>

        {/* Logo Placeholder Area */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-muted/30 border border-dashed border-border">
          <p className="text-center text-muted-foreground text-sm mb-6">
            Partner & Sponsor Logos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-24 h-12 rounded-lg bg-muted flex items-center justify-center"
              >
                <span className="text-xs text-muted-foreground">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
