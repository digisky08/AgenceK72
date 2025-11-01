import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const containerRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function () {
    // Title animation with split text
    if (titleRef.current) {
      const titleElement = titleRef.current
      const originalHTML = titleElement.innerHTML
      
      // Replace the content with word spans
      titleElement.innerHTML = originalHTML
        .replace(/Soixan7e/g, '<span class="title-word" style="display: inline-block;">Soixan7e</span>')
        .replace(/Douze/g, '<span class="title-word" style="display: inline-block;">Douze</span>')
      
      gsap.from('.title-word', {
        y: 100,
        opacity: 0,
        rotationX: -90,
        transformPerspective: 1000,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleElement,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      })
    }

    // Text paragraph animation
    if (textRef.current) {
      gsap.from(textRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      })
    }

    // Image pin and scroll animation
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          if (imageRef.current) {
            imageRef.current.src = imageArray[imageIndex]
            
            // Fade transition effect
            gsap.to(imageRef.current, {
              opacity: 0.3,
              duration: 0.1,
              onComplete: () => {
                gsap.to(imageRef.current, {
                  opacity: 1,
                  duration: 0.3,
                })
              }
            })
          }
        }
      }
    })

    // Parallax effect for image container
    gsap.to(imageDivRef.current, {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      }
    })
  })


  return (
    <div ref={containerRef} className='parent bg-black min-h-[300vh]'>
      <div id='page1' className='min-h-screen pb-20'>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 top-96 lg:left-[30vw] left-[30vw] z-10 shadow-2xl'>
          <img ref={imageRef} className='h-full object-cover w-full transition-opacity' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2] pt-[35vh]'>
          <div className='lg:mt-[20vh] mt-[10vh]' ref={titleRef}>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw] text-white'>
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-20 mt-8 px-6 lg:px-0'>
            <p ref={textRef} className='lg:text-6xl text-xl lg:leading-tight leading-relaxed text-gray-300'>
              Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C'est pour ça qu'on s'engage à donner de la perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      
      {/* Additional creative sections */}
      <div className='min-h-screen flex items-center justify-center px-6 lg:px-20 py-20'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='font-[font2] text-white lg:text-8xl text-4xl mb-16 text-center uppercase'>
            Notre Approche
          </h2>
          <div className='grid lg:grid-cols-3 gap-12'>
            <div className='space-y-4'>
              <h3 className='font-[font2] text-[#D3FD50] lg:text-4xl text-2xl uppercase'>Créativité</h3>
              <p className='text-gray-400 lg:text-xl text-base leading-relaxed'>
                Nous transformons les idées en expériences visuelles mémorables qui captivent et inspirent.
              </p>
            </div>
            <div className='space-y-4'>
              <h3 className='font-[font2] text-[#D3FD50] lg:text-4xl text-2xl uppercase'>Stratégie</h3>
              <p className='text-gray-400 lg:text-xl text-base leading-relaxed'>
                Chaque décision créative est guidée par une stratégie solide qui aligne la vision et les objectifs.
              </p>
            </div>
            <div className='space-y-4'>
              <h3 className='font-[font2] text-[#D3FD50] lg:text-4xl text-2xl uppercase'>Innovation</h3>
              <p className='text-gray-400 lg:text-xl text-base leading-relaxed'>
                Nous repoussons les limites pour créer des solutions novatrices qui marquent les esprits.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='min-h-screen flex items-center justify-center px-6 lg:px-20 py-20'>
        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='font-[font2] text-white lg:text-8xl text-4xl mb-12 uppercase leading-tight'>
            Bâtir des marques<br />
            qui résistent<br />
            au temps
          </h2>
          <p className='text-gray-400 lg:text-2xl text-lg max-w-4xl mx-auto leading-relaxed mt-12'>
            Nous croyons que chaque marque a une histoire unique à raconter. Notre mission est de donner vie à cette histoire à travers un design qui résonne, une stratégie qui performe et une créativité qui inspire.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Agence