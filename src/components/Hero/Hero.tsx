import React, { useEffect, useRef } from 'react'

interface HeroProps {
  name: string
  title: string
  coverImageUrl?: string
}

const Hero: React.FC<HeroProps> = ({ name, title, coverImageUrl }) => {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = (): void => {
      if (!parallaxRef.current) return
      const scrolled = window.scrollY
      parallaxRef.current.style.transform = `translateY(${scrolled * 0.35}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative w-full h-[50vh] min-h-[320px] max-h-[520px] overflow-hidden">
      {/* Background layer with parallax */}
      <div
        ref={parallaxRef}
        className="hero-parallax absolute inset-0 scale-110"
        style={
          coverImageUrl
            ? { backgroundImage: `url(${coverImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
            : undefined
        }
      >
        {!coverImageUrl && (
          <div className="absolute inset-0 bg-hero-gradient animate-gradient-shift bg-[length:200%_200%]" />
        )}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f14] via-[#0c0f14]/70 to-[#0c0f14]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0f14]/60 via-transparent to-[#0c0f14]/40" />
      <div className="absolute inset-0 bg-mesh opacity-80" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(232,168,73,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,168,73,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-12 md:pb-16 px-4 text-center">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-accent mb-3 animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          PORTFOLIO
        </p>
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-ink tracking-tight animate-fade-up opacity-0"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          {name}
        </h1>
        <p
          className="mt-3 md:mt-4 text-lg md:text-xl text-ink-muted font-light animate-fade-up opacity-0"
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          {title}
        </p>
        <div
          className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent animate-fade-in opacity-0"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        />
      </div>
    </section>
  )
}

export default Hero
