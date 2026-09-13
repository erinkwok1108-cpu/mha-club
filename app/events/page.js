import SectionHeading from "../../components/SectionHeading";
import EventCard from "../../components/EventCard";
import { events, featuredEvent } from "../../data/events";
import { CLUB_NAME } from "../../data/config";

export const metadata = {
  title: `Events — ${CLUB_NAME}`,
};

export default function EventsPage() {
  const rest = events.filter((e) => e.slug !== featuredEvent.slug);

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20">
        <p className="text-sm mb-3" style={{ color: "#8C7A54" }}>
          Events
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-navy leading-tight max-w-3xl">
          Seminars, discussions, and projects.
        </h1>
        <p className="mt-6 text-ink/70 max-w-xl leading-relaxed">
          Dates below are placeholders until confirmed — check back or see our{" "}
          Join page for how meeting announcements are shared.
        </p>
      </section>

      <section className="border-t border-hairline bg-navy text-paper">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <p className="text-sm text-stone mb-6">Featured</p>
          <div className="border border-paper/20 p-6 md:p-10">
            <div className="flex items-baseline justify-between gap-4 text-sm text-paper/60">
              <span>{featuredEvent.category}</span>
              <span>{featuredEvent.date}</span>
            </div>
            <h2 className="font-serif text-2xl md:text-4xl mt-4 leading-snug max-w-3xl">
              {featuredEvent.title}
            </h2>
            <p className="mt-4 text-paper/75 leading-relaxed max-w-2xl">
              {featuredEvent.description}
            </p>
            {featuredEvent.speaker && (
              <p className="mt-4 text-sm text-paper/50">
                Speaker: {featuredEvent.speaker}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <SectionHeading title="All events" />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {rest.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
