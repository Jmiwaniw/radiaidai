import { GraduationCap } from "lucide-react";

import hasiniPhoto from "@/assets/team/hasini.png";
import isaacPhoto from "@/assets/team/isaac.png";
import hilaPhoto from "@/assets/team/hila.png";
import sathvikPhoto from "@/assets/team/sathvik.png";
import jacobPhoto from "@/assets/team/jacob.png";

const teamMembers = [
  { name: "Hasini Kanthi", role: "CEO", photo: hasiniPhoto },
  { name: "Isaac Yuan", role: "CTO", photo: isaacPhoto },
  { name: "Hila Belinson", role: "CFO", photo: hilaPhoto },
  { name: "Sathvik Talluri", role: "COO", photo: sathvikPhoto },
  { name: "Jacob Iwaniw", role: "Chief Engineer", photo: jacobPhoto },
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
    <section id="team" className="py-20 md:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-muted text-teal text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Driven by Purpose
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A team of students united by a shared mission.
          </p>
        </div>

        {/* Team Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-display text-lg font-semibold text-foreground text-center mb-8">
            Core Team
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center w-32">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-teal/20">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
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
            Mentors
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {mentors.map((mentor) => (
              <div key={mentor.name} className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
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
