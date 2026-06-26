import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import xenOrionAsset from "@/assets/Xen_Orion_Plot_30__Road_2__DOHS_Chittagong.jpeg.asset.json";
import xenAndromedaAsset from "@/assets/Xen_Andromeda_Plot_29__Rd_2__DOHS_Chittagong.jpeg.asset.json";
import xenPegasusAsset from "@/assets/Xen_Pegasus_Plot_1__Road_1__DOHS_Chittagong.jpeg.asset.json";

const projects = [
  {
    id: 1,
    name: "Xen Orion",
    location: "Plot 30, Road 2, DOHS Chittagong",
    image: xenOrionAsset.url,
  },
  {
    id: 2,
    name: "Xen Andromeda",
    location: "Plot 29, Road 2, DOHS Chittagong",
    image: xenAndromedaAsset.url,
  },
  {
    id: 3,
    name: "Xen Pegasus",
    location: "Plot 1, Road 1, DOHS Chittagong",
    image: xenPegasusAsset.url,
  },
];

const ProjectsOverview = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px", amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="label-caps mb-4 block"
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px", amount: 0.15 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            className="heading-section mb-4"
          >
            Our Developments
          </motion.h2>
          <div className="accent-line mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px", amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="body-large max-w-2xl mx-auto"
          >
            Homes built with care, clarity, and long-term vision.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px", amount: 0.15 }}
              transition={{ duration: 1.0, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
              className="relative overflow-hidden rounded-lg group aspect-[4/5] shadow-lg"
            >
              <motion.img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-serif font-medium mb-1">
                  {project.name}
                </h3>
                <p className="text-sm opacity-90">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px", amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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
