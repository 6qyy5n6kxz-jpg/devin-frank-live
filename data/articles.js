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
    featured_image: "/images/placeholder-article-featured.jpg",
    featured_image_alt: "Devin's live performance rig setup",
    author: "Devin Frank",
    publication_date: "2025-01-15",
    updated_date: null,
    reading_time: 8,
    keywords: ["solo musician", "live rig", "portable gear", "sound setup", "performance"],
    related_gear: ["numa-x-piano-73", "allen-heath-cq-20b", "ev-evolve-50m"],
    related_articles: ["why-i-chose-numa-x-piano", "restaurant-gigs-taught-volume"],
    preview_html: "field-notes/building-practical-solo-rig.html"
  },
  {
    id: "why-i-chose-numa-x-piano",
    slug: "why-i-chose-numa-x-piano",
    title: "Why I Chose the Studiologic Numa X Piano 73 for Live Performances",
    excerpt: "After years of experimenting with different keyboards, here's why the Numa X became my primary instrument for live gigs—and what it does well, plus what it doesn't.",
    description: "A working musician's perspective on choosing the Studiologic Numa X Piano 73. Real-world use in restaurants, churches, and private events. What works, what's tricky, and why I chose this keyboard.",
    category: "Gear Reviews",
    subcategories: ["Keyboards", "Live Performance", "Solo Performer"],
    featured_image: "/images/placeholder-article-featured.jpg",
    featured_image_alt: "Studiologic Numa X Piano 73 keyboard",
    author: "Devin Frank",
    publication_date: "2025-01-22",
    updated_date: null,
    reading_time: 10,
    keywords: ["Numa X", "keyboard", "piano", "live performance", "gear review"],
    related_gear: ["numa-x-piano-73"],
    related_articles: ["building-practical-solo-rig"],
    preview_html: "field-notes/why-i-chose-numa-x-piano.html"
  },
  {
    id: "restaurant-gigs-taught-volume",
    slug: "restaurant-gigs-taught-volume",
    title: "What Restaurant Gigs Have Taught Me About Volume, Song Choice, and Reading the Room",
    excerpt: "After dozens of restaurant and winery performances, here's what I've learned about matching music to the room, managing volume, and knowing when to play versus when to sit back.",
    description: "Practical lessons from a year of restaurant and winery performances. How to read the room, manage volume without losing clarity, choose the right songs, and adapt your approach throughout the night.",
    category: "Gig Tips",
    subcategories: ["Live Performance", "Restaurants and Wineries", "Behind the Scenes"],
    featured_image: "/images/placeholder-article-featured.jpg",
    featured_image_alt: "Restaurant dining room with live music",
    author: "Devin Frank",
    publication_date: "2025-01-29",
    updated_date: null,
    reading_time: 7,
    keywords: ["restaurant gigs", "volume management", "song selection", "reading the room", "venue performance"],
    related_gear: [],
    related_articles: ["building-practical-solo-rig"],
    preview_html: "field-notes/restaurant-gigs-taught-volume.html"
  }
];

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = articles;
}
