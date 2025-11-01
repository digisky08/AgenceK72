import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const cursorFollowerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = cursorFollowerRef.current

    if (!cursor || !follower) return

    // Always show custom cursor on entire website
    document.body.classList.add('custom-cursor-active')
    gsap.to([cursor, follower], {
      opacity: 1,
      scale: 1,
      duration: 0.3,
    })

    const handleMouseMove = (e) => {
      // Cursor dot follows mouse immediately
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      })

      // Follower follows with delay
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    const handleMouseEnter = (e) => {
      // Expand cursor on hover over clickable elements
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
      })
      gsap.to(follower, {
        scale: 2,
        duration: 0.3,
      })
    }

    const handleMouseLeave = (e) => {
      // Reset cursor size
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      })
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
      })
    }

    // Use event delegation for better performance and dynamic elements
    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive = target.matches('a, button, .link, .cursor-pointer, [role="button"], input, textarea, select, [onclick], [href]') ||
                           target.closest('a, button, .link, .cursor-pointer, [role="button"], [onclick], [href]')
      
      if (isInteractive) {
        handleMouseEnter(e)
      } else {
        handleMouseLeave(e)
      }
    }

    document.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[100] mix-blend-difference"
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: '#D3FD50',
          opacity: 0,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      {/* Cursor follower circle */}
      <div
        ref={cursorFollowerRef}
        className="fixed pointer-events-none z-[100]"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid #D3FD50',
          opacity: 0,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
    </>
  )
}

export default CustomCursor

