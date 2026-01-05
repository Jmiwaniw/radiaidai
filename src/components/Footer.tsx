import { Mail, Heart, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import radiaidLogo from "@/assets/radiaid-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy py-16">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Info */}
            <div>
              {/* Logo and Mission */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-6">
                  <img 
                    src={radiaidLogo} 
                    alt="RadiAID Logo" 
                    className="h-12 w-auto"
                  />
                  <span className="font-display text-2xl font-bold text-primary-foreground">
                    RadiAID
                  </span>
                </div>
                <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
                  AI-powered early detection of osteosarcoma—anywhere. We believe every child deserves access to 
                  timely cancer diagnosis, regardless of geography or resources.
                </p>
                
                {/* Patent Pending Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal/20 border border-teal/30 mb-6">
                  <ShieldCheck className="w-4 h-4 text-teal-light" />
                  <span className="text-sm font-medium text-teal-light">Patent Pending</span>
                </div>
              </div>

              {/* Contact Email */}
              <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 inline-flex">
                <Mail className="w-5 h-5 text-teal-light" />
                <span className="text-primary-foreground/80">radiaid.ai@gmail.com</span>
              </div>
            </div>

            {/* Right Column - Links */}
            <div className="lg:text-right">
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-6">
                Quick Links
              </h3>
              <nav className="flex flex-col gap-3">
                <Link to="/" className="text-primary-foreground/70 hover:text-teal-light transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-primary-foreground/70 hover:text-teal-light transition-colors">
                  About Us
                </Link>
                <Link to="/pricing" className="text-primary-foreground/70 hover:text-teal-light transition-colors">
                  Pricing
                </Link>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-teal-light transition-colors">
                  Contact
                </Link>
              </nav>
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
            <div className="mt-8 p-4 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
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
