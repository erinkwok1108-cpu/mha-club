import Link from "next/link";
import { CLUB_NAME, SCHOOL_NAME, SCHOOL_LOCATION, CONTACT } from "../data/config";

export default function Footer() {
  return (
    <footer className="border-t border-hairline mt-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg text-navy leading-snug max-w-xs">
            {CLUB_NAME}
          </p>
          <p className="text-sm text-ink/60 mt-3 max-w-xs">
            {SCHOOL_NAME}, {SCHOOL_LOCATION}
          </p>
        </div>

        <div className="text-sm">
          <p className="text-ink/50 mb-3">Site</p>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-navy text-ink/80">About</Link></li>
            <li><Link href="/events" className="hover:text-navy text-ink/80">Events</Link></li>
            <li><Link href="/resources" className="hover:text-navy text-ink/80">Resources</Link></li>
            <li><Link href="/join" className="hover:text-navy text-ink/80">Join</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="text-ink/50 mb-3">Contact</p>
          <ul className="space-y-2 text-ink/80">
            <li>{CONTACT.email}</li>
            <li>{CONTACT.instagram}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 text-xs text-ink/50">
          This club provides education and discussion, not therapy, diagnosis, or
          professional mental-health treatment. If you or someone you know is in
          crisis, please see the resources listed on our{" "}
          <Link href="/resources" className="underline hover:text-navy">
            Resources
          </Link>{" "}
          page.
        </div>
      </div>
    </footer>
  );
}
