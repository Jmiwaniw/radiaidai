import { GraduationCap } from "lucide-react";

const teamMembers = [
  { name: "Hasini Kanthi", role: "Team Lead" },
  { name: "Isaac Yuan", role: "ML Engineer" },
  { name: "Hila Belinson", role: "Product Lead" },
  { name: "Jacob Iwaniw", role: "Software Engineer" },
  { name: "Sathvik Talluri", role: "Data Scientist" },
  { name: "Viraaj Minhas", role: "Hardware Lead" },
  { name: "Protima Mukherjee", role: "Clinical Advisor" },
];

const mentors = [
  {
    name: "Dr. William Eward",
    title: "Orthopedic Oncology",
    affiliation: "Duke University Medical Center",
  },
  {
    name: "Dr. Stephanie Blocker",
    title: "Machine Learning",
    affiliation: "Duke University",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-gradient-section relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-muted text-teal text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Driven by Purpose
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A multidisciplinary team of engineers, scientists, and clinicians united by a shared mission.
          </p>
        </div>

        {/* Team Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-display text-lg font-semibold text-foreground text-center mb-8">
            Core Team
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center mb-3 shadow-soft group-hover:shadow-glow transition-shadow">
                  <span className="text-xl md:text-2xl font-display font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-foreground leading-tight">
                  {member.name}
                </h4>
                <span className="text-xs text-muted-foreground">{member.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mentors */}
        <div className="max-w-2xl mx-auto">
          <h3 className="font-display text-lg font-semibold text-foreground text-center mb-8 flex items-center justify-center gap-2">
            <GraduationCap className="w-5 h-5 text-teal" />
            Faculty Mentors
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {mentors.map((mentor) => (
              <div
                key={mentor.name}
                className="p-6 rounded-2xl bg-card border border-border hover:border-teal/30 transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-display font-bold text-primary-foreground">
                      {mentor.name.split(' ').slice(1).map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{mentor.name}</h4>
                    <p className="text-sm text-teal">{mentor.title}</p>
                    <p className="text-xs text-muted-foreground">{mentor.affiliation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
