# Devin Frank Live - Website

A production-ready static website for Devin Frank Live, featuring:
- **Live music booking**: Piano and acoustic guitar for weddings, restaurants, churches, and events across Northwest Ohio
- **Field Notes**: Practical, experience-based articles about live performance, gear, and music business
- **Gear directory**: Real-world documentation of equipment used in a working musician's setup

## Overview

- **Technology**: Plain HTML, CSS, and JavaScript (no framework)
- **Performance**: Fast, fully responsive, accessibility-focused
- **Hosting**: Designed for Cloudflare Pages (works anywhere)
- **Design**: Premium, warm aesthetic with dark charcoal base and gold accents
- **Content**: Data-driven architecture for articles, gear, and events

## Project Structure

```
devinfranklive/
├── index.html                           # Homepage (updated with Field Notes, Gear, newsletter)
├── about.html                           # About (working musician + content creator positioning)
├── hire-devin.html                      # Booking overview (formerly book.html)
├── gear.html                            # Gear directory with filtering
├── disclosures.html                     # Privacy, affiliate, editorial policies
│
├── field-notes/                         # Field Notes articles
│   ├── index.html                       # Archive page with search & filters
│   ├── feed.xml                         # RSS feed for articles
│   ├── building-practical-solo-rig.html       # Article: Solo rig setup
│   ├── why-i-chose-numa-x-piano.html         # Article: Keyboard review
│   └── restaurant-gigs-taught-volume.html    # Article: Volume lessons
│
├── restaurants-wineries.html            # Restaurants & wineries service page
├── weddings.html                        # Weddings service page
├── churches.html                        # Churches service page
├── festivals.html                       # Festivals & community events service page
├── songs.html                           # Searchable song list
├── shows.html                           # Upcoming events
├── contact.html                         # Contact form
├── 404.html                             # 404 error page
│
├── css/
│   └── styles.css                       # Main stylesheet
│
├── js/
│   ├── main.js                          # Core functionality (menu, forms, events, rendering)
│   └── songs.js                         # Song list rendering & filtering
│
├── data/
│   ├── articles.js                      # Field Notes metadata (EDIT THIS)
│   ├── gear.js                          # Gear directory data (EDIT THIS)
│   ├── currently-working-on.js          # Homepage "Currently Working On" items (EDIT THIS)
│   ├── songs.js                         # Song repertoire data (EDIT THIS)
│   └── events.js                        # Upcoming events data (EDIT THIS)
│
├── images/                              # Images folder (for real photos when added)
│
├── manifest.json                        # Web app manifest
├── robots.txt                           # SEO robots file
├── sitemap.xml                          # XML sitemap for search engines
├── llms.txt                             # LLM-readable brand info
├── humans.txt                           # Website credits
│
└── README.md                            # This file
```

## Quick Start

### Local Development

1. **Open any HTML file in a browser** – No build process needed. Just double-click `index.html` or drag it to your browser.

2. **Or use a local server** (recommended for testing):
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
   Then visit `http://localhost:8000`

### Live Preview
- All paths use relative URLs, so the site works anywhere
- Test on mobile with browser dev tools (F12 → toggle device toolbar)

## Editing the Site

### Field Notes (Articles)
Edit or add articles in `data/articles.js`:
```javascript
const articles = [
  {
    id: "building-practical-solo-rig",
    slug: "building-practical-solo-rig",
    title: "Building a Practical Solo Rig: From Simplest Setup to Recommended Configuration",
    excerpt: "Step-by-step guide to building a portable, reliable rig for solo performances.",
    description: "How to build a solo musician rig from basics to professional setup.",
    category: "Live Performance",
    subcategories: ["Solo Performer", "Equipment"],
    featured_image: "placeholder",
    author: "Devin Frank",
    publication_date: "2025-01-15",
    updated_date: "2025-01-15",
    reading_time: 8,
    keywords: ["rig", "setup", "portable", "mixer", "speakers"],
    related_gear: ["numa-x-piano-73", "allen-heath-cq-20b", "ev-evolve-50m"],
    related_articles: ["why-i-chose-numa-x-piano"],
    preview_html: "field-notes/building-practical-solo-rig.html"
  }
  // Add more articles here
];
```

**To add a new article**:
1. Create the HTML file in `field-notes/` folder with semantic markup and metadata
2. Add an entry to the `articles` array in `data/articles.js` with unique `id` and `slug`
3. Set `preview_html` to the file path
4. Update `sitemap.xml` with the new article URL
5. Update `field-notes/feed.xml` with RSS entry (optional, but recommended)

**Article structure**:
- Each article should have proper semantic HTML, meta tags, and Open Graph markup
- Include author byline, publication date, reading time
- Add related articles and gear references
- Include CTA section and newsletter signup
- Use proper heading hierarchy (h1, h2, h3)

