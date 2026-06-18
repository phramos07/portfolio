import React from 'react'
import SectionHeading from '../../ui/SectionHeading'
import { ExternalLinkIcon } from '../../icons/SocialIcons'

interface Publication {
  title: string
  authors: string
  venue: string
  description?: string
  link?: string
}

interface PublicationsProps {
  publications: Publication[]
}

const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  return (
    <section id="publications" className="py-16 md:py-20 px-4 md:px-8 lg:px-12 scroll-mt-20 relative">
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />

      <div className="relative max-w-3xl">
        <SectionHeading label="Research" title="Publications" />

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <article
              key={index}
              className={`glass-card p-5 md:p-6 group animate-on-scroll stagger-${Math.min(index % 5 + 1, 5)}`}
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex shrink-0 items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent font-display text-sm font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-ink leading-snug group-hover:text-accent-light transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-ink-muted mt-2 leading-relaxed">{pub.authors}</p>
                  {pub.description && (
                    <p className="text-sm text-ink-muted/80 mt-3 leading-relaxed">{pub.description}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-glow-cyan/10 text-glow-cyan border border-glow-cyan/20">
                      {pub.venue}
                    </span>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium link-accent"
                      >
                        View Paper
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
