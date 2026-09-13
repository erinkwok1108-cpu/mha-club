import SectionHeading from "../../components/SectionHeading";
import { team } from "../../data/team";
import { CLUB_NAME } from "../../data/config";

export const metadata = {
  title: `About — ${CLUB_NAME}`,
};

export default function AboutPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20">
        <p className="text-sm mb-3" style={{ color: "#8C7A54" }}>
          About
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-navy leading-tight max-w-3xl">
          A student club that takes the mind seriously.
        </h1>
      </section>

      <section className="border-t border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-serif text-2xl text-navy">Who we are</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-ink/70 leading-relaxed">
              We are a student-led community at Steveston London Secondary
              School focused on exploring mental health, psychology,
              neuroscience, and the human experience. Through discussions,
              seminars, activities, and community initiatives, we aim to create
              a space where students can learn, connect, and have better
              conversations about mental health.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-serif text-2xl text-navy">Why we exist</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-ink/70 leading-relaxed">
              Mental health is something everyone experiences, yet it’s still
              often difficult to talk about. We exist to make those
              conversations easier—creating a space where students can explore
              mental health, understand themselves and others, and feel less
              alone.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-serif text-2xl text-navy">What members get</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-ink/70 leading-relaxed">
              A better working knowledge of psychology and mental health, a
              space to ask questions without judgment, and practice
              discussing sensitive topics with care. Some members join out of
              academic interest, some out of personal curiosity, and some
              because they're considering psychology or a related field down
              the line — all of that is welcome.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-serif text-2xl text-navy">Our approach</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-ink/70 leading-relaxed">
              We make mental health approachable through relatable topics, open
              conversations, and real-world experiences, creating a space where
              students can learn, reflect, and connect.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <SectionHeading
            kicker="Executive team"
            title="Our team"
          />
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
            {team.map((member) => (
              <div key={member.role} className="border-t border-hairline pt-4">
                <p className="font-serif text-lg text-navy">{member.name}</p>
                <p className="text-sm text-ink/60 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
