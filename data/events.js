const events = [
  {
    date: "2026-08-27",
    time: "1:30 PM - 3:00 PM",
    venue: "Sandusky County Fair — Log Cabin",
    city: "Fremont, Ohio",
    eventType: "community",
    performer: "A Change of Plans",
    isPublic: true,
    description:
      "Join A Change of Plans at the Log Cabin for a special afternoon celebrating the legendary women of country music, along with familiar favorites from the 1950s through the 1980s. This performance is included with paid admission to the Sandusky County Fair.",
    ticketsUrl: "",
    venueUrl: ""
  },
  {
    date: "2026-09-04",
    time: "7:00 PM - 9:00 PM",
    venue: "Perfect Imperfections Boutique & Design",
    city: "Oak Harbor, Ohio",
    eventType: "venue",
    performer: "A Change of Plans",
    isPublic: true,
    description:
      "Join A Change of Plans for an intimate evening of live music at Perfect Imperfections Boutique & Design in Oak Harbor. Enjoy a mix of classic rock, country, pop, and timeless favorites while supporting a wonderful local small business.",
    ticketsUrl: "",
    venueUrl: ""
  },
  {
    date: "2026-09-06",
    time: "9:00 AM - 10:30 AM",
    venue: "S.C.R.A.P. Fest 2026",
    city: "Gibsonburg, Ohio",
    eventType: "community",
    performer: "A Change of Plans",
    isPublic: true,
    description:
      "Join A Change of Plans Sunday morning at S.C.R.A.P. Fest at White Star Park in Gibsonburg. We'll begin with approximately 30 minutes of worship music, followed by a one-hour set featuring our usual mix of country, classic rock, pop, oldies, and acoustic favorites.",
    ticketsUrl: "",
    venueUrl: ""
  },
  {
    date: "2026-09-13",
    time: "11:00 AM",
    venue: "Mockingbird Jam to Defeat ALS",
    city: "Graytown, Ohio",
    eventType: "community",
    performer: "A Change of Plans",
    isPublic: true,
    description:
      "Join A Change of Plans at The Mockingbird for the 2026 Mockingbird Jam to Defeat ALS. Spend the day enjoying live music from local musicians while supporting a great cause.",
    ticketsUrl: "",
    venueUrl: ""
  },
  {
    date: "2026-09-18",
    time: "6:00 PM - 9:00 PM",
    venue: "Oak Harbor Golf Club",
    city: "Oak Harbor, Ohio",
    eventType: "venue",
    performer: "A Change of Plans",
    isPublic: true,
    description:
      "Join A Change of Plans for an evening of live music at Oak Harbor Golf Club featuring a mix of country, classic rock, pop, oldies, and familiar favorites.",
    ticketsUrl: "",
    venueUrl: ""
  },
  {
    date: "2026-09-27",
    time: "10:00 AM",
    venue: "St. John's UCC",
    city: "Elmore, Ohio",
    eventType: "church",
    performer: "A Change of Plans",
    isPublic: true,
    description:
      "A Change of Plans will provide special music during Sunday worship at St. John's United Church of Christ in Elmore.",
    ticketsUrl: "",
    venueUrl: ""
  },
  {
    date: "2026-10-25",
    time: "10:30 AM",
    venue: "Elmore Church of God",
    city: "Elmore, Ohio",
    eventType: "church",
    performer: "A Change of Plans",
    isPublic: true,
    description:
      "A Change of Plans will provide special music during Sunday worship at Elmore Church of God.",
    ticketsUrl: "",
    venueUrl: ""
  },
  {
    date: "2026-10-31",
    time: "6:00 PM - 9:00 PM",
    venue: "The Mockingbird",
    city: "Graytown, Ohio",
    eventType: "venue",
    performer: "A Change of Plans",
    isPublic: true,
    description:
      "Spend Halloween evening with A Change of Plans at The Mockingbird for live music, food, drinks, and a mix of country, classic rock, pop, oldies, and familiar favorites.",
    ticketsUrl: "",
    venueUrl: ""
  },
  {
    date: "2026-11-22",
    time: "10:30 AM",
    venue: "Elmore Church of God",
    city: "Elmore, Ohio",
    eventType: "church",
    performer: "A Change of Plans",
    isPublic: true,
    description:
      "A Change of Plans will provide special music during Sunday worship at Elmore Church of God.",
    ticketsUrl: "",
    venueUrl: ""
  },
  {
    date: "2026-11-25",
    time: "6:00 PM - 9:00 PM",
    venue: "Thanksgiving Eve at The Mockingbird",
    city: "Graytown, Ohio",
    eventType: "venue",
    performer: "A Change of Plans",
    isPublic: true,
    description:
      "Kick off Thanksgiving weekend with A Change of Plans at The Mockingbird. Join us for an evening of live music, food, drinks, and familiar favorites from across the decades.",
    ticketsUrl: "",
    venueUrl: ""
  },
  {
    date: "2026-11-27",
    time: "7:00 PM - 9:00 PM",
    venue: "Perfect Imperfections Boutique & Design",
    city: "Oak Harbor, Ohio",
    eventType: "venue",
    performer: "A Change of Plans",
    isPublic: true,
    description:
      "Join A Change of Plans for an intimate evening of live music at Perfect Imperfections Boutique & Design in Oak Harbor. Enjoy a mix of classic rock, country, pop, and timeless favorites while supporting a wonderful local small business.",
    ticketsUrl: "",
    venueUrl: ""
  },
  {
    date: "2026-12-18",
    time: "7:00 PM - 9:00 PM",
    venue: "Perfect Imperfections Boutique & Design",
    city: "Oak Harbor, Ohio",
    eventType: "venue",
    performer: "A Change of Plans",
    isPublic: true,
    description:
      "Join A Change of Plans for a December evening of live music at Perfect Imperfections Boutique & Design in Oak Harbor, featuring a mix of classic rock, country, pop, timeless favorites, and a little holiday spirit.",
    ticketsUrl: "",
    venueUrl: ""
  },
  {
    date: "2026-12-26",
    time: "6:00 PM - 9:00 PM",
    venue: "The Mockingbird",
    city: "Graytown, Ohio",
    eventType: "venue",
    performer: "A Change of Plans",
    isPublic: true,
    description:
      "Keep the holiday weekend going with A Change of Plans at The Mockingbird. Join us for live music, food, drinks, and a relaxed evening of favorites from across the decades.",
    ticketsUrl: "",
    venueUrl: ""
  },
  {
    date: "2026-12-27",
    time: "10:30 AM",
    venue: "Elmore Church of God",
    city: "Elmore, Ohio",
    eventType: "church",
    performer: "A Change of Plans",
    isPublic: true,
    description:
      "A Change of Plans will provide special music during Sunday worship at Elmore Church of God.",
    ticketsUrl: "",
    venueUrl: ""
  }
];
if (typeof module !== 'undefined' && module.exports) {
  module.exports = events;
}
