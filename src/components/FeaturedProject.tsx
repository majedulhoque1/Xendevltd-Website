import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Info,
  CheckSquare,
  Layout,
  ArrowRight,
  Download,
  Building2,
  Wind,
  Shield,
  Waves,
} from "lucide-react";

// Import project images
import projectLakeside from "@/assets/project-lakeside.jpg";
import projectRoadsideFront from "@/assets/project-roadside-front.jpg";
import projectRoadsidePerspective from "@/assets/project-roadside-perspective.png";

const tabs = [
  { id: "location", label: "Location", icon: MapPin },
  { id: "about", label: "About", icon: Info },
  { id: "features", label: "Key Features", icon: CheckSquare },
  { id: "floorplans", label: "Floor Plans", icon: Layout },
];

const features = [
  {
    icon: Waves,
    title: "Dual-Aspect Design",
    description: "Street-facing front & lake-facing rear",
  },
  {
    icon: Wind,
    title: "Natural Ventilation",
    description: "Enhanced cross-ventilation throughout",
  },
  {
    icon: Building2,
    title: "Premium Construction",
    description: "High-quality materials and finishes",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Advanced security systems and personnel",
  },
];

const floorPlans = [
  { type: "Type A", size: "1,450 sq ft", bedrooms: "3 Bed" },
  { type: "Type B", size: "1,680 sq ft", bedrooms: "3 Bed" },
  { type: "Type C", size: "2,100 sq ft", bedrooms: "4 Bed" },
];

const FeaturedProject = () => {
  const [activeTab, setActiveTab] = useState("location");
  const [selectedImage, setSelectedImage] = useState(0);

  const projectImages = [
    { src: projectLakeside, label: "Lakeside View" },
    { src: projectRoadsideFront, label: "Street Front" },
    { src: projectRoadsidePerspective, label: "Perspective View" },
  ];

  const tabContentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "location":
        return (
          <motion.div
            key="location"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <motion.div
                  className="relative aspect-[4/5] overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedImage}
                      src={projectImages[selectedImage].src}
                      alt={projectImages[selectedImage].label}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {projectImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-1 h-1 rounded-full transition-all ${
                          selectedImage === index
                            ? "bg-primary"
                            : "bg-background/50 hover:bg-background/70"
                        }`}
                        aria-label={`View ${img.label}`}
                      />
                    ))}
                  </div>
                </motion.div>
                <div className="grid grid-cols-3 gap-2">
                  {projectImages.map((img, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`aspect-square overflow-hidden rounded-md border-2 transition-all ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.label}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="heading-subsection mb-4">
                  Prime Location in Jolshiri Abashon
                </h3>
                <p className="body-large mb-6">
                  Located within Jolshiri Abashon, this project enjoys a rare dual
                  advantage — open street access at the front and uninterrupted lake
                  views at the back.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Open frontage ensures light, visibility, and easy access",
                    "Lake-facing rear creates privacy, calm, and long-term value",
                    "Positioned within a carefully planned residential zone",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-3 body-regular"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="btn-primary">
                    Schedule a Site Visit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <a href="#contact" className="btn-secondary">
                    Get Location Details
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case "about":
        return (
          <motion.div
            key="about"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Image */}
              <motion.div
                className="aspect-[4/5] overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={projectRoadsidePerspective}
                  alt="Jolshiri Residence - Perspective View"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Content */}
              <div>
                <h3 className="heading-subsection mb-4">
                  Designed for Modern Living
                </h3>
                <p className="body-large mb-6">
                  This project reflects Xen's commitment to livable layouts, natural
                  ventilation, and practical elegance. Designed around openness and
                  balance, the project takes full advantage of its street-facing
                  front and lake-facing rear.
                </p>
                <p className="body-regular text-muted-foreground mb-8">
                  Natural light, ventilation, and views shape everyday living —
                  creating homes that feel spacious, calm, and connected to their
                  surroundings.
                </p>
                <a href="#contact" className="btn-primary">
                  <Download className="mr-2 w-4 h-4" />
                  Download Project Brochure
                </a>
              </div>
            </div>
          </motion.div>
        );
      case "features":
        return (
          <motion.div
            key="features"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Image */}
              <motion.div
                className="aspect-[4/5] overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={projectLakeside}
                  alt="Jolshiri Residence - Lakeside View"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Content */}
              <div>
                <h3 className="heading-subsection mb-6">Key Characteristics</h3>
                <div className="grid gap-4 mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg"
                    >
                      <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <ul className="space-y-2 mb-8 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Long-term value driven by permanent lake view
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Reduced rear congestion due to open water body
                  </li>
                </ul>
                <a href="#contact" className="btn-primary">
                  Request Full Specifications
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        );
      case "floorplans":
        return (
          <motion.div
            key="floorplans"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h3 className="heading-subsection mb-4">Floor Plans</h3>
            <p className="text-muted-foreground mb-6">
              Select layouts designed to maximize lake-facing views and natural
              airflow.
            </p>
            <div className="space-y-4 mb-8">
              {floorPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center justify-between p-6 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-secondary rounded flex items-center justify-center">
                      <Layout className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{plan.type}</h4>
                      <p className="text-sm text-muted-foreground">
                        {plan.bedrooms} • {plan.size}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                <Download className="mr-2 w-4 h-4" />
                Download Floor Plans
              </a>
              <a href="#contact" className="btn-secondary">
                Book a Private Visit
              </a>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="featured" className="section-padding">
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
            Featured Project
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px", amount: 0.15 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            className="heading-section mb-4"
          >
            Jolshiri Lakeview Residence
          </motion.h2>
          <div className="accent-line mx-auto mb-6" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="badge-lakeview"
          >
            <Waves className="w-3 h-3 mr-2" />
            Lakeview Project • On-going
          </motion.div>
        </div>

        {/* Tab Layout */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          {/* Vertical Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0"
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px", amount: 0.15 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`tab-vertical flex items-center gap-3 whitespace-nowrap ${
                  activeTab === tab.id ? "active" : ""
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {renderTabContent()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
