// Field Notes articles metadata
// Each article has a corresponding HTML file in /field-notes/ directory
// Format: /field-notes/{slug}.html

const articles = [
  {
    id: "your-setlist-shouldnt-survive-the-audience",
    slug: "your-setlist-shouldnt-survive-the-audience",
    title: "Your Setlist Shouldn't Survive the Audience",
    excerpt: "Why a setlist should be a starting point—not a script—and how requests, crowd reactions, repertoire depth, and a willingness to change direction can make every show feel different.",
    description: "Why the best live setlists change with the room. Devin Frank shares lessons on requests, reading the audience, building a flexible repertoire, and making every show worth coming back to.",
    category: "Live Performance",
    subcategories: ["Performing", "Audience Engagement", "Professional Development"],
    featured_image: "/images/articles/your-setlist-shouldnt-survive-the-audience.png",
    featured_image_alt: "Live performance with piano and audience interaction in an intimate venue.",
    author: "Devin Frank",
    publication_date: "2026-09-02",
    updated_date: null,
    reading_time: 8,
    keywords: [
      "live music",
      "setlist",
      "performing",
      "audience engagement",
      "repertoire",
      "song requests",
      "reading the room",
      "live performance",
      "cover songs",
      "professional musician",
      "flexible setlist",
      "audience interaction"
    ],
    related_gear: [],
    related_articles: [],
    preview_html: "/field-notes/your-setlist-shouldnt-survive-the-audience.html"
  },
  {
    id: "what-venues-actually-want",
    slug: "what-venues-actually-want",
    title: "What Venues Actually Want From Musicians",
    excerpt: "I've stood on both sides of the stage—as a musician, sound engineer, venue owner, and customer. Here's what every working musician should know about what venues actually want.",
    description: "After 15 years away from music and years working as a sound engineer and venue owner, I've gained a unique perspective on what venues really want from live musicians—and it's bigger than just playing the right notes.",
    category: "Live Performance",
    subcategories: ["Gig Tips", "Professional Development", "Music Business"],
    featured_image: "/images/articles/what-venues-actually-want-from-musicians.png",
    featured_image_alt: "Working musician setup with a microphone and keyboard in a warmly lit intimate venue.",
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
