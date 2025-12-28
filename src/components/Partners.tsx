import { GraduationCap, Building, Award, BookOpen } from "lucide-react";
import dukeRadiologyLogo from "@/assets/duke-radiology-logo.jpg";
import dukeCancerLogo from "@/assets/duke-cancer-logo.png";
import dukeGlobalHealthLogo from "@/assets/duke-global-health-logo.jpg";
import lemelsonMitLogo from "@/assets/lemelson-mit-logo.png";
import samsungSolveLogo from "@/assets/samsung-solve-logo.png";

const partners = [
  { name: "Duke Radiology", logo: dukeRadiologyLogo },
  { name: "Duke Cancer Institute", logo: dukeCancerLogo },
  { name: "Duke Global Health Institute", logo: dukeGlobalHealthLogo },
  { name: "Lemelson-MIT", logo: lemelsonMitLogo },
  { name: "Samsung Solve for Tomorrow", logo: samsungSolveLogo },
];

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
              Mentorship and research support
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

        {/* Partner Logos */}
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-muted-foreground text-sm mb-8">
            Our Partners & Sponsors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group relative bg-card rounded-xl p-4 border border-border hover:border-teal/30 transition-all duration-300 hover:shadow-soft"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;