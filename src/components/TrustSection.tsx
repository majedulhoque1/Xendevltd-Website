import { CheckCircle, ArrowRight } from "lucide-react";

const TrustSection = () => {
  const trustPoints = [
    "Commitment to quality construction and premium materials",
    "Thoughtful design approach prioritizing light and space",
    "Track record of responsible, on-time development",
  ];

  return (
    <section id="trust" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <span className="label-caps mb-4 block">Our Promise</span>
            <h2 className="heading-section mb-6">
              Why Buyers Trust Xen Developments
            </h2>
            <div className="accent-line mb-8" />
            <p className="body-large mb-8">
              We focus on rare locations, open layouts, and thoughtful planning
              — selecting sites that offer light, airflow, and long-term
              livability, not just density.
            </p>

            <ul className="space-y-4 mb-10">
              {trustPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 body-regular"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="btn-ghost text-primary p-0 group"
            >
              Learn More About Xen
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card-premium p-8 text-center">
              <span className="text-5xl font-serif font-semibold text-primary">
                15+
              </span>
              <p className="mt-2 text-muted-foreground text-sm">
                Years of Excellence
              </p>
            </div>
            <div className="card-premium p-8 text-center">
              <span className="text-5xl font-serif font-semibold text-primary">
                20+
              </span>
              <p className="mt-2 text-muted-foreground text-sm">
                Projects Delivered
              </p>
            </div>
            <div className="card-premium p-8 text-center">
              <span className="text-5xl font-serif font-semibold text-primary">
                500+
              </span>
              <p className="mt-2 text-muted-foreground text-sm">Happy Families</p>
            </div>
            <div className="card-premium p-8 text-center">
              <span className="text-5xl font-serif font-semibold text-primary">
                100%
              </span>
              <p className="mt-2 text-muted-foreground text-sm">
                On-time Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
