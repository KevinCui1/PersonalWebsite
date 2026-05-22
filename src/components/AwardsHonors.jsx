import AwardCard from './AwardCard'
import SectionHeading from './SectionHeading'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const awards = [
  {
    title: 'VEX V5 Robotics',
    org: 'Robotics World Championship',
    description: 'State Rank #1 & State Skills Champion (Mar 2025) · Worlds Division Rank #2 & Division Semifinalists (May 2025) · State Skills Champion (Feb 2026) · Worlds Inspire Award (Apr 2026)',
    year: '2025–26',
  },
  {
    title: 'Competitive Math',
    org: 'AMC / Penn Math Contest',
    description: 'AMC: AIME Qualifier & Top 2.5% (2025) · Penn Math Contest: Individual Rank #1 (2026)',
    year: '2025–26',
  },
  {
    title: 'Biology',
    org: 'Genes in Space',
    description: 'Genes in Space: Semifinalist (2026)',
    year: '2026',
  },
  {
    title: 'Rising Star Award',
    org: 'DFWIT AI Competition',
    description: 'Presented the PassionProjectBuilder (DreamCollege.ai internship) at the DFWIT AI Competition, receiving the Rising Star Award and a $200 development grant.',
    year: '2025',
  },
  {
    title: 'Volunteering',
    org: 'AYLUS',
    description: 'Gold Volunteer Service Award · 100+ volunteer hours (2024–2025)',
    year: '2024–25',
  },
  {
    title: 'FLL Robotics',
    org: 'FIRST Lego League',
    description: 'State Finalist · American Robotics Open Championships: Tournament Champion & Lightning Round Champion (2024)',
    year: '2024',
  },
]

export default function AwardsHonors() {
  const sectionRef = useIntersectionObserver('.reveal', { threshold: 0.1 })

  return (
    <section id="awards" className="py-28 px-6 md:px-12" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="03" title="Awards &amp; Honors" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {awards.map((award, i) => (
            <AwardCard
              key={i}
              {...award}
              delay={(i + 1) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
