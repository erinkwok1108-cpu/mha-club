import Button from "../../components/Button";
import { MEETING_INFO, CONTACT, CLUB_NAME } from "../../data/config";

export const metadata = {
  title: `Join — ${CLUB_NAME}`,
};

export default function JoinPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-24 md:pb-32">
      <p className="text-sm mb-3" style={{ color: "#8C7A54" }}>
        Join
      </p>
      <h1 className="font-serif text-4xl md:text-6xl text-navy leading-tight max-w-2xl">
        No experience required. Just show up.
      </h1>
      <p className="mt-6 text-ink/70 max-w-xl leading-relaxed">
        Membership is open to all students. You don't need any
        background in psychology — just an interest in understanding people
        a little better.
      </p>

      <div className="mt-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <h2 className="font-serif text-2xl text-navy mb-6">
            Meeting details
          </h2>
          <dl className="space-y-4 text-ink/80">
            <div className="flex justify-between border-b border-hairline pb-3">
              <dt className="text-ink/50">Day</dt>
              <dd>{MEETING_INFO.day}</dd>
            </div>
            <div className="flex justify-between border-b border-hairline pb-3">
              <dt className="text-ink/50">Time</dt>
              <dd>{MEETING_INFO.time}</dd>
            </div>
            <div className="flex justify-between border-b border-hairline pb-3">
              <dt className="text-ink/50">Room</dt>
              <dd>{MEETING_INFO.room}</dd>
            </div>
            <div className="flex justify-between border-b border-hairline pb-3">
              <dt className="text-ink/50">Frequency</dt>
              <dd>{MEETING_INFO.frequency}</dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <h2 className="font-serif text-2xl text-navy mb-6">Sign up</h2>
          <p className="text-ink/70 leading-relaxed mb-8">
            Fill out our short interest form and we'll add you to our
            announcement list. You can also just come to a meeting directly —
            the form isn't required to attend.
          </p>
          <Button href={CONTACT.googleFormUrl}>Fill out the interest form</Button>

          <div className="mt-14 pt-8 border-t border-hairline">
            <h3 className="font-serif text-xl text-navy mb-4">Questions?</h3>
            <p className="text-ink/70 leading-relaxed">
              Reach out anytime — {CONTACT.email} or {CONTACT.instagram}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
