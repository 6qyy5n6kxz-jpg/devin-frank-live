// Song repertoire data for Devin Frank Live
// Edit this file to add, remove, or update songs

const songs = [
  {
    title: "Piano Man",
    artist: "Billy Joel",
    instruments: ["piano"],
    decade: "70s",
    tags: ["sing-along", "crowd-favorite"],
    status: "solo-ready"
  },
  {
    title: "Imagine",
    artist: "John Lennon",
    instruments: ["piano"],
    decade: "70s",
    tags: ["ballad", "memorable"],
    status: "solo-ready"
  },
  {
    title: "Hey Jude",
    artist: "The Beatles",
    instruments: ["piano", "acoustic-guitar"],
    decade: "60s",
    tags: ["sing-along", "rock"],
    status: "solo-ready"
  },
  {
    title: "Fast Car",
    artist: "Tracy Chapman",
    instruments: ["acoustic-guitar"],
    decade: "80s",
    tags: ["ballad", "story-song"],
    status: "solo-ready"
  },
  {
    title: "Hotel California",
    artist: "Eagles",
    instruments: ["acoustic-guitar"],
    decade: "70s",
    tags: ["rock", "classic"],
    status: "solo-ready"
  },
  {
    title: "Country Roads",
    artist: "John Denver",
    instruments: ["acoustic-guitar"],
    decade: "70s",
    tags: ["country", "sing-along"],
    status: "solo-ready"
  },
  {
    title: "Ain't No Sunshine",
    artist: "Bill Withers",
    instruments: ["piano"],
    decade: "70s",
    tags: ["soul", "ballad"],
    status: "solo-ready"
  },
  {
    title: "Cover Me Up",
    artist: "Jason Isbell",
    instruments: ["acoustic-guitar"],
    decade: "2000s",
    tags: ["country", "ballad"],
    status: "solo-ready"
  },
  {
    title: "The House That Built Me",
    artist: "Miranda Lambert",
    instruments: ["piano", "acoustic-guitar"],
    decade: "2000s",
    tags: ["country", "ballad"],
    status: "solo-ready"
  },
  {
    title: "Come Together",
    artist: "The Beatles",
    instruments: ["piano"],
    decade: "60s",
    tags: ["rock", "classic"],
    status: "solo-ready"
  },
  {
    title: "Complicated",
    artist: "Avril Lavigne",
    instruments: ["acoustic-guitar"],
    decade: "2000s",
    tags: ["pop", "rock"],
    status: "solo-ready"
  },
  {
    title: "What's Up",
    artist: "4 Non Blondes",
    instruments: ["acoustic-guitar"],
    decade: "90s",
    tags: ["rock", "sing-along"],
    status: "solo-ready"
  },
  {
    title: "Maneater",
    artist: "Hall & Oates",
    instruments: ["piano"],
    decade: "80s",
    tags: ["pop", "rock"],
    status: "solo-ready"
  },
  {
    title: "3 AM",
    artist: "Matchbox Twenty",
    instruments: ["acoustic-guitar"],
    decade: "90s",
    tags: ["rock", "pop"],
    status: "solo-ready"
  },
  {
    title: "Zombie",
    artist: "The Cranberries",
    instruments: ["acoustic-guitar"],
    decade: "90s",
    tags: ["rock", "alternative"],
    status: "solo-ready"
  },
  {
    title: "Drive",
    artist: "Incubus",
    instruments: ["acoustic-guitar"],
    decade: "90s",
    tags: ["rock", "alternative"],
    status: "solo-ready"
  },
  {
    title: "Hang On Sloopy",
    artist: "The McCoys",
    instruments: ["piano", "acoustic-guitar"],
    decade: "60s",
    tags: ["rock", "sing-along", "local-favorite"],
    status: "solo-ready"
  },
  {
    title: "I Won't Back Down",
    artist: "Tom Petty",
    instruments: ["acoustic-guitar"],
    decade: "80s",
    tags: ["rock", "classic"],
    status: "solo-ready"
  },
  {
    title: "Walking in Memphis",
    artist: "Marc Cohn",
    instruments: ["piano", "acoustic-guitar"],
    decade: "90s",
    tags: ["pop", "rock", "story-song"],
    status: "solo-ready"
  },
  {
    title: "Chicken Fried",
    artist: "Zac Brown Band",
    instruments: ["acoustic-guitar"],
    decade: "2000s",
    tags: ["country", "sing-along"],
    status: "solo-ready"
  },
  {
    title: "9 to 5",
    artist: "Dolly Parton",
    instruments: ["piano", "acoustic-guitar"],
    decade: "80s",
    tags: ["country", "pop", "sing-along"],
    status: "solo-ready"
  },
  {
    title: "Jolene",
    artist: "Dolly Parton",
    instruments: ["piano", "acoustic-guitar"],
    decade: "70s",
    tags: ["country", "ballad", "classic"],
    status: "solo-ready"
  },
  {
    title: "No Rain",
    artist: "Blind Melon",
    instruments: ["acoustic-guitar"],
    decade: "90s",
    tags: ["rock", "alternative"],
    status: "solo-ready"
  },
  {
    title: "Ironic",
    artist: "Alanis Morissette",
    instruments: ["piano"],
    decade: "90s",
    tags: ["pop", "rock"],
    status: "solo-ready"
  },
  {
    title: "Turn the Page",
    artist: "Bob Seger",
    instruments: ["acoustic-guitar"],
    decade: "70s",
    tags: ["rock", "classic"],
    status: "solo-ready"
  },
  {
    title: "Folsom Prison Blues",
    artist: "Johnny Cash",
    instruments: ["acoustic-guitar"],
    decade: "50s",
    tags: ["country", "classic"],
    status: "solo-ready"
  },
  {
    title: "Ring of Fire",
    artist: "Johnny Cash",
    instruments: ["piano"],
    decade: "60s",
    tags: ["country", "classic", "sing-along"],
    status: "solo-ready"
  },
  {
    title: "Margaritaville",
    artist: "Jimmy Buffett",
    instruments: ["acoustic-guitar"],
    decade: "70s",
    tags: ["pop", "sing-along"],
    status: "solo-ready"
  },
  {
    title: "I Will Survive",
    artist: "Gloria Gaynor",
    instruments: ["piano"],
    decade: "70s",
    tags: ["soul", "disco", "empowerment"],
    status: "solo-ready"
  },
  {
    title: "Wagon Wheel",
    artist: "Old Crow Medicine Show",
    instruments: ["acoustic-guitar"],
    decade: "2000s",
    tags: ["country", "folk", "sing-along"],
    status: "solo-ready"
  },
  {
    title: "Proud Mary",
    artist: "Creedence Clearwater Revival",
    instruments: ["piano"],
    decade: "60s",
    tags: ["rock", "soul", "sing-along"],
    status: "solo-ready"
  },
  {
    title: "Don't Stop Believin'",
    artist: "Journey",
    instruments: ["piano"],
    decade: "80s",
    tags: ["rock", "sing-along", "classic"],
    status: "solo-ready"
  }
];

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = songs;
}
