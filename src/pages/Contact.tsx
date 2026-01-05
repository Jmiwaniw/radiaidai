import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
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

          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-muted flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">radiaid.ai@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-muted flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Durham, NC</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-xl bg-muted border border-border">
                <h3 className="font-medium text-foreground mb-3">Looking to Partner?</h3>
                <p className="text-sm text-muted-foreground">
                  We're actively seeking partnerships with healthcare organizations, research institutions, 
                  and NGOs working in pediatric oncology and global health.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  name="organization"
                  placeholder="Organization (Optional)"
                  value={formData.organization}
                  onChange={handleChange}
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="resize-none"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  variant="teal"
                  className="w-full"
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
