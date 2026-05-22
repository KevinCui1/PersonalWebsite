export default function SectionHeading({ number, title, headingRef }) {
  return (
    <div ref={headingRef} className="section-heading reveal">
      <span className="section-heading__num">{number}.</span>
      <h2 className="section-heading__title">{title}</h2>
      <div className="section-heading__line" />
    </div>
  )
}
