import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-muted text-teal text-sm font-medium mb-4">
              Contact
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Interested in partnering with us or learning more about RadiAID? We'd love to hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-teal-muted flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:radiaid.ai@gmail.com" 
                      className="text-teal hover:underline text-lg"
                    >
                      radiaid.ai@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-teal-muted flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground text-lg">Durham, NC</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-xl bg-muted border border-border">
                <h3 className="font-medium text-foreground mb-3">Looking to Partner?</h3>
                <p className="text-sm text-muted-foreground">
                  We're actively seeking partnerships with healthcare organizations, research institutions, 
                  and NGOs working in pediatric oncology and global health. Reach out to us via email!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
