import { useState } from "react";
import { Send, Phone, Download, Shield } from "lucide-react";

const interestOptions = [
  { value: "site-visit", label: "Schedule a Site Visit" },
  { value: "brochure", label: "Download Brochure" },
  { value: "callback", label: "Request a Call Back" },
  { value: "floor-plans", label: "Get Floor Plans" },
];

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you within 24 hours.");
    setFormData({ name: "", phone: "", interest: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
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
              <a
                href="tel:+8801700000000"
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
              </a>

              <a
                href="#"
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
              </a>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="card-premium p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
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
              </div>

              <div>
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
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium mb-2"
                >
                  I'm Interested In
                </label>
                <select
                  id="interest"
                  value={formData.interest}
                  onChange={(e) =>
                    setFormData({ ...formData, interest: e.target.value })
                  }
                  required
                  className="input-premium appearance-none cursor-pointer"
                >
                  <option value="">Select an option</option>
                  {interestOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn-primary w-full">
                Request a Call Back
                <Send className="ml-2 w-4 h-4" />
              </button>

              {/* Trust Note */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>We respond within 24 hours. No spam.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
