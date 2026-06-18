import React from 'react'
import SectionHeading from '../../ui/SectionHeading'
import { ExternalLinkIcon } from '../../icons/SocialIcons'

interface Project {
  name: string
  description: string
  link?: string
  linkLabel?: string
}

interface ProjectsProps {
  projects: Project[]
}

const projectIcons = ['⚙', '◈', '◇', '▣']

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-16 md:py-20 px-4 md:px-8 lg:px-12 pb-24 scroll-mt-20">
      <div className="max-w-3xl">
        <SectionHeading label="Selected Work" title="Projects" />

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`glass-card p-5 md:p-6 group flex flex-col animate-on-scroll stagger-${Math.min(index % 5 + 1, 5)} ${
                index === 0 ? 'sm:col-span-2' : ''
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-accent/20 to-glow-cyan/10 text-accent text-sm font-display">
                  {projectIcons[index % projectIcons.length]}
                </span>
                <h3 className="text-base md:text-lg font-semibold text-ink pt-1 group-hover:text-accent-light transition-colors">
                  {project.name}
                </h3>
              </div>

              <p className="text-sm text-ink-muted leading-relaxed flex-1">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium link-accent"
                >
                  {project.linkLabel ?? 'View Project'}
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
