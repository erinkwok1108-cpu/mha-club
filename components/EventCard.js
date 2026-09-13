export default function EventCard({ event }) {
  return (
    <article className="border border-hairline p-6 md:p-8 flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-4 text-sm text-ink/60">
        <span>{event.category}</span>
        <span>{event.date}</span>
      </div>
      <h3 className="font-serif text-xl md:text-2xl text-navy leading-snug">
        {event.title}
      </h3>
      <p className="text-ink/70 leading-relaxed">{event.description}</p>
      {event.speaker && (
        <p className="text-sm text-ink/50">Speaker: {event.speaker}</p>
      )}
    </article>
  );
}
