import { useState } from 'react'
import PageLoader from './components/PageLoader'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import MobileNav from './components/Navbar'
import Hero from './components/Hero'
import ResearchProjects from './components/ResearchProjects'
import AwardsHonors from './components/AwardsHonors'
import { useActiveSection } from './hooks/useActiveSection'

function SiteContent() {
  const activeSection = useActiveSection()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-base)' }}>
      <LeftSidebar activeSection={activeSection} />
      <RightSidebar />
      <MobileNav />

      <main
        className="lg:ml-[200px] lg:mr-[80px]"
        style={{ paddingTop: '0' }}
      >
        {/* Mobile top padding to clear navbar */}
        <div className="lg:hidden" style={{ height: '60px' }} />

        <Hero />
        <ResearchProjects />
        <AwardsHonors />

        <footer
          className="py-8 text-center font-body text-xs"
          style={{ color: 'var(--text-muted)', borderTop: '1px solid var(--bg-border)' }}
        >
          Designed &amp; Built by Kevin Cui
        </footer>
      </main>
    </div>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <PageLoader onComplete={() => setLoaded(true)} />
      {loaded && <SiteContent />}
    </>
  )
}
