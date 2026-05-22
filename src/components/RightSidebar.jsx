export default function RightSidebar() {
  return (
    <aside
      className="hidden lg:flex fixed right-0 top-0 h-screen flex-col items-center justify-end z-40"
      style={{ width: '80px', paddingBottom: 0 }}
    >
      <a
        href="mailto:kevinkcui1@gmail.com"
        className="sidebar-link hover:text-accent transition-colors duration-200"
        style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: 'var(--text-muted)',
          marginBottom: '1.5rem',
          textDecoration: 'none',
        }}
        aria-label="Send email"
      >
        kevinkcui1@gmail.com
      </a>
      <div style={{ width: '1px', height: '90px', backgroundColor: 'var(--text-muted)' }} />
    </aside>
  )
}
