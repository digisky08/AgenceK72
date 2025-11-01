import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = (props) => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const overlay1Ref = useRef(null);
  const overlay2Ref = useRef(null);

  useGSAP(() => {
    // Smooth scroll-triggered animations for cards
    if (card1Ref.current && card2Ref.current) {
      const cards = [card1Ref.current, card2Ref.current];

      cards.forEach((card, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    }
  }, []);

  useEffect(() => {
    // Smooth image zoom on hover (simplified, no 3D rotations)
    const handleMouseEnter1 = () => {
      if (img1Ref.current) {
        gsap.to(img1Ref.current, {
          scale: 1.1,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave1 = () => {
      if (img1Ref.current) {
        gsap.to(img1Ref.current, {
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    const handleMouseEnter2 = () => {
      if (img2Ref.current) {
        gsap.to(img2Ref.current, {
          scale: 1.1,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave2 = () => {
      if (img2Ref.current) {
        gsap.to(img2Ref.current, {
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    const card1 = card1Ref.current;
    const card2 = card2Ref.current;

    if (card1) {
      card1.addEventListener("mouseenter", handleMouseEnter1);
      card1.addEventListener("mouseleave", handleMouseLeave1);
    }
    if (card2) {
      card2.addEventListener("mouseenter", handleMouseEnter2);
      card2.addEventListener("mouseleave", handleMouseLeave2);
    }

    return () => {
      if (card1) {
        card1.removeEventListener("mouseenter", handleMouseEnter1);
        card1.removeEventListener("mouseleave", handleMouseLeave1);
      }
      if (card2) {
        card2.removeEventListener("mouseenter", handleMouseEnter2);
        card2.removeEventListener("mouseleave", handleMouseLeave2);
      }
    };
  }, []);

  const handleCardClick = (image) => {
    // Add your click handler here - navigate to project detail or open modal
    console.log("Clicked on project:", image);
  };

  return (
    <>
      <div
        ref={card1Ref}
        className="lg:w-1/2 group relative h-full perspective-container cursor-pointer"
        onClick={() => handleCardClick(props.image1)}
      >
        <div className="relative h-full overflow-hidden rounded-none group-hover:rounded-[70px] transition-all duration-700 shadow-2xl group-hover:shadow-white/20 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <img
            ref={img1Ref}
            className="h-full w-full object-cover transition-transform duration-300 pointer-events-none"
            src={props.image1}
            alt=""
          />
          <div
            ref={overlay1Ref}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none"
          >
            <h2 className="uppercase text-xl md:text-3xl lg:text-6xl font-[font1] border-2 md:border-4 pt-2 md:pt-4 px-4 md:px-8 text-white border-white rounded-full transform hover:scale-110 transition-transform duration-300 pointer-events-none">
              Vior le projet
            </h2>
          </div>
        </div>
      </div>
      <div
        ref={card2Ref}
        className="lg:w-1/2 group relative h-full perspective-container cursor-pointer"
        onClick={() => handleCardClick(props.image2)}
      >
        <div className="relative h-full overflow-hidden rounded-none group-hover:rounded-[70px] transition-all duration-700 shadow-2xl group-hover:shadow-white/20 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <img
            ref={img2Ref}
            className="h-full w-full object-cover transition-transform duration-300 pointer-events-none"
            src={props.image2}
            alt=""
          />
          <div
            ref={overlay2Ref}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none"
          >
            <h2 className="uppercase text-xl md:text-3xl lg:text-6xl font-[font1] border-2 md:border-4 pt-2 md:pt-4 px-4 md:px-8 text-white border-white rounded-full transform hover:scale-110 transition-transform duration-300 pointer-events-none">
              Vior le projet
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
