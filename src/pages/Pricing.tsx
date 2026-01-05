import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Building2, Hospital, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Basic Plan",
    price: "$800",
    period: "/year",
    description: "Perfect for small clinics getting started",
    icon: Building2,
    features: [
      "AI screening access",
      "Staff onboarding",
      "Workflow integration support",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Standard Plan",
    price: "$1,500",
    period: "/year",
    description: "For growing clinics with higher volume",
    icon: Hospital,
    features: [
      "Everything in Basic",
      "Priority support",
      "Advanced analytics",
      "Multi-user access",
    ],
    highlight: true,
  },
  {
    name: "Enterprise Plan",
    price: "$3,000",
    period: "/year",
    description: "For hospitals and large healthcare networks",
    icon: Globe,
    features: [
      "Everything in Standard",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-muted text-teal text-sm font-medium mb-4">
              Pricing
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Affordable for Every Clinic
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A hybrid model that supports both small clinics and large hospitals. 
              Choose the plan that fits your needs.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-8 rounded-2xl border ${
                  tier.highlight
                    ? "border-teal bg-card shadow-lg"
                    : "border-border bg-card"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-teal-muted flex items-center justify-center mb-4">
                  <tier.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {tier.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-teal flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.highlight ? "teal" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Pay-Per-Scan */}
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl bg-muted border border-border">
              <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-6">
                Pay-Per-Scan Model
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-card border border-border text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">$6</div>
                  <div className="text-muted-foreground">per scan (no subscription)</div>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border text-center">
                  <div className="text-3xl font-bold text-teal mb-2">$3</div>
                  <div className="text-muted-foreground">per extra scan (for subscribers)</div>
                </div>
              </div>
              <p className="text-center text-muted-foreground text-sm">
                Perfect for clinics with variable screening volumes or those wanting to try before subscribing.
              </p>
            </div>
          </div>

          {/* Who This Is For */}
          <div className="max-w-4xl mx-auto mt-20">
            <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
              Who This Is For
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-2">Small Clinics</h4>
                <p className="text-sm text-muted-foreground">
                  Community health centers in underserved areas with limited diagnostic resources.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-2">Hospitals</h4>
                <p className="text-sm text-muted-foreground">
                  Regional hospitals looking to improve early detection rates and reduce referral delays.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-2">NGOs & Ministries</h4>
                <p className="text-sm text-muted-foreground">
                  Health organizations deploying screening programs in low-resource settings.
                </p>
              </div>
            </div>
          </div>

          {/* Why This Pricing Works */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Why This Pricing Works
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="p-4 rounded-lg bg-muted">
                Keeps cost per screening extremely low
              </div>
              <div className="p-4 rounded-lg bg-muted">
                Competitive with traditional imaging ($500–$3,000/MRI)
              </div>
              <div className="p-4 rounded-lg bg-muted">
                Affordable for Ministries and NGOs
              </div>
              <div className="p-4 rounded-lg bg-muted">
                Enables sustainable long-term revenue growth
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
