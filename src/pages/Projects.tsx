import { ArrowLeft, Waves, MapPin, Calendar, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBotButton from "@/components/WhatsAppButton";
import xenOrionAsset from "@/assets/Xen_Orion_Plot_30__Road_2__DOHS_Chittagong.jpeg.asset.json";
import xenAndromedaAsset from "@/assets/Xen_Andromeda_Plot_29__Rd_2__DOHS_Chittagong.jpeg.asset.json";
import xenPegasusAsset from "@/assets/Xen_Pegasus_Plot_1__Road_1__DOHS_Chittagong.jpeg.asset.json";
import xenLakeviewTasmeeAsset from "@/assets/Xen_Lakeview_Tasmee.jpeg.asset.json";
import upcomingBananiAsset from "@/assets/Upcoming_Banani.jpeg.asset.json";
import upcomingJolshiriAsset from "@/assets/Upcoming_Jolshiri.jpeg.asset.json";
import project41Asset from "@/assets/Completed_DOHS_Chittagong.jpeg.asset.json";

const projects = [
  {
    id: 1,
    slug: "xen-lakeview-tasmee",
    name: "Xen Lakeview Tasmee",
    status: "On-going",
    location: "Plot 38, Rd: 504, Sec: 14, Jolshiri Abashon, Dhaka",
    badge: "Lakeview Project",
    description: "A premium residential development featuring dual-aspect design with open street frontage and uninterrupted lake views. Experience lakeside serenity with modern architectural excellence.",
    features: ["Lake View", "Dual Aspect Design", "Premium Finishes"],
    expectedCompletion: "2026",
    image: xenLakeviewTasmeeAsset.url,
  },
  {
    id: 11,
    slug: "project-41",
    name: "Project 41",
    status: "On-going",
    location: "Road 2, Plot 41, DOHS Chittagong",
    badge: null,
    description: "Details coming soon.",
    features: ["Quality Construction", "Modern Design"],
    expectedCompletion: "TBD",
    image: project41Asset.url,
  },
  {
    id: 2,
    slug: "uttara-heights",
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
    id: 8,
    slug: "upcoming-banani",
    name: "Title Coming Soon",
    status: "Up-coming",
    location: "Block B, Rd 18, Plot 21, Banani, Dhaka",
    badge: null,
    description: "An upcoming residential project in a prime Banani location, featuring modern architectural design.",
    features: ["Prime Location", "Modern Design"],
    expectedCompletion: "TBD",
    image: upcomingBananiAsset.url,
  },
  {
    id: 9,
    slug: "upcoming-jolshiri",
    name: "Title Coming Soon",
    status: "Up-coming",
    location: "Sec 8, Rd 403, Plot 07, Jolshiri, Dhaka",
    badge: null,
    description: "An upcoming residential project in a prime Jolshiri location, featuring modern architectural design.",
    features: ["Prime Location", "Modern Design"],
    expectedCompletion: "TBD",
    image: upcomingJolshiriAsset.url,
  },
  {
    id: 3,
    slug: "xen-orion",
    name: "Xen Orion",
    status: "Completed",
    location: "Plot#30, Road#2, DOHS Chittagong",
    badge: null,
    description: "A successfully completed residential project showcasing our commitment to quality construction and timely delivery.",
    features: ["Quality Construction", "Timely Delivery", "Premium Location"],
    expectedCompletion: "Completed",
    image: xenOrionAsset.url,
  },
  {
    id: 4,
    slug: "xen-andromeda",
    name: "Xen Andromeda",
    status: "Completed",
    location: "Plot#29, Rd#2, DOHS Chittagong",
    badge: null,
    description: "A successfully completed residential project showcasing our commitment to quality construction and timely delivery.",
    features: ["Quality Construction", "Timely Delivery", "Premium Location"],
    expectedCompletion: "Completed",
    image: xenAndromedaAsset.url,
  },
  {
    id: 5,
    slug: "xen-pegasus",
    name: "Xen Pegasus",
    status: "Completed",
    location: "Plot#1, Road#1, DOHS Chittagong",
    badge: null,
    description: "A successfully completed residential project showcasing our commitment to quality construction and timely delivery.",
    features: ["Quality Construction", "Timely Delivery", "Premium Location"],
    expectedCompletion: "Completed",
    image: xenPegasusAsset.url,
  },
  {
    id: 7,
    slug: "xen-nirvana",
    name: "Xen Nirvana",
    status: "Completed",
    location: "Plot#62, Road#2, DOHS Chittagong",
    badge: null,
    description: "A successfully completed residential project showcasing our commitment to quality construction and timely delivery.",
    features: ["Quality Construction", "Timely Delivery", "Premium Location"],
    expectedCompletion: "Completed",
    image: null,
  },
];

const Projects = () => {
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get("filter") || "all";
  
  const { isDark, toggleTheme } = useTheme();
  const [filter, setFilter] = useState<string>(initialFilter);
  const [lightbox, setLightbox] = useState<{ image: string; name: string } | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

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
      <Navigation isDark={isDark} onThemeToggle={toggleTheme} />
      
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
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="card-premium overflow-hidden group cursor-pointer h-full"
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

                      <span className="inline-flex items-center text-sm font-medium text-primary group/link">
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
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
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBotButton />
    </div>
  );
};

export default Projects;
