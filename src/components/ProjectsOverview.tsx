import { ArrowRight, Waves } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectLakeside from "@/assets/project-lakeside.jpg";

const projects = [
  {
    id: 1,
    name: "Jolshiri Lakeview Residence",
    status: "On-going",
    location: "Jolshiri Abashon, Dhaka",
    badge: "Lakeview Project",
    featured: true,
    image: projectLakeside,
  },
  {
    id: 2,
    name: "Uttara Heights",
    status: "Up-coming",
    location: "Uttara, Dhaka",
    badge: null,
    featured: false,
    image: null,
  },
  {
    id: 3,
    name: "Bashundhara Residence",
    status: "Completed",
    location: "Bashundhara R/A, Dhaka",
    badge: null,
    featured: false,
    image: null,
  },
];

const ProjectsOverview = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-caps mb-4 block">Our Portfolio</span>
          <h2 className="heading-section mb-4">Our Developments</h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="body-large max-w-2xl mx-auto">
            Homes built with care, clarity, and long-term vision.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`card-premium overflow-hidden group ${
                project.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-56 overflow-hidden ${
                  project.image ? "" : "bg-gradient-to-br from-secondary to-muted"
                } ${project.featured ? "" : "opacity-80"}`}
              >
                {project.image && (
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
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

                {/* Lakeview Badge */}
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
                <p className="text-sm text-muted-foreground mb-4">
                  {project.location}
                </p>

                <Link
                  to={`/projects?filter=${project.status.toLowerCase().replace("-", "")}`}
                  className="inline-flex items-center text-sm font-medium text-primary group/link"
                >
                  {project.status === "Up-coming"
                    ? "Register Interest"
                    : "View Project"}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/projects" className="btn-secondary">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsOverview;
