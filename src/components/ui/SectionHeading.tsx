import React from 'react'

interface SectionHeadingProps {
  label: string
  title: string
  className?: string
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ label, title, className = '' }) => {
  return (
    <div className={`mb-10 md:mb-12 animate-on-scroll ${className}`}>
      <span className="section-label">{label}</span>
      <h2 className="section-heading">{title}</h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
    </div>
  )
}

export default SectionHeading
