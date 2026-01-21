import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Download, Shield, Loader2 } from "lucide-react";


const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(
        "https://n8n.srv915514.hstgr.cloud/webhook/6688d2c9-ea4a-4870-a08b-cd71175643d7",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
            source: "contact-form",
          }),
        }
      );
      alert("Thank you! We will contact you within 24 hours.");
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="label-caps mb-4 block">Get In Touch</span>
            <h2 className="heading-section mb-6">Interested in This Project?</h2>
            <div className="accent-line mb-8" />
            <p className="body-large mb-8">
              Let us help you take the next step. Whether you're ready to
              schedule a visit or simply want more information, we're here to
              assist.
            </p>

            {/* Quick Actions */}
            <div className="space-y-4">
              <motion.a
                href="tel:+8801700000000"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Call Us Directly</p>
                  <p className="text-sm text-muted-foreground">
                    +880 1700 000 000
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Download Brochure</p>
                  <p className="text-sm text-muted-foreground">
                    Get complete project details
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="card-premium p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="input-premium"
                  placeholder="Enter your full name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="input-premium"
                  placeholder="+880 1XXX XXX XXX"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="input-premium resize-none"
                  placeholder="How can we help you?"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Request a Call Back"}
                {isSubmitting ? (
                  <Loader2 className="ml-2 w-4 h-4 animate-spin" />
                ) : (
                  <Send className="ml-2 w-4 h-4" />
                )}
              </motion.button>

              {/* Trust Note */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Shield className="w-4 h-4" />
                <span>We respond within 24 hours. No spam.</span>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
