import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState, useEffect } from "react";

const Contact = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const formSectionRef = useRef(null);
  const formRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const cardRefs = {
    email: useRef(null),
    phone: useRef(null),
    address: useRef(null),
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [activeField, setActiveField] = useState(null);

  gsap.registerPlugin(ScrollTrigger);

  // Fix cursor for form inputs
  useEffect(() => {
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.style.cursor = "text";
      input.addEventListener("focus", () => {
        document.body.style.cursor = "text";
      });
      input.addEventListener("blur", () => {
        document.body.style.cursor = "default";
      });
    });

    return () => {
      inputs.forEach((input) => {
        input.style.cursor = "";
      });
    };
  }, []);

  useGSAP(() => {
    // Hero title animation - split text effect
    if (titleRef.current) {
      const text = titleRef.current.textContent;
      const words = text.split(" ");
      titleRef.current.innerHTML = words
        .map(
          (word) =>
            `<span class="title-word" style="display: inline-block; margin-right: 0.2em;">${word}</span>`
        )
        .join("");

      gsap.from(".title-word", {
        y: 150,
        opacity: 0,
        rotationX: -90,
        transformPerspective: 1500,
        stagger: {
          amount: 0.6,
          from: "start",
        },
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // Continuous subtle animation
      gsap.to(".title-word", {
        y: "+=5",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 1,
          from: "random",
        },
      });
    }

    // Hero section parallax
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        y: -100,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }

    // Left panel slide in
    if (leftPanelRef.current) {
      gsap.from(leftPanelRef.current, {
        x: -200,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftPanelRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Parallax on scroll
      gsap.to(leftPanelRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: leftPanelRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }

    // Right panel slide in
    if (rightPanelRef.current) {
      gsap.from(rightPanelRef.current, {
        x: 200,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightPanelRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Parallax on scroll
      gsap.to(rightPanelRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: rightPanelRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }

    // Form fields stagger animation
    if (formRef.current) {
      const fields = formRef.current.querySelectorAll(".form-input-group");
      gsap.from(fields, {
        y: 60,
        opacity: 0,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    // Info cards animation
    Object.values(cardRefs).forEach((cardRef, index) => {
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          scale: 0.8,
          opacity: 0,
          rotationY: 45,
          transformPerspective: 1000,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    // Form section scroll animation
    if (formSectionRef.current) {
      gsap.from(formSectionRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formSectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (e, fieldName) => {
    setActiveField(fieldName);
    const field = e.target.closest(".form-input-group");
    if (field) {
      gsap.to(field.querySelector(".input-border"), {
        scaleX: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleBlur = (e) => {
    setActiveField(null);
    const field = e.target.closest(".form-input-group");
    if (field) {
      if (!e.target.value) {
        gsap.to(field.querySelector(".input-border"), {
          scaleX: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const button = e.target.querySelector('button[type="submit"]');
    if (button) {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      ref={containerRef}
      className="bg-black min-h-screen text-white relative"
    >
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[20vh] pb-[10vh]"
      >
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 lg:px-8">
          <h1
            ref={titleRef}
            className="font-[font2] lg:text-[10vw] md:text-[16vw] text-[22vw] uppercase leading-[0.85] mb-8 text-white"
          >
            Contactez-nous
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div
        ref={formSectionRef}
        className="min-h-screen flex items-center py-20 px-4 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Side - Contact Info Cards */}
            <div ref={leftPanelRef} className="space-y-8">
              <h2 className="font-[font2] text-5xl lg:text-7xl uppercase text-white mb-12">
                Nos
                <br />
                Coordonnées
              </h2>

              {/* Email Card */}
              <div
                ref={cardRefs.email}
                className="bg-black rounded-2xl p-8 border-2 border-gray-800"
              >
                <h3 className="font-[font2] text-2xl lg:text-3xl text-[#D3FD50] mb-4 uppercase">
                  Email
                </h3>
                <a
                  href="mailto:contact@agencek72.ca"
                  className="text-gray-400 font-[font1] text-lg lg:text-xl"
                >
                  contact@agencek72.ca
                </a>
              </div>

              {/* Phone Card */}
              <div
                ref={cardRefs.phone}
                className="bg-black rounded-2xl p-8 border-2 border-gray-800"
              >
                <h3 className="font-[font2] text-2xl lg:text-3xl text-[#D3FD50] mb-4 uppercase">
                  Téléphone
                </h3>
                <a
                  href="tel:+15141234567"
                  className="text-gray-400 font-[font1] text-lg lg:text-xl"
                >
                  +1 (514) 123-4567
                </a>
              </div>

              {/* Address Card */}
              <div
                ref={cardRefs.address}
                className="bg-black rounded-2xl p-8 border-2 border-gray-800"
              >
                <h3 className="font-[font2] text-2xl lg:text-3xl text-[#D3FD50] mb-4 uppercase">
                  Adresse
                </h3>
                <p className="text-gray-400 font-[font1] text-lg lg:text-xl leading-relaxed">
                  123 Rue Creative
                  <br />
                  Montréal, QC H2X 1Y2
                  <br />
                  Canada
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div ref={rightPanelRef}>
              <div className="bg-black rounded-3xl p-8 lg:p-12 border-2 border-gray-800 shadow-2xl">
                <h2 className="font-[font2] text-4xl lg:text-6xl uppercase text-[#D3FD50] mb-12">
                  Envoyez-nous
                  <br />
                  un message
                </h2>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Name Field */}
                  <div className="form-input-group relative">
                    <label
                      htmlFor="name"
                      className={`block font-[font2] text-base lg:text-lg mb-3 uppercase tracking-wider transition-colors ${
                        activeField === "name"
                          ? "text-[#D3FD50]"
                          : "text-gray-400"
                      }`}
                    >
                      Nom
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={(e) => handleFocus(e, "name")}
                        onBlur={handleBlur}
                        className="w-full bg-black border-2 border-gray-800 rounded-xl px-6 py-5 text-white placeholder-gray-600 focus:outline-none focus:border-[#D3FD50] transition-all duration-300 font-[font1] text-lg cursor-text"
                        placeholder="Votre nom"
                        style={{ cursor: "text" }}
                        required
                      />
                      <div className="input-border absolute bottom-0 left-0 h-0.5 bg-[#D3FD50] w-full origin-left scale-x-0 transition-transform duration-300"></div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="form-input-group relative">
                    <label
                      htmlFor="email"
                      className={`block font-[font2] text-base lg:text-lg mb-3 uppercase tracking-wider transition-colors ${
                        activeField === "email"
                          ? "text-[#D3FD50]"
                          : "text-gray-400"
                      }`}
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={(e) => handleFocus(e, "email")}
                        onBlur={handleBlur}
                        className="w-full bg-black border-2 border-gray-800 rounded-xl px-6 py-5 text-white placeholder-gray-600 focus:outline-none focus:border-[#D3FD50] transition-all duration-300 font-[font1] text-lg cursor-text"
                        placeholder="votre@email.com"
                        style={{ cursor: "text" }}
                        required
                      />
                      <div className="input-border absolute bottom-0 left-0 h-0.5 bg-[#D3FD50] w-full origin-left scale-x-0 transition-transform duration-300"></div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="form-input-group relative">
                    <label
                      htmlFor="message"
                      className={`block font-[font2] text-base lg:text-lg mb-3 uppercase tracking-wider transition-colors ${
                        activeField === "message"
                          ? "text-[#D3FD50]"
                          : "text-gray-400"
                      }`}
                    >
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={(e) => handleFocus(e, "message")}
                        onBlur={handleBlur}
                        rows="6"
                        className="w-full bg-black border-2 border-gray-800 rounded-xl px-6 py-5 text-white placeholder-gray-600 focus:outline-none focus:border-[#D3FD50] transition-all duration-300 resize-none font-[font1] text-lg cursor-text"
                        placeholder="Parlez-nous de votre projet..."
                        style={{ cursor: "text" }}
                        required
                      ></textarea>
                      <div className="input-border absolute bottom-0 left-0 h-0.5 bg-[#D3FD50] w-full origin-left scale-x-0 transition-transform duration-300"></div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-12 py-5 bg-[#D3FD50] text-black font-[font2] text-xl uppercase tracking-wider rounded-xl cursor-pointer"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="min-h-screen flex items-center justify-center px-4 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-[font2] text-5xl lg:text-8xl text-white mb-12 uppercase leading-tight">
            Commençons
            <br />
            un projet ensemble
          </h2>
          <p className="text-gray-400 lg:text-2xl text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-[font1]">
            Transformons vos idées en expériences mémorables qui marquent les
            esprits.
          </p>
          <a
            href="/projects"
            className="inline-block px-12 py-5 border-2 border-[#D3FD50] text-[#D3FD50] font-[font2] text-xl uppercase tracking-wider rounded-xl cursor-pointer"
          >
            Voir nos projets
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
