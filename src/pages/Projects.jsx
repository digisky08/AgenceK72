import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/projects/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Projects = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const bestProjectsTitleRef = useRef(null);
  const bestProjectsContainerRef = useRef(null);

  const bestProjects = [
    {
      title: "PJC",
      category: "Brand Identity",
      description: "Innovative branding solution for modern businesses",
      image:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    },
    {
      title: "Widescape",
      category: "Digital Experience",
      description: "Transforming digital landscapes with creative vision",
      image:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      title: "OKA",
      category: "Visual Design",
      description: "Elegant design meets functional excellence",
      image:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
    },
  ];

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
    // Unique title animation with split text reveal
    if (titleRef.current) {
      const titleChars = titleRef.current.textContent.split("");
      titleRef.current.innerHTML = titleChars
        .map(
          (char, i) =>
            `<span class="title-char" style="display: inline-block;">${
              char === " " ? "&nbsp;" : char
            }</span>`
        )
        .join("");

      gsap.from(".title-char", {
        y: 100,
        opacity: 0,
        rotationX: -90,
        transformPerspective: 1000,
        stagger: 0.03,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }

    // Unique scroll-triggered card animations with different styles per card
    gsap.utils.toArray(".project-row").forEach((row, index) => {
      // Different animation styles based on index
      if (index % 3 === 0) {
        // Style 1: Slide from left with fade
        gsap.from(row, {
          x: -150,
          opacity: 0,
          rotation: -5,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      } else if (index % 3 === 1) {
        // Style 2: Slide from right with fade
        gsap.from(row, {
          x: 150,
          opacity: 0,
          rotation: 5,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      } else {
        // Style 3: Scale up from center with blur
        gsap.from(row, {
          scale: 0.7,
          opacity: 0,
          filter: "blur(10px)",
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // Continuous parallax effect while scrolling
      gsap.to(row, {
        y: index % 2 === 0 ? -30 : -60,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: row,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Subtle rotation effect on scroll
      gsap.to(row, {
        rotation: index % 2 === 0 ? 1 : -1,
        ease: "none",
        scrollTrigger: {
          trigger: row,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    });

    // Animate subtitle
    const subtitle = titleRef.current?.nextElementSibling;
    if (subtitle) {
      gsap.from(subtitle, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtitle,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }

    // Best Projects Title Animation
    if (bestProjectsTitleRef.current) {
      const bestTitleChars = bestProjectsTitleRef.current.textContent.split("");
      bestProjectsTitleRef.current.innerHTML = bestTitleChars
        .map(
          (char, i) =>
            `<span class="best-title-char" style="display: inline-block;">${
              char === " " ? "&nbsp;" : char
            }</span>`
        )
        .join("");

      gsap.from(".best-title-char", {
        y: 80,
        opacity: 0,
        rotationZ: -15,
        stagger: 0.05,
        duration: 0.9,
        ease: "elastic.out(1, 0.6)",
        scrollTrigger: {
          trigger: bestProjectsTitleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    // Best Projects Container Animation
    if (bestProjectsContainerRef.current) {
      gsap.from(bestProjectsContainerRef.current.children, {
        y: 60,
        opacity: 0,
        scale: 0.9,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bestProjectsContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
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

      {/* Best Projects Section */}

      {/* All Projects Section */}
      <div className="mt-20 md:mt-32 lg:mt-40">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h3 className="font-[font2] lg:text-[5vw] md:text-[8vw] text-[12vw] uppercase leading-[0.9] mb-4 text-gray-700">
            Tous Les Projets
          </h3>
        </div>
      </div>

      <div ref={containerRef} className="space-y-4 md:space-y-6 lg:space-y-8">
        {projects.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="project-row w-full lg:h-[850px] md:h-[600px] h-[400px] flex lg:flex-row flex-col lg:gap-6 gap-4 relative group"
            >
              <div className="project-card-wrapper w-full flex lg:flex-row flex-col lg:gap-6 gap-4">
                <ProjectCard image1={elem.image1} image2={elem.image2} />
              </div>
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
