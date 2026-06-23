import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TrustSection = () => {
  const trustPoints = [
    "Commitment to quality construction and premium materials",
    "Thoughtful design approach prioritizing light and space",
    "Track record of responsible, on-time development",
  ];

  const stats = [
    { value: "15+", label: "Years of Excellence" },
    { value: "20+", label: "Projects Delivered" },
    { value: "500+", label: "Happy Families" },
    { value: "100%", label: "On-time Delivery" },
  ];

  return (
    <section id="trust" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
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
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 body-regular"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              to="/about"
              className="btn-ghost text-primary p-0 group inline-flex items-center"
            >
              Learn More About Xen
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="card-premium p-8 text-center"
              >
                <span className="text-5xl font-serif font-semibold text-primary">
                  {stat.value}
                </span>
                <p className="mt-2 text-muted-foreground text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
