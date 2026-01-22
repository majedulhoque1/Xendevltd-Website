import { ArrowLeft, Waves, MapPin, Calendar, Home, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBotButton from "@/components/WhatsAppButton";
import projectLakeside from "@/assets/project-lakeside.jpg";

const projects = [
  {
    id: 1,
    slug: "jolshiri-lakeview-residence",
    name: "Jolshiri Lakeview Residence",
    status: "On-going",
    location: "Jolshiri Abashon, Dhaka",
    badge: "Lakeview Project",
    description: "A premium residential development featuring dual-aspect design with open street frontage and uninterrupted lake views. Experience lakeside serenity with modern architectural excellence.",
    fullDescription: "Jolshiri Lakeview Residence represents the pinnacle of modern living in Dhaka. This exclusive development combines the tranquility of lakeside living with contemporary architectural design. Each residence is thoughtfully crafted to maximize natural light and ventilation while offering stunning views of the surrounding landscape.",
    features: ["Lake View", "Dual Aspect Design", "Premium Finishes", "Modern Architecture", "24/7 Security", "Covered Parking"],
    amenities: ["Swimming Pool", "Fitness Center", "Children's Play Area", "Community Hall", "Landscaped Gardens"],
    expectedCompletion: "2026",
    image: projectLakeside,
    gallery: [projectLakeside],
  },
  {
    id: 2,
    slug: "uttara-heights",
    name: "Uttara Heights",
    status: "Up-coming",
    location: "Uttara, Dhaka",
    badge: null,
    description: "An upcoming residential project in the heart of Uttara, designed to offer modern living spaces with excellent connectivity and urban amenities.",
    fullDescription: "Uttara Heights is set to redefine urban living in one of Dhaka's most sought-after neighborhoods. With excellent connectivity to major business districts and educational institutions, this development will offer the perfect blend of convenience and comfort.",
    features: ["Prime Location", "Modern Design", "Urban Connectivity", "Smart Home Ready"],
    amenities: ["Rooftop Garden", "Multi-purpose Hall", "Gym Facility", "Children's Corner"],
    expectedCompletion: "2027",
    image: null,
    gallery: [],
  },
  {
    id: 3,
    slug: "bashundhara-residence",
    name: "Bashundhara Residence",
    status: "Completed",
    location: "Bashundhara R/A, Dhaka",
    badge: null,
    description: "A successfully completed residential project showcasing our commitment to quality construction and timely delivery in one of Dhaka's most sought-after areas.",
    fullDescription: "Bashundhara Residence stands as a testament to our commitment to excellence. This completed project has set new standards in residential construction, with all units delivered on time and to the highest specifications. Residents now enjoy a premium lifestyle in one of Dhaka's most prestigious addresses.",
    features: ["Quality Construction", "Timely Delivery", "Premium Location", "Elegant Design"],
    amenities: ["Community Space", "Parking Facility", "Security System", "Power Backup"],
    expectedCompletion: "Completed",
    image: null,
    gallery: [],
  },
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isDark, toggleTheme } = useTheme();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navigation isDark={isDark} onThemeToggle={toggleTheme} />

      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-4 bg-secondary/30">
          <div className="container-wide">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                <Home className="w-4 h-4" />
              </Link>
              <span>/</span>
              <Link to="/projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <span>/</span>
              <span className="text-foreground">{project.name}</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative">
          <div
            className={`h-[40vh] md:h-[50vh] overflow-hidden ${
              project.image ? "" : "bg-gradient-to-br from-secondary to-muted"
            }`}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-muted-foreground">Image Coming Soon</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          {/* Project Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container-wide pb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
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
                  {project.badge && (
                    <span className="inline-flex items-center px-3 py-1 text-xs bg-background/90 backdrop-blur-sm rounded-full">
                      <Waves className="w-3 h-3 mr-1 text-primary" />
                      {project.badge}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground">
                  {project.name}
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="text-2xl font-serif font-medium mb-4">About This Project</h2>
                  <p className="body-large text-muted-foreground mb-6">
                    {project.fullDescription}
                  </p>

                  {/* Features */}
                  <h3 className="text-xl font-serif font-medium mb-4 mt-8">Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Amenities */}
                  <h3 className="text-xl font-serif font-medium mb-4 mt-8">Amenities</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.amenities.map((amenity, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="card-premium p-6 sticky top-24"
                >
                  <h3 className="text-lg font-serif font-medium mb-4">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Location</span>
                        <p className="text-sm font-medium">{project.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {project.status === "Completed" ? "Status" : "Expected Completion"}
                        </span>
                        <p className="text-sm font-medium">{project.expectedCompletion}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border mt-6 pt-6">
                    <Link to="/#contact" className="btn-primary w-full text-center block">
                      {project.status === "Up-coming" ? "Register Interest" : "Schedule a Visit"}
                    </Link>
                    <Link
                      to="/projects"
                      className="btn-secondary w-full text-center block mt-3"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2 inline" />
                      Back to Projects
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBotButton />
    </div>
  );
};

export default ProjectDetail;
