import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const iconProps = { width: 36, height: 36, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', style: { color: 'var(--accent)' }, 'aria-hidden': true }

const otherProjectIcons = [
  // MS Drug Target Evidence Browser — flask (biochem/research)
  <svg key="flask" {...iconProps}>
    <path d="M9 3h6M9 3v7l-4 9a1 1 0 0 0 .9 1.4h12.2A1 1 0 0 0 19 19l-4-9V3" />
    <line x1="6.5" y1="14" x2="17.5" y2="14" />
  </svg>,
  // Passion Projects — lightbulb (ideas/creativity)
  <svg key="bulb" {...iconProps}>
    <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 6H9c-1.5-1.5-3-3.5-3-6a6 6 0 0 1 6-6z" />
    <line x1="9" y1="17" x2="15" y2="17" />
  </svg>,
]

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function TagPill({ label }) {
  return (
    <span
      className="font-body text-xs px-3 py-1 rounded-full"
      style={{
        backgroundColor: 'var(--bg-border)',
        color: 'var(--accent)',
        fontFamily: "'Courier New', monospace",
        letterSpacing: '0.06em',
      }}
    >
      {label}
    </span>
  )
}

function FeaturedProject({ title, description, tags, reversed, image, imagePosition = 'center', github, externalLink }) {
  return (
    <div
      className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-24`}
    >
      {/* Image */}
      <div className={`featured-img-wrapper${reversed ? ' lg:order-last' : ''}`}>
        <div className="featured-img-placeholder">
          {image
            ? <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" style={{ objectPosition: imagePosition }} />
            : '[Project Image Placeholder]'
          }
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-4">
        <p
          className="font-body text-xs tracking-widest uppercase"
          style={{ color: 'var(--accent)', fontFamily: 'monospace' }}
        >
          Featured Project
        </p>

        <div className="flex items-center gap-3">
          <h3
            className="font-heading font-bold m-0"
            style={{ color: 'var(--text-primary)', fontSize: '1.4rem' }}
          >
            {title}
          </h3>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors duration-200" aria-label="GitHub">
              <GitHubIcon />
            </a>
          )}
          {externalLink && (
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors duration-200" aria-label="External link">
              <ExternalLinkIcon />
            </a>
          )}
        </div>

        <div
          className="rounded-lg p-5"
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--bg-border)',
          }}
        >
          {Array.isArray(description) ? (
            <ul className="font-body text-sm leading-relaxed m-0 pl-4 list-disc flex flex-col gap-2" style={{ color: 'var(--text-secondary)' }}>
              {description.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          ) : (
            <p className="font-body text-sm leading-relaxed m-0" style={{ color: 'var(--text-secondary)' }}>
              {description}
            </p>
          )}
        </div>

        <div className={`flex flex-wrap gap-2 ${reversed ? 'lg:justify-end' : ''}`}>
          {tags.map((tag) => <TagPill key={tag} label={tag} />)}
        </div>

      </div>
    </div>
  )
}

const featuredProjects = [
  {
    title: 'Perception-Driven Robotic Grasping',
    description: [
      'Research Internship @ Intelligent Robotics and Vision Lab, UTD',
      'Built an end-to-end object detection and 6D pose estimation pipeline integrating NIDS-Net and FoundationPose on a physical Fetch robot.',
      'Achieved a 95.38% grasp success rate across 13 diverse YCB objects in unstructured environments.',
      'Presented at the SPUR Symposium as the only high school submitter, alongside undergraduate and graduate researchers.',
    ],
    tags: ['ROS', 'Python', 'FoundationPose', 'NIDS-Net', 'MoveIt', 'Gazebo'],
    image: '/images/projects/UTD_Poster.png',
    imagePosition: 'top',
    github: 'https://github.com/JWRoboticsVision/CAST-STEM-2025',
  },
  {
    title: 'AI in STEM',
    description: [
      'Founded a student-run nonprofit delivering free AI and machine learning education to youth through volunteer-run workshops worldwide.',
      'Scaled to 200+ volunteers, 14+ chapters across 10 countries, and partnerships with local schools and community organizations.',
      'Developed a library of 13+ original courses spanning AI and ML fundamentals, deployed internationally across all chapters.',
    ],
    tags: ['Education', 'AI/ML', 'Curriculum Design', 'Chapter Establishment', 'Outreach'],
    reversed: true,
    image: '/images/projects/AI_In_STEM.png',
    externalLink: 'https://ai-in-stem.org',
  },
]

const otherProjects = [
  {
    title: 'MS Drug Target Evidence Browser',
    org: 'Bioinformatics / Research Tool',
    description: 'Interactive browser aggregating proteome-wide Mendelian randomization evidence across 4 published pQTL-MR studies to surface causal protein–MS associations, with colocalization support and druggability annotations.',
    tags: ['React', 'Vite', 'Recharts', 'Tailwind'],
    github: 'https://github.com/KevinCui1/ms-mendelian-randomization-browser',
  },
  {
    title: 'Passion Projects Website',
    org: 'DreamCollege.ai Internship',
    description: 'Web app that generates personalized extracurricular and passion project recommendations based on user interests, goals, and constraints, with optional LLM integration.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
    github: 'https://github.com/KevinCui1/PassionProjectBuilder',
  },
]

export default function ResearchProjects() {
  const sectionRef = useIntersectionObserver('.reveal', { threshold: 0.05 })

  return (
    <section id="research" className="py-28 px-6 md:px-12" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="02" title="Research &amp; Projects" />

        {/* Featured Projects */}
        {featuredProjects.map((project) => (
          <FeaturedProject key={project.title} {...project} />
        ))}

        {/* Other Projects */}
        <h3
          className="reveal font-heading font-bold text-center mb-10"
          style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', letterSpacing: '0.08em' }}
        >
          Other Noteworthy Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((p, i) => (
            <ProjectCard key={i} {...p} delay={(i + 1) * 100} icon={otherProjectIcons[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
