import { TrendingUp, Clock, Heart, Users, DollarSign, Smartphone } from "lucide-react";

const impacts = [
  {
    icon: TrendingUp,
    title: "Higher Survival Rates",
    description: "Earlier detection leads to dramatically improved treatment outcomes and 5-year survival.",
  },
  {
    icon: Clock,
    title: "Months → Minutes",
    description: "Reduce diagnostic delays from months to immediate triage decisions.",
  },
  {
    icon: Heart,
    title: "Limb Preservation",
    description: "Early-stage detection enables limb-sparing surgery instead of amputation.",
  },
  {
    icon: Users,
    title: "Empowered Clinicians",
    description: "Give frontline healthcare workers the tools to make confident referral decisions.",
  },
];

const comparisons = [
  {
    category: "Cost per Scan",
    xray: "$10-50",
    advanced: "$200-2000+",
    benefit: "20-40× more affordable",
  },
  {
    category: "Equipment Availability",
    xray: "80%+ of clinics",
    advanced: "<10% of facilities",
    benefit: "8× more accessible",
  },
  {
    category: "Training Required",
    xray: "Basic X-ray tech",
    advanced: "Specialist radiologist",
    benefit: "Widely deployable",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="py-20 md:py-32 bg-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-80 h-80 rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 rounded-full bg-coral/10 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/20 text-teal-light text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Preserving Limbs, Lives & Futures
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Every child deserves access to early cancer detection—regardless of where they're born.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impacts.map((impact) => (
            <div
              key={impact.title}
              className="group p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:border-teal/50 transition-all duration-300 hover:bg-primary-foreground/10"
            >
              <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center mb-4 group-hover:bg-teal/30 transition-colors">
                <impact.icon className="w-6 h-6 text-teal-light" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                {impact.title}
              </h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {impact.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
          <h3 className="font-display text-xl font-semibold text-primary-foreground text-center mb-8 flex items-center justify-center gap-2">
            <DollarSign className="w-5 h-5 text-teal-light" />
            X-ray + RadiAID vs. Advanced Imaging
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary-foreground/10">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-primary-foreground/60">Category</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-teal-light">X-ray + RadiAID</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-primary-foreground/60">MRI/CT</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-primary-foreground/60">Benefit</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.category} className="border-b border-primary-foreground/5">
                    <td className="py-4 px-4 text-sm text-primary-foreground/80">{row.category}</td>
                    <td className="py-4 px-4 text-sm text-center font-medium text-teal-light">{row.xray}</td>
                    <td className="py-4 px-4 text-sm text-center text-primary-foreground/60">{row.advanced}</td>
                    <td className="py-4 px-4 text-sm text-right text-primary-foreground/80">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scalability Note */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <div className="inline-flex items-center gap-3 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
            <Smartphone className="w-6 h-6 text-teal-light" />
            <span className="text-primary-foreground/80">
              Runs on any smartphone—scales to millions of patients worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