### Gear Directory
Edit the gear in `data/gear.js`:
```javascript
const gear = [
  {
    id: "numa-x-piano-73",
    name: "Studiologic Numa X Piano 73",
    brand: "Studiologic",
    category: "Keyboard",  // Options: Keyboard, Mixer, Speaker, Guitar, Software, Effects & Controllers, Audio Tools, Monitor, Backing Tracks
    status: "current",     // Options: "current" or "evaluating"
    image: "placeholder",
    summary: "Professional 73-key weighted keyboard with excellent piano sounds and organ capabilities.",
    why_i_use_it: "Best-in-class piano sound, compact 73-key size, solid build quality, great connectivity.",
    best_use_case: "Primary instrument for solo piano-based performances.",
    what_i_like: "Piano quality, organ palette, portability, MIDI integration, feel",
    what_i_would_improve: "Lighter carrying case, more preset slots, direct USB audio",
    related_articles: ["why-i-chose-numa-x-piano", "building-practical-solo-rig"],
    manufacturer_url: "https://www.studiologic-music.com/",
    affiliate_url: null,       // Add URL if you have affiliate link
    affiliate_disclosure: false,
    sponsored: false
  }
  // Add more gear items here
];
```

**Categories**:
- Keyboard
- Mixer
- Speaker
- Guitar
- Software
- Effects & Controllers
- Audio Tools
- Monitor
- Backing Tracks

**Status options**: "current" (in active use) or "evaluating" (still testing)

### Currently Working On
Edit active projects in `data/currently-working-on.js`:
```javascript
const currentlyWorkingOn = [
  {
    id: 1,
    title: "Building MIDI-controlled live rig",
    description: "Integrating MIDI controllers for seamless switching between keyboard sounds and effects during performances.",
    status: "in-progress",
    category: "Equipment"
  }
  // Add or modify items here
];
```

This section displays on the homepage to show active exploration and development.

### Songs
Edit the song repertoire in `data/songs.js`:
```javascript
const songs = [
  {
    title: "Piano Man",
    artist: "Billy Joel",
    instruments: ["piano"],
    decade: "70s",
    tags: ["sing-along", "crowd-favorite"],
    status: "solo-ready"
  },
  // Add or modify songs here
];
```

**Fields**:
- `title` - Song name
- `artist` - Artist/composer
- `instruments` - Array of "piano" or "acoustic-guitar"
- `decade` - "50s", "60s", "70s", "80s", "90s", "2000s"
- `tags` - Array of categories (e.g., "ballad", "rock", "sing-along")
- `status` - "solo-ready", "in-development", or "available-by-arrangement"

### Events / Shows
Edit upcoming events in `data/events.js`:
```javascript
const events = [
  {
    date: "2024-06-15",           // YYYY-MM-DD format
    time: "19:00",                // HH:MM 24-hour format
    venue: "The Iron Tavern",
    city: "Findlay, OH",
    eventType: "Restaurant/Bar",
    isPublic: true,               // false to hide from public list
    description: "Live acoustic and piano",
    ticketsUrl: null,             // or "https://..."
    venueUrl: null                // or "https://..."
  }
];
```

**Rules**:
- Use ISO date format (YYYY-MM-DD)
- Set `isPublic: false` to hide private/tentative bookings
- Leave URLs as `null` if not applicable
- Events automatically sort by date on the Shows page

### Content & Pages
Edit HTML directly:
- **Homepage**: `index.html` – Update hero copy, sections, CTAs
- **About**: `about.html` – Add more personal info if desired
- **Service pages**: `restaurants-wineries.html`, `weddings.html`, `churches.html`, `festivals.html`
- **Contact form**: `contact.html` – Update form action if using different service

### Contact Form & Newsletter
Currently uses **Formspree** for form submission.

**To activate the contact form:**
1. Go to https://formspree.io
2. Create a new form with your email
3. Replace the `action` attribute in `contact.html`:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**To activate the newsletter:**
The newsletter signup uses the same Formspree setup, but you may want a dedicated email service:
- **Mailchimp**: Affordable, good for newsletters
- **ConvertKit**: Writer-focused, great for content creators
- **Substack**: Built for writers
- **Brevo** (formerly Sendinblue): All-in-one marketing

To connect to an email service:
1. Create account and form on chosen service
2. Update form `action` attribute in `index.html` (Follow the Journey section)
3. Add any required hidden fields or data attributes

Alternative services: Netlify Forms, Basin, or self-hosted solution.

### RSS Feed
Field Notes has an RSS feed at `/field-notes/feed.xml` for subscribers.

**To update the RSS feed**:
1. Edit `field-notes/feed.xml` manually when adding new articles
2. Add new `<item>` entries with:
   - Article `<title>`
   - Link to the HTML file
   - Publication date in RFC 2822 format
   - Article excerpt/description
   - Category tag

### Styling
All styles are in `css/styles.css`. Key variables at the top:
```css
:root {
  --color-bg-dark: #1a1a1a;       /* Dark charcoal */
  --color-accent-gold: #d4a574;   /* Warm gold */
  --color-text-primary: #f5f1ed;  /* Cream/warm white */
  /* ... more colors and spacing variables */
}
```

### Images & Placeholders
- Currently uses **CSS gradient placeholders** for photos (no stock images)
- Comments show where to add authentic performance photos later
- Relative paths used throughout (`/images/...`)

