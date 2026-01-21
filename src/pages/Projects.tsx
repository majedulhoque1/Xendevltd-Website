import { ArrowLeft, Waves, MapPin, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import projectLakeside from "@/assets/project-lakeside.jpg";

const projects = [
  {
    id: 1,
    name: "Jolshiri Lakeview Residence",
    status: "On-going",
    location: "Jolshiri Abashon, Dhaka",
    badge: "Lakeview Project",
    description: "A premium residential development featuring dual-aspect design with open street frontage and uninterrupted lake views. Experience lakeside serenity with modern architectural excellence.",
    features: ["Lake View", "Dual Aspect Design", "Premium Finishes", "Modern Architecture"],
    expectedCompletion: "2026",
    image: projectLakeside,
  },
  {
    id: 2,
    name: "Uttara Heights",
    status: "Up-coming",
    location: "Uttara, Dhaka",
    badge: null,
    description: "An upcoming residential project in the heart of Uttara, designed to offer modern living spaces with excellent connectivity and urban amenities.",
    features: ["Prime Location", "Modern Design", "Urban Connectivity"],
    expectedCompletion: "2027",
    image: null,
  },
  {
    id: 3,
    name: "Bashundhara Residence",
    status: "Completed",
    location: "Bashundhara R/A, Dhaka",
    badge: null,
    description: "A successfully completed residential project showcasing our commitment to quality construction and timely delivery in one of Dhaka's most sought-after areas.",
    features: ["Quality Construction", "Timely Delivery", "Premium Location"],
    expectedCompletion: "Completed",
    image: null,
  },
];

const Projects = () => {
  const [isDark, setIsDark] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.status.toLowerCase().replace("-", "") === filter.toLowerCase().replace("-", ""));

  const statusFilters = [
    { label: "All Projects", value: "all" },
    { label: "On-going", value: "ongoing" },
    { label: "Up-coming", value: "upcoming" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navigation isDark={isDark} onThemeToggle={handleThemeToggle} />
      
      <main className="pt-20">
        {/* Compact Header with Filters */}
        <section className="py-6 bg-secondary/30">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
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
                <h1 className="text-2xl md:text-3xl font-serif font-medium">Our Projects</h1>
              </motion.div>

              {/* Filter Tabs */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-wrap gap-2"
              >
                {statusFilters.map((status) => (
                  <button
                    key={status.value}
                    onClick={() => setFilter(status.value)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      filter === status.value
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {status.label}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-8 md:py-12">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="card-premium overflow-hidden group"
                >
                  {/* Image */}
                  <div
                    className={`relative h-64 overflow-hidden ${
                      project.image ? "" : "bg-gradient-to-br from-secondary to-muted"
                    }`}
                  >
                    {project.image ? (
                      <motion.img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Image Coming Soon</span>
                      </div>
                    )}
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 text-xs uppercase tracking-wider rounded-full ${
                          project.status === "On-going"
                            ? "bg-primary text-primary-foreground"
                            : project.status === "Up-coming"
                            ? "bg-gold text-charcoal"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Special Badge */}
                    {project.badge && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-3 py-1 text-xs bg-background/90 backdrop-blur-sm rounded-full">
                          <Waves className="w-3 h-3 mr-1 text-primary" />
                          {project.badge}
                        </span>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-medium mb-2">
                      {project.name}
                    </h3>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-secondary rounded-full text-secondary-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Expected Completion */}
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.status === "Completed" ? "Completed" : `Expected: ${project.expectedCompletion}`}
                    </div>

                    <Link
                      to={project.id === 1 ? "/#featured" : "/#contact"}
                      className="inline-flex items-center text-sm font-medium text-primary group/link"
                    >
                      {project.status === "Up-coming"
                        ? "Register Interest"
                        : "View Details"}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-muted-foreground">No projects found in this category.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-section mb-4">Interested in Our Projects?</h2>
              <p className="body-large max-w-xl mx-auto mb-8">
                Schedule a site visit or get in touch with our team to learn more about our developments.
              </p>
              <Link to="/#contact" className="btn-primary">
                Schedule a Site Visit
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
