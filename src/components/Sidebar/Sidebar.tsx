import React from 'react'
import {
  LinkedInIcon,
  GitHubIcon,
  ScholarIcon,
  TwitterIcon,
  MailIcon,
  MapPinIcon,
  ExternalLinkIcon,
} from '../icons/SocialIcons'

interface EducationItem {
  degree: string
  institution: string
  period: string
  location?: string
  dissertation?: string
}

interface SidebarProps {
  name: string
  profileImageUrl?: string
  email: string
  office: {
    building: string
    room: string
    campus: string
  }
  socials: {
    linkedin?: string
    twitter?: string
    github?: string
    scholar?: string
  }
  education: EducationItem[]
  cvUrl?: string
}

const socialLinks = (
  socials: SidebarProps['socials']
): { href: string; label: string; icon: React.ReactNode }[] => {
  const links: { href: string; label: string; icon: React.ReactNode }[] = []
  if (socials.linkedin) links.push({ href: socials.linkedin, label: 'LinkedIn', icon: <LinkedInIcon /> })
  if (socials.github) links.push({ href: socials.github, label: 'GitHub', icon: <GitHubIcon /> })
  if (socials.scholar) links.push({ href: socials.scholar, label: 'Google Scholar', icon: <ScholarIcon /> })
  if (socials.twitter) links.push({ href: socials.twitter, label: 'Twitter', icon: <TwitterIcon /> })
  return links
}

const ProfileContent: React.FC<SidebarProps> = ({
  name,
  profileImageUrl = 'https://via.placeholder.com/256',
  email,
  office,
  socials,
  education,
  cvUrl,
}) => {
  const links = socialLinks(socials)

  return (
    <>
      {/* Profile Picture */}
      <div className="relative mb-5">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/40 via-glow-cyan/20 to-accent/10 blur-sm" />
        <div className="relative w-32 h-32 lg:w-44 lg:h-44 rounded-full overflow-hidden ring-2 ring-white/10 shadow-glow-amber">
          <img
            src={profileImageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h2 className="font-display text-xl lg:text-2xl font-semibold text-ink text-center mb-1">
        {name}
      </h2>
      <p className="text-sm text-accent/90 text-center mb-6 lg:mb-8">Compilers · Systems · Research</p>

      {/* Contact */}
      <div className="w-full space-y-4 lg:space-y-5">
        <div className="flex items-start gap-3">
          <MailIcon className="w-4 h-4 mt-0.5 text-accent shrink-0" />
          <div>
            <h3 className="text-[10px] font-semibold text-ink-faint uppercase tracking-widest mb-1">Email</h3>
            <a href={`mailto:${email}`} className="text-sm text-ink-muted hover:text-glow-cyan transition-colors break-all">
              {email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPinIcon className="w-4 h-4 mt-0.5 text-accent shrink-0" />
          <div>
            <h3 className="text-[10px] font-semibold text-ink-faint uppercase tracking-widest mb-1">Office</h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              {office.building}, {office.room}
              <br />
              {office.campus}
            </p>
          </div>
        </div>

        {links.length > 0 && (
          <div>
            <h3 className="text-[10px] font-semibold text-ink-faint uppercase tracking-widest mb-3">Connect</h3>
            <div className="flex gap-2 flex-wrap">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] text-ink-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        )}

        {cvUrl && (
          <div>
            <h3 className="text-[10px] font-semibold text-ink-faint uppercase tracking-widest mb-2">Resume</h3>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-glow-cyan transition-colors"
            >
              Download CV
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        <div>
          <h3 className="text-[10px] font-semibold text-ink-faint uppercase tracking-widest mb-3">Education</h3>
          <div className="space-y-3">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative pl-4 border-l border-accent/20 hover:border-accent/50 transition-colors"
              >
                <p className="text-sm text-ink font-medium leading-snug">{item.degree}</p>
                <p className="text-xs text-ink-muted mt-0.5">{item.institution}</p>
                <p className="text-xs text-ink-faint mt-0.5">
                  {item.period}
                  {item.location && ` · ${item.location}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <>
      {/* Mobile profile card */}
      <aside className="lg:hidden mx-4 -mt-16 relative z-20 mb-8 animate-on-scroll">
        <div className="glass-card p-6 flex flex-col items-center max-w-lg mx-auto">
          <ProfileContent {...props} />
        </div>
      </aside>

      {/* Desktop sticky sidebar */}
      <aside className="hidden lg:block sticky top-[65px] self-start w-80 xl:w-96 shrink-0 z-30 h-[calc(100vh-65px)] overflow-y-auto border-r border-white/[0.04] bg-surface/50 backdrop-blur-sm">
        <div className="p-8 flex flex-col items-center">
          <ProfileContent {...props} />
        </div>
      </aside>
    </>
  )
}

export default Sidebar
