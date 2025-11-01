import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/projects/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Projects = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Title animation with 3D effect
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.9,
        rotationX: 90,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3,
      });
    }

    // Scroll-triggered card animations with stagger
    gsap.utils.toArray(".project-row").forEach((row, index) => {
      gsap.from(row, {
        y: 200,
        opacity: 0,
        scale: 0.85,
        rotationY: 15,
        duration: 1.5,
        ease: "power3.out",
        delay: index * 0.15,
        scrollTrigger: {
          trigger: row,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      // Scale animation on scroll
      gsap.to(row, {
        scale: 0.98,
        scrollTrigger: {
          trigger: row,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <div className="lg:p-8 p-4 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <div className="pt-[35vh] pb-12 lg:pb-20">
        <div className="relative text-center">
          <h2
            ref={titleRef}
            className="font-[font2] lg:text-[9.5vw] md:text-[15vw] text-[20vw] uppercase leading-[0.9] mb-2 lg:mb-4 text-white"
          >
            Projets
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 italic mt-0">
            Des réalisations qui marquent
          </p>
        </div>
      </div>
      <div ref={containerRef} className="space-y-4 md:space-y-6 lg:space-y-8">
        {projects.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="project-row w-full lg:h-[850px] md:h-[600px] h-[400px] flex lg:flex-row flex-col lg:gap-6 gap-4 relative group"
            >
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          );
        })}
      </div>
      <div className="mt-16 md:mt-24 lg:mt-32 text-center py-12 md:py-16 lg:py-20">
        <p className="text-3xl md:text-5xl lg:text-6xl font-[font2] text-gray-800 italic">
          Plus à venir...
        </p>
      </div>
    </div>
  );
};

export default Projects;
