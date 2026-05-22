import profilePic from '../assets/profile-picture.jpg'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-12"
    >
      <div className="absolute inset-0 hero-glow" />

      <div
        className="relative z-10 w-full flex flex-col-reverse md:flex-row md:items-center md:gap-12 lg:gap-20"
        style={{ marginTop: '-10vh' }}
      >
        {/* Text content */}
        <div className="flex-1">
          <p
            className="hero-animate anim-delay-0 font-body font-medium text-s tracking-[0.2em] uppercase mb-6"
            style={{ color: 'var(--accent)' }}
          >
            Hi, my name is
          </p>

          <h1
            className="hero-animate anim-delay-100 font-heading font-bold m-0 leading-none mb-4"
            style={{ fontSize: 'clamp(52px, 8vw, 80px)', color: 'var(--text-primary)' }}
          >
            Kevin Cui
          </h1>

          <p
            className="hero-animate anim-delay-300 font-body font-light text-base leading-relaxed max-w-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            I'm a high schooler who's interested in a little bit of everything, including computational biology/genetics research, competitive math, robotics, and STEM/AI literacy through my nonprofit, AI in STEM!
          </p>
        </div>

        {/* Profile photo */}
        <div className="hero-animate anim-delay-200 flex-shrink-0 flex justify-center md:justify-end mb-16 md:mb-0 md:pr-4">
          <div className="hero-photo-wrapper">
            <img
              src={profilePic}
              alt="Kevin Cui"
              style={{
                width: 'clamp(180px, 28vw, 340px)',
                aspectRatio: '3 / 4',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
