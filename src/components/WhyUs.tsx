import { Award, GraduationCap, Lightbulb, Target, Users, Zap } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Fresh Perspective",
    description: "We approach healthcare challenges without legacy thinking, bringing innovative solutions unencumbered by 'how it's always been done.'",
  },
  {
    icon: GraduationCap,
    title: "World-Class Mentorship",
    description: "Guided by experts from Duke University Medical Center and Duke's Machine Learning department, ensuring clinical and technical rigor.",
  },
  {
    icon: Award,
    title: "Award-Winning Innovation",
    description: "Recognized by Lemelson-MIT, Samsung Solve for Tomorrow, and Duke Global Health Institute for our impactful approach.",
  },
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're not chasing profits—we're driven by a genuine mission to save children's lives through accessible healthcare technology.",
  },
  {
    icon: Zap,
    title: "Agile & Adaptive",
    description: "Small team, fast decisions. We iterate quickly based on real-world feedback from healthcare partners.",
  },
  {
    icon: Users,
    title: "User-Centered Design",
    description: "We've worked directly with clinicians in low-resource settings to build a tool that actually fits their workflow.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-muted text-teal text-sm font-medium mb-4">
            Why Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Young Team, Serious Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Yes, we're students. But we're students with world-class mentors, award-winning 
            technology, and an unwavering commitment to saving children's lives. Here's why 
            that matters.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-teal/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-teal-muted flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote/CTA */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <p className="text-xl text-foreground italic mb-4">
            "Great innovations often come from those who see the world differently."
          </p>
          <p className="text-muted-foreground">
            We bring fresh eyes to an old problem—and the determination to solve it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
