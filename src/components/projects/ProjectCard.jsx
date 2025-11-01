import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectCard = (props) => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const overlay1Ref = useRef(null);
  const overlay2Ref = useRef(null);

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  useGSAP(() => {
    // Initial animation on mount
    gsap.from([card1Ref.current, card2Ref.current], {
      y: 100,
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.3,
    });

    // Magnetic effect on mouse move
    const handleMagneticEffect = (e, cardRef) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(cardRef.current, {
        x: x * 0.1,
        y: y * 0.1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMagneticLeave = (cardRef) => {
      gsap.to(cardRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    if (card1Ref.current) {
      card1Ref.current.addEventListener("mousemove", (e) =>
        handleMagneticEffect(e, card1Ref)
      );
      card1Ref.current.addEventListener("mouseleave", () =>
        handleMagneticLeave(card1Ref)
      );
    }
    if (card2Ref.current) {
      card2Ref.current.addEventListener("mousemove", (e) =>
        handleMagneticEffect(e, card2Ref)
      );
      card2Ref.current.addEventListener("mouseleave", () =>
        handleMagneticLeave(card2Ref)
      );
    }

    return () => {
      if (card1Ref.current) {
        card1Ref.current.removeEventListener("mousemove", (e) =>
          handleMagneticEffect(e, card1Ref)
        );
        card1Ref.current.removeEventListener("mouseleave", () =>
          handleMagneticLeave(card1Ref)
        );
      }
      if (card2Ref.current) {
        card2Ref.current.removeEventListener("mousemove", (e) =>
          handleMagneticEffect(e, card2Ref)
        );
        card2Ref.current.removeEventListener("mouseleave", () =>
          handleMagneticLeave(card2Ref)
        );
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove1 = (e) => {
      if (!isHovered1) return;
      const rect = card1Ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      gsap.to(card1Ref.current, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        duration: 0.3,
        ease: "power2.out",
        scale: 1.02,
      });

      gsap.to(img1Ref.current, {
        x: (x - centerX) * 0.1,
        y: (y - centerY) * 0.1,
        scale: 1.15,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave1 = () => {
      setIsHovered1(false);
      gsap.to(card1Ref.current, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(img1Ref.current, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseMove2 = (e) => {
      if (!isHovered2) return;
      const rect = card2Ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      gsap.to(card2Ref.current, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        duration: 0.3,
        ease: "power2.out",
        scale: 1.02,
      });

      gsap.to(img2Ref.current, {
        x: (x - centerX) * 0.1,
        y: (y - centerY) * 0.1,
        scale: 1.15,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave2 = () => {
      setIsHovered2(false);
      gsap.to(card2Ref.current, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(img2Ref.current, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    if (card1Ref.current && card2Ref.current) {
      card1Ref.current.addEventListener("mousemove", handleMouseMove1);
      card1Ref.current.addEventListener("mouseleave", handleMouseLeave1);
      card2Ref.current.addEventListener("mousemove", handleMouseMove2);
      card2Ref.current.addEventListener("mouseleave", handleMouseLeave2);
    }

    return () => {
      if (card1Ref.current) {
        card1Ref.current.removeEventListener("mousemove", handleMouseMove1);
        card1Ref.current.removeEventListener("mouseleave", handleMouseLeave1);
      }
      if (card2Ref.current) {
        card2Ref.current.removeEventListener("mousemove", handleMouseMove2);
        card2Ref.current.removeEventListener("mouseleave", handleMouseLeave2);
      }
    };
  }, [isHovered1, isHovered2]);

  return (
    <>
      <div
        ref={card1Ref}
        className="lg:w-1/2 group relative h-full perspective-container"
        onMouseEnter={() => setIsHovered1(true)}
      >
        <div className="relative h-full overflow-hidden rounded-none group-hover:rounded-[70px] transition-all duration-700 shadow-2xl group-hover:shadow-white/20 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <img
            ref={img1Ref}
            className="h-full w-full object-cover transition-transform duration-300"
            src={props.image1}
            alt=""
          />
          <div
            ref={overlay1Ref}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent"
          >
            <h2 className="uppercase text-xl md:text-3xl lg:text-6xl font-[font1] border-2 md:border-4 pt-2 md:pt-4 px-4 md:px-8 text-white border-white rounded-full transform hover:scale-110 transition-transform duration-300">
              Vior le projet
            </h2>
          </div>
        </div>
      </div>
      <div
        ref={card2Ref}
        className="lg:w-1/2 group relative h-full perspective-container"
        onMouseEnter={() => setIsHovered2(true)}
      >
        <div className="relative h-full overflow-hidden rounded-none group-hover:rounded-[70px] transition-all duration-700 shadow-2xl group-hover:shadow-white/20 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <img
            ref={img2Ref}
            className="h-full w-full object-cover transition-transform duration-300"
            src={props.image2}
            alt=""
          />
          <div
            ref={overlay2Ref}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent"
          >
            <h2 className="uppercase text-xl md:text-3xl lg:text-6xl font-[font1] border-2 md:border-4 pt-2 md:pt-4 px-4 md:px-8 text-white border-white rounded-full transform hover:scale-110 transition-transform duration-300">
              Vior le projet
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
