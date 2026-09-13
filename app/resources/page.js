import SectionHeading from "../../components/SectionHeading";
import { resourceCategories } from "../../data/resources";
import { CLUB_NAME } from "../../data/config";

export const metadata = {
  title: `Resources — ${CLUB_NAME}`,
};

export default function ResourcesPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20">
        <p className="text-sm mb-3" style={{ color: "#8C7A54" }}>
          Resources
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-navy leading-tight max-w-3xl">
          Resources
        </h1>
        <p className="mt-6 text-ink/70 max-w-xl leading-relaxed">
          Every item here has been read, watched, or reviewed by a member
          before it's added. We'll keep expanding this over time.
        </p>
      </section>

      <section className="border-t border-hairline bg-navy text-paper">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 md:py-10">
          <p className="text-sm text-paper/80 leading-relaxed max-w-3xl">
            These resources are for education and discussion. They are not a
            substitute for professional medical or mental-health care. If you
            need immediate support, see the Crisis &amp; Support section below.
          </p>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 space-y-20">
          {resourceCategories.map((cat) => (
            <div key={cat.category}>
              <SectionHeading title={cat.category} />
              <div className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-8">
                {cat.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    className="block border-t border-hairline pt-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="flex items-baseline justify-between gap-4 text-sm text-ink/50">
                      <span>{item.type}</span>
                    </div>
                    <p className="font-serif text-lg text-navy mt-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-ink/60 mt-1">{item.author}</p>
                    <p className="text-ink/70 mt-2 leading-relaxed">
                      {item.note}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
