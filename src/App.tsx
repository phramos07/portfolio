import React from 'react'
import Hero from './components/Hero/Hero'
import Navigation from './components/Navigation/Navigation'
import Sidebar from './components/Sidebar/Sidebar'
import Work from './components/sections/Work/Work'
import Publications from './components/sections/Publications/Publications'
import AcademicWorks from './components/sections/AcademicWorks/AcademicWorks'
import Projects from './components/sections/Projects/Projects'
import { professorData } from './data/professorData'
import { useScrollAnimation } from './hooks/useScrollAnimation'

const App: React.FC = () => {
  useScrollAnimation()

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ): void => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-[#0c0f14]">
      <Navigation onNavClick={handleNavClick} />

      <Hero
        name={professorData.name}
        title="Computer Scientist"
        coverImageUrl={professorData.coverImageUrl}
      />

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        <Sidebar
          name={professorData.name}
          profileImageUrl={professorData.profileImageUrl}
          email={professorData.email}
          office={professorData.office}
          socials={professorData.socials}
          education={professorData.education}
          cvUrl={professorData.cvUrl}
        />

        <main className="flex-1 min-w-0">
          <Work items={professorData.work} />
          <Publications publications={professorData.publications} />
          <AcademicWorks works={professorData.academicWorks} />
          <Projects projects={professorData.projects} />
        </main>
      </div>

      <footer className="border-t border-white/[0.04] py-8 mt-8">
        <p className="text-center text-sm text-ink-faint">
          © {new Date().getFullYear()} {professorData.name}. Built with care.
        </p>
      </footer>
    </div>
  )
}

export default App
