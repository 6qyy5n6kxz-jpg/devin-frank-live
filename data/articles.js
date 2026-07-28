// Field Notes articles metadata
// Each article has a corresponding HTML file in /field-notes/ directory
// Format: /field-notes/{slug}.html

const articles = [
  {
    id: "building-practical-solo-rig",
    slug: "building-practical-solo-rig",
    title: "Building a Practical Solo Musician Rig Without Carrying Too Much Gear",
    excerpt: "How to balance sound quality, functionality, and portability when you're playing restaurants, weddings, churches, and private events. Real-world constraints and actual setup choices.",
    description: "A guide to building a live rig that works for solo performances without excessive gear. Practical insights on keyboards, sound reinforcement, mixing, and portability.",
    category: "Live Performance",
    subcategories: ["Gear Setup", "Solo Performer", "Sound and Production"],
    featured_image: "/images/placeholder-article-featured.svg",
    featured_image_alt: "Devin's live performance rig setup",
    author: "Devin Frank",
    publication_date: "2025-01-15",
    updated_date: null,
    reading_time: 8,
    keywords: ["solo musician", "live rig", "portable gear", "sound setup", "performance"],
    related_gear: ["numa-x-piano-73", "allen-heath-cq-20b", "ev-evolve-50m"],
    related_articles: ["why-i-chose-numa-x-piano"],
    preview_html: "/field-notes/building-practical-solo-rig.html"
  },
  {
    id: "why-i-chose-numa-x-piano",
    slug: "why-i-chose-numa-x-piano",
    title: "Why I Chose the Studiologic Numa X Piano 73 for Live Performances",
    excerpt: "After years of experimenting with different keyboards, here's why the Numa X became my primary instrument for live gigs—and what it does well, plus what it doesn't.",
    description: "A working musician's perspective on choosing the Studiologic Numa X Piano 73. Real-world use in restaurants, churches, and private events. What works, what's tricky, and why I chose this keyboard.",
    category: "Gear Reviews",
    subcategories: ["Keyboards", "Live Performance", "Solo Performer"],
    featured_image: "/images/placeholder-article-featured.svg",
    featured_image_alt: "Studiologic Numa X Piano 73 keyboard",
    author: "Devin Frank",
    publication_date: "2025-01-22",
    updated_date: null,
    reading_time: 10,
    keywords: ["Numa X", "keyboard", "piano", "live performance", "gear review"],
    related_gear: ["numa-x-piano-73"],
    related_articles: ["building-practical-solo-rig"],
    preview_html: "/field-notes/why-i-chose-numa-x-piano.html"
  },
  {
    id: "every-show-should-feel-different",
    slug: "every-show-should-feel-different",
    title: "Every Show Should Feel Different",
    excerpt: "Why I refuse to play the same show twice—and why the best setlist is the one built for the room in front of you.",
    description: "Why no two live shows should feel exactly the same, and how changing songs, arrangements, pacing, and energy creates a better experience for every room.",
    category: "Live Performance",
    subcategories: ["Gig Tips", "Setlists", "Reading the Room"],
    featured_image: "/images/placeholder-article-featured.svg",
    featured_image_alt: "Devin Frank performing live for an audience",
    author: "Devin Frank",
    publication_date: "2026-07-28",
    updated_date: null,
    reading_time: 4,
    keywords: [
      "live performance",
      "setlists",
      "working musician",
      "reading the room",
      "cover musician",
      "live music"
    ],
    related_gear: [],
    related_articles: [],
    preview_html: "/field-notes/every-show-should-feel-different.html"
  }
];

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = articles;
}