To add real images:
1. Save photos to `images/` folder
2. Update the placeholder divs with `<img>` tags
3. Or replace `.image-placeholder` divs with `<img>` elements

## Deployment

### Cloudflare Pages

1. **Push to GitHub** (or any Git provider):
   ```bash
   git init
   git add .
   git commit -m "Initial site build"
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Visit https://pages.cloudflare.com
   - Connect your GitHub account
   - Select the repository
   - Leave build settings empty (it's a static site)
   - Set deployment branch to `main`

3. **Custom Domain**:
   - Add `devinfranklive.com` in Cloudflare Pages settings
   - Update nameservers or add DNS records at your domain registrar

### Other Hosting Options

**Vercel**:
- Connect Git repo at https://vercel.com
- Zero config needed

**Netlify**:
- Connect Git repo at https://netlify.com
- Works with forms out of the box

**Traditional Hosting (Shared/VPS)**:
- Upload all files via FTP/SFTP
- No build step required
- Ensure `.html` files are served with correct content-type

**GitHub Pages**:
- Push to `gh-pages` branch
- Works immediately at `username.github.io` or custom domain

## Performance & Optimization

Current optimizations:
- ✅ No external dependencies or frameworks
- ✅ System fonts (fast, no requests)
- ✅ MinimalCSS with CSS custom properties
- ✅ No autoplay media
- ✅ Mobile-first responsive design
- ✅ Respects `prefers-reduced-motion`

**Lighthouse targets**:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## SEO & Metadata

- Unique title tags and meta descriptions on every page
- Canonical URLs pointing to `https://devinfranklive.com`
- Open Graph and Twitter metadata
- JSON-LD structured data (MusicGroup, BreadcrumbList, Events)
- Semantic HTML with proper heading hierarchy
- `robots.txt` and `sitemap.xml` for search engines

### Local Service Pages
Optimized for Northwest Ohio + Southeast Michigan searches:
- Restaurants & Wineries → Local venue focus
- Weddings → Local event planning
- Churches → Community faith presence
- Festivals → Local event marketing

## Accessibility

- WCAG AA contrast compliance
- Full keyboard navigation
- Visible focus indicators
- Skip-to-content link
- Proper form labels and validation
- Accessible mobile menu
- Minimal, semantic ARIA usage

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- No IE11 support (uses modern CSS features)

## Maintenance

### Regular Updates
- **Songs**: Add new tracks as learned
- **Events**: Add upcoming bookings, remove past dates
- **Content**: Update pricing, availability, special promotions
- **Meta tags**: Keep title/descriptions fresh and accurate

### Broken Links
Check monthly:
```bash
# Using a link checker tool
# Or manually review nav, CTAs, and footer links
```

### Analytics (Optional)
Add to any page `<head>` if desired (not included by default):
```html
<!-- Fathom Analytics (privacy-focused) -->
<script src="https://cdn.usefathom.com/script.js" data-site="YOUR_CODE" defer></script>
```

## File Sizes & Performance

| File | Size | Type |
|------|------|------|
| styles.css | ~18 KB | Stylesheet |
| main.js | ~8 KB | Interactivity |
| songs.js | ~4 KB | Song data |
| Index.html | ~12 KB | Homepage |
| Avg. page | ~25 KB | HTML + data |

**Total site**: ~150 KB (uncompressed). Highly cacheable.

## Troubleshooting

### Form not submitting
- Check Formspree form ID in `contact.html`
- Confirm email address is verified on Formspree
- Check browser console for errors

### Songs not showing
- Verify `data/songs.js` is loaded (check Network tab)
- Ensure JSON syntax is valid
- Songs require: title, artist, instruments, decade, tags, status

### Events not rendering
- Check `data/events.js` date format (YYYY-MM-DD)
- Ensure `isPublic: true` for events to show
- Check browser console for errors

### Mobile menu not working
- Verify `js/main.js` is loaded
- Check if menu-toggle button exists in header
- Look for JavaScript errors in console

### Styles not applying
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
- Check CSS file path is correct
- Verify no browser extensions are blocking styles

## Future Enhancements

Possible additions (not in initial version):
- Blog/News section
- Video gallery
- Client testimonials (with real client permission)
- Email newsletter signup
- Social media integration (with real profiles)
- Online payment for deposits
- Venue directory
- Multi-page photo gallery (when images available)

## Support & Questions

**For help with the website:**
- Edit content in `data/songs.js` or `data/events.js`
- Update HTML files directly
- Check this README for common answers

**For hosting/deployment questions:**
- Cloudflare Pages docs: https://developers.cloudflare.com/pages/
- Vercel docs: https://vercel.com/docs
- General web dev: MDN Web Docs

## License & Credits

- Built as a static website (no CMS or database)
- All original content © 2024 Devin Frank Live
- Parent company: Frank Creations LLC
- Designed for long-term maintainability and performance

---

**Ready to go live?** Push to GitHub, connect to Cloudflare Pages, and you're live in minutes.

**Questions?** Contact mockingbirddevin@gmail.com
