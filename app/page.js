import Link from "next/link";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { CLUB_NAME } from "../data/config";
import { featuredEvent } from "../data/events";

const WHAT_WE_DO = [
  {
    title: "Seminars",
    text: "Focused sessions on a single psychological concept or case study, led by students who've researched it in depth.",
  },
  {
    title: "Discussions",
    text: "Open, unstructured conversation where members bring their own questions and experiences to the table.",
  },
  {
    title: "Research projects",
    text: "Independent and small-group projects exploring a topic in psychology or mental health, shared back with the club.",
  },
  {
    title: "Mental-health awareness",
    text: "Ongoing efforts to make conversations about mental health more informed, and less taboo, across the school.",
  },
  {
    title: "Curated resources",
    text: "A working library of books, articles, and videos, reviewed and organized by members — not just linked.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-28 pb-20 md:pb-28">
        <div className="grid md:grid-cols-12 gap-8 md:gap-6 items-end">
          <div className="md:col-span-8">
            <h1 className="reveal font-serif text-[13vw] leading-[0.98] md:text-7xl md:leading-[0.98] text-navy">
              {CLUB_NAME}
            </h1>
          </div>
          <div className="md:col-span-4">
            <p
              className="reveal text-lg md:text-xl text-ink/80 leading-relaxed"
              style={{ animationDelay: "0.15s" }}
            >
              Exploring the mind, mental health, and the human experience — through
              seminars, discussion, and student-led research.
            </p>
          </div>
        </div>

        <div
          className="reveal mt-10 md:mt-16 max-w-2xl"
          style={{ animationDelay: "0.3s" }}
        >
          <p className="text-ink/70 leading-relaxed">
            We're a student-run club that treats psychology and mental health as
            subjects worth studying carefully — not just talking about in passing.
            Every meeting is built around a real question: how memory works, why
            stress affects teenagers differently, what addiction actually looks
            like up close. No credentials required to join, just curiosity.
          </p>
        </div>

        <div
          className="reveal mt-10 flex flex-wrap gap-4"
          style={{ animationDelay: "0.45s" }}
        >
          <Button href="/about">Explore the club</Button>
          <Button href="/events" variant="secondary">
            Upcoming events
          </Button>
          <Button href="/join" variant="secondary">
            Join us
          </Button>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="border-t border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <SectionHeading
            kicker="What we do"
            title="Five ways we spend our meetings"
            description="Each one shows up in a different form, but they all come back to the same goal: understanding people better."
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {WHAT_WE_DO.map((item, i) => (
              <div key={item.title} className="max-w-sm">
                <p className="text-sm text-ink/40 mb-2">{`0${i + 1}`}</p>
                <h3 className="font-serif text-xl text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-ink/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="border-t border-hairline bg-navy text-paper">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-sm text-stone mb-3">Upcoming</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                One conversation we're preparing right now.
              </h2>
              <div className="mt-8">
                <Link
                  href="/events"
                  className="inline-flex items-center text-sm font-medium border-b border-paper/40 hover:border-paper pb-0.5"
                >
                  See all events
                </Link>
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="border border-paper/20 p-6 md:p-10">
                <div className="flex items-baseline justify-between gap-4 text-sm text-paper/60">
                  <span>{featuredEvent.category}</span>
                  <span>{featuredEvent.date}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl mt-4 leading-snug">
                  {featuredEvent.title}
                </h3>
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
          </div>
        </div>
      </section>

      {/* WHY THIS EXISTS */}
      <section className="border-t border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <p className="text-sm mb-3" style={{ color: "#8C7A54" }}>
                Why this exists
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy leading-tight">
                Most conversations about mental health happen in passing.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-ink/70 leading-relaxed">
                We started this club because the conversations that matter most —
                about stress, identity, addiction, motivation, connection — often
                happen quickly, informally, and without much context. We wanted a
                space to slow those conversations down: to bring in real research,
                sit with hard questions, and talk about mental health with the
                same seriousness we'd bring to any other subject worth studying.
              </p>
              <p className="mt-4 text-ink/70 leading-relaxed">
                We're not a substitute for professional support. We're a place to
                think, ask questions, and understand each other a little better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center md:text-left">
          <div className="md:flex items-end justify-between gap-10">
            <h2 className="font-serif text-3xl md:text-5xl text-navy leading-tight max-w-2xl">
              Come think with us.
            </h2>
            <div className="mt-8 md:mt-0 shrink-0">
              <Button href="/join">Join the club</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
