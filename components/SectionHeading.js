export default function SectionHeading({ kicker, title, description, className = "" }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {kicker && (
        <p className="text-sm mb-3" style={{ color: "#8C7A54" }}>
          {kicker}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl text-navy leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink/70 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
