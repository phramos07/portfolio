import React from 'react'
import SectionHeading from '../../ui/SectionHeading'

interface WorkItem {
  title: string
  organization: string
  period: string
  responsibilities: string[]
}

interface WorkProps {
  items: WorkItem[]
}

const Work: React.FC<WorkProps> = ({ items }) => {
  return (
    <section id="work" className="py-16 md:py-20 px-4 md:px-8 lg:px-12 scroll-mt-20">
      <div className="max-w-3xl">
        <SectionHeading label="Experience" title="Work" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-accent/15 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {items.map((item, index) => (
              <article
                key={index}
                className={`relative animate-on-scroll stagger-${Math.min(index % 5 + 1, 5)}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 hidden sm:flex items-center justify-center w-4 h-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-accent/10" />
                </div>

                <div className="sm:ml-10 glass-card p-5 md:p-6 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-ink group-hover:text-accent-light transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-ink-muted text-sm md:text-base mt-0.5">{item.organization}</p>
                    </div>
                    <span className="inline-flex self-start shrink-0 items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {item.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-ink-muted leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-glow-cyan/60 shrink-0" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
