// ── EDIT ME ──────────────────────────────────────────────────────────────
// Add, remove, or edit events here. Each event is one object in the array.
// `featured: true` on one event will pull it into the homepage and the top
// of the Events page. Dates and speakers below are placeholders — replace
// with real information once it's confirmed.

export const events = [
  {
    slug: "understanding-mac-miller",
    title:
      "Understanding Mac Miller: Mental Health, Addiction, Creativity, and Public Perception",
    date: "[DATE TBD]",
    category: "Seminar",
    speaker: "[Speaker TBD]",
    description:
      "A student-led discussion using Mac Miller's life and public career as a case study for talking about addiction, mental health, and the pressure of public perception. The session looks at how creative expression, struggle, and public narrative intersect — and what that can teach us about talking to each other more carefully.",
    featured: true,
  },
  {
    slug: "cognitive-biases-everyday-life",
    title: "Cognitive Biases in Everyday Decision-Making",
    date: "[DATE TBD]",
    category: "Discussion",
    speaker: null,
    description:
      "An open discussion on the mental shortcuts we all use — and misuse — every day, from confirmation bias to the sunk-cost fallacy, grounded in real examples from student life.",
    featured: false,
  },
  {
    slug: "stress-and-the-adolescent-brain",
    title: "Stress and the Adolescent Brain",
    date: "[DATE TBD]",
    category: "Seminar",
    speaker: "[Speaker TBD]",
    description:
      "A closer look at what's actually happening in the brain during periods of high stress, and why adolescence is a particularly sensitive window for it.",
    featured: false,
  },
];

export const featuredEvent = events.find((e) => e.featured) || events[0];
