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
    <section id="partners" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
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
          {[
            { icon: GraduationCap, title: "Duke University", desc: "Mentorship and research support", iconColor: "text-primary-foreground", bg: "bg-navy" },
            { icon: Building, title: "Clinical Partners", desc: "Validation sites in East Africa", iconColor: "text-teal", bg: "bg-teal-muted" },
            { icon: Award, title: "Research-Backed", desc: "Peer-reviewed methodology foundations", iconColor: "text-coral", bg: "bg-coral/10" },
            { icon: BookOpen, title: "Open Science", desc: "Committed to transparency and reproducibility", iconColor: "text-sky", bg: "bg-sky/10" },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl bg-card border border-border text-center h-full">
              <div className={`w-12 h-12 rounded-lg ${item.bg} mx-auto flex items-center justify-center mb-4`}>
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
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
                className="bg-card rounded-lg p-4 border border-border"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 md:h-16 w-auto object-contain"
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
