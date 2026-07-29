// Field Notes articles metadata
// Each article has a corresponding HTML file in /field-notes/ directory
// Format: /field-notes/{slug}.html

const articles = [
  {
    id: "what-venues-actually-want",
    slug: "what-venues-actually-want",
    title: "What Venues Actually Want From Musicians",
    excerpt: "I've stood on both sides of the stage—as a musician, sound engineer, venue owner, and customer. Here's what every working musician should know about what venues actually want.",
    description: "After 15 years away from music and years working as a sound engineer and venue owner, I've gained a unique perspective on what venues really want from live musicians—and it's bigger than just playing the right notes.",
    category: "Live Performance",
    subcategories: ["Gig Tips", "Professional Development", "Music Business"],
    featured_image: "/images/placeholder-article-featured.svg",
    featured_image_alt: "Musician performing live at a venue",
    author: "Devin Frank",
    publication_date: "2026-07-29",
    updated_date: null,
    reading_time: 7,
    keywords: [
      "live music",
      "venues",
      "musicians",
      "booking",
      "performing",
      "live performance",
      "professional musician",
      "restaurant music",
      "wedding music",
      "event entertainment",
      "getting booked",
      "live music tips"
    ],
    related_gear: [],
    related_articles: [],
    preview_html: "/field-notes/what-venues-actually-want.html"
  }
];

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = articles;
}
