export default function AwardCard({ title, org, description, year, delay = 0 }) {
  return (
    <div
      className="reveal award-card flex flex-col rounded-lg p-6 cursor-default"
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--bg-border)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: 'var(--accent)', flexShrink: 0 }}
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>

        <span
          className="font-body text-xs font-medium px-3 py-1 rounded-full"
          style={{
            backgroundColor: 'var(--bg-border)',
            color: 'var(--accent)',
            fontFamily: "'Courier New', monospace",
            letterSpacing: '0.05em',
          }}
        >
          {year}
        </span>
      </div>

      <h3
        className="font-heading font-bold mb-1"
        style={{ color: 'var(--text-primary)', fontSize: '1rem' }}
      >
        {title}
      </h3>

      <p
        className="font-body text-xs font-medium mb-3"
        style={{ color: 'var(--accent)', letterSpacing: '0.05em' }}
      >
        {org}
      </p>

      <p
        className="font-body text-sm leading-relaxed flex-1"
        style={{ color: 'var(--text-muted)' }}
      >
        {description}
      </p>
    </div>
  )
}
