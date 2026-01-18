import { useState } from "react";
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

  const renderTabContent = () => {
    switch (activeTab) {
      case "location":
        return (
          <div className="animate-fade-in">
            <h3 className="heading-subsection mb-4">
              Prime Location in Jolshiri Abashon
            </h3>
            <p className="body-large mb-6">
              Located within Jolshiri Abashon, this project enjoys a rare dual
              advantage — open street access at the front and uninterrupted lake
              views at the back.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 body-regular">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Open frontage ensures light, visibility, and easy access
              </li>
              <li className="flex items-center gap-3 body-regular">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Lake-facing rear creates privacy, calm, and long-term value
              </li>
              <li className="flex items-center gap-3 body-regular">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Positioned within a carefully planned residential zone
              </li>
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
        );
      case "about":
        return (
          <div className="animate-fade-in">
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
        );
      case "features":
        return (
          <div className="animate-fade-in">
            <h3 className="heading-subsection mb-6">Key Characteristics</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg"
                >
                  <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
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
        );
      case "floorplans":
        return (
          <div className="animate-fade-in">
            <h3 className="heading-subsection mb-4">Floor Plans</h3>
            <p className="text-muted-foreground mb-6">
              Select layouts designed to maximize lake-facing views and natural
              airflow.
            </p>
            <div className="space-y-4 mb-8">
              {floorPlans.map((plan, index) => (
                <div
                  key={index}
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
                </div>
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
          </div>
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
          <span className="label-caps mb-4 block">Featured Project</span>
          <h2 className="heading-section mb-4">Jolshiri Lakeview Residence</h2>
          <div className="accent-line mx-auto mb-6" />
          <div className="badge-lakeview">
            <Waves className="w-3 h-3 mr-2" />
            Lakeview Project • On-going
          </div>
        </div>

        {/* Tab Layout */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          {/* Vertical Tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-vertical flex items-center gap-3 whitespace-nowrap ${
                  activeTab === tab.id ? "active" : ""
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">{renderTabContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
