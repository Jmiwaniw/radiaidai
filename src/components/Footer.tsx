import { Mail, Heart, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import radiaidLogo from "@/assets/radiaid-logo.png";

const Footer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", organization: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <footer id="contact" className="bg-navy py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-teal/5 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
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
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 inline-flex">
                <Mail className="w-5 h-5 text-teal-light" />
                <span className="text-primary-foreground/80">radiaid.ai@gmail.com</span>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-4">
                Get in Touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                </div>
                <Input
                  name="organization"
                  placeholder="Organization (Optional)"
                  value={formData.organization}
                  onChange={handleChange}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-teal hover:bg-teal-light text-primary-foreground"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
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
