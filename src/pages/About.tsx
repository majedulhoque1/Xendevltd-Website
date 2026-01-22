import { ArrowLeft, Building2, Users, Award, Target, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBotButton from "@/components/WhatsAppButton";

const About = () => {
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in honest communication and transparent dealings with all our stakeholders.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Every project reflects our commitment to superior craftsmanship and attention to detail.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your dream home is our priority. We listen, understand, and deliver beyond expectations.",
    },
    {
      icon: Target,
      title: "Timely Delivery",
      description: "We respect your time and investment, ensuring projects are completed on schedule.",
    },
  ];

  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "25+", label: "Projects Delivered" },
    { value: "500+", label: "Happy Families" },
    { value: "100%", label: "Customer Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navigation isDark={isDark} onThemeToggle={toggleTheme} />

      <main className="pt-20">
        {/* Header */}
        <section className="py-6 bg-secondary/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4"
            >
              <Link
                to="/"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Home
              </Link>
              <div className="h-4 w-px bg-border" />
              <h1 className="text-2xl md:text-3xl font-serif font-medium">About Xen</h1>
            </motion.div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-sm uppercase tracking-widest text-primary font-medium">
                  Our Story
                </span>
                <h2 className="heading-section mt-4 mb-6">
                  Building Dreams,<br />Creating Legacies
                </h2>
                <p className="body-large text-muted-foreground mb-6">
                  Xen Developments was founded with a vision to transform the real estate landscape 
                  in Bangladesh. We believe that a home is more than just four walls—it's where 
                  memories are made, families grow, and dreams take shape.
                </p>
                <p className="text-muted-foreground mb-6">
                  With over a decade of experience in premium residential development, we have 
                  established ourselves as a trusted name in the industry. Our commitment to 
                  quality, transparency, and customer satisfaction sets us apart in every project 
                  we undertake.
                </p>
                <p className="text-muted-foreground">
                  From carefully selecting prime locations to incorporating modern architectural 
                  designs, every aspect of our projects reflects our dedication to excellence. 
                  We don't just build homes; we create communities where families thrive.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary rounded-2xl flex items-center justify-center">
                  <Building2 className="w-32 h-32 text-primary/30" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                  <p className="text-3xl font-serif font-bold">10+</p>
                  <p className="text-sm opacity-90">Years of Excellence</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-secondary/30">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card-premium p-8"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver exceptional residential developments that combine modern design, 
                  quality construction, and thoughtful amenities—creating spaces where families 
                  can build their futures with confidence and pride.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card-premium p-8"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted name in residential development in Bangladesh, known 
                  for creating sustainable communities that enhance the quality of life for 
                  generations to come.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-sm uppercase tracking-widest text-primary font-medium">
                What We Stand For
              </span>
              <h2 className="heading-section mt-4">Our Core Values</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-medium mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-section mb-4">Ready to Find Your Dream Home?</h2>
              <p className="body-large max-w-xl mx-auto mb-8">
                Explore our projects or get in touch with our team to start your journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/projects" className="btn-primary">
                  View Our Projects
                </Link>
                <Link to="/#contact" className="btn-ghost border border-border">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBotButton />
    </div>
  );
};

export default About;
