import { Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-teal/5 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Mission Statement */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center shadow-glow">
                <span className="text-xl font-display font-bold text-primary-foreground">R</span>
              </div>
              <span className="font-display text-2xl font-bold text-primary-foreground">
                RadiAID
              </span>
            </div>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              AI-powered early detection of osteosarcoma—anywhere. We believe every child deserves access to 
              timely cancer diagnosis, regardless of geography or resources.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
              <Mail className="w-5 h-5 text-teal-light" />
              <span className="text-primary-foreground/80">contact@radiaid.org</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-primary-foreground/50 text-center md:text-left">
                © {new Date().getFullYear()} RadiAID. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/50">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-coral" />
                <span>for global health equity</span>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <p className="text-xs text-primary-foreground/50 text-center">
                <strong className="text-primary-foreground/70">Disclaimer:</strong> RadiAID is a research-stage 
                medical screening tool and is not yet FDA-approved. It is intended to support—not replace—clinical 
                judgment by qualified healthcare professionals. Not for diagnostic use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
