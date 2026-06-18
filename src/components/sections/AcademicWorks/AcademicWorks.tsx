import React from 'react'
import SectionHeading from '../../ui/SectionHeading'
import { ExternalLinkIcon } from '../../icons/SocialIcons'

interface AcademicWork {
  title: string
  authors?: string
  type: string
  institution: string
  period: string
  advisors?: string
  description: string
  link: string
}

interface AcademicWorksProps {
  works: AcademicWork[]
}

const AcademicWorks: React.FC<AcademicWorksProps> = ({ works }) => {
  return (
    <section id="academic-works" className="py-16 md:py-20 px-4 md:px-8 lg:px-12 scroll-mt-20 relative">
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />

      <div className="relative max-w-3xl">
        <SectionHeading label="Theses & Coursework" title="Academic Works" />

        <div className="space-y-4">
          {works.map((work, index) => (
            <article
              key={index}
              className={`glass-card p-5 md:p-6 group animate-on-scroll stagger-${Math.min(index % 5 + 1, 5)}`}
            >
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-3">
                {work.type}
              </span>
              <h3 className="text-base md:text-lg font-semibold text-ink leading-snug group-hover:text-accent-light transition-colors">
                {work.title}
              </h3>
              {work.authors && (
                <p className="text-sm text-ink-muted mt-2">{work.authors}</p>
              )}
              <p className="text-xs text-ink-faint mt-2">
                {work.institution} · {work.period}
              </p>
              {work.advisors && (
                <p className="text-xs text-ink-faint mt-1">{work.advisors}</p>
              )}
              <p className="text-sm text-ink-muted/80 mt-3 leading-relaxed">{work.description}</p>
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium link-accent"
              >
                View PDF
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AcademicWorks
