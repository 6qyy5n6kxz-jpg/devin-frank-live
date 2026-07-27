// Currently Working On - Items for homepage
// Edit this file to update what Devin is currently exploring and developing

const currentlyWorkingOn = [
  {
    id: "midi-controlled-rig",
    title: "Building a more automated MIDI-controlled live rig",
    description: "Exploring how MIDI controllers and foot switches can give me more dynamic control during performances without complicating the setup.",
    status: "in-progress",
    category: "Technical"
  },
  {
    id: "jamzone-evaluation",
    title: "Evaluating Jamzone for bass and drum backing tracks",
    description: "Testing whether Jamzone can provide a more comprehensive backing track solution than my current setup.",
    status: "in-progress",
    category: "Tools"
  },
  {
    id: "keyboard-sounds",
    title: "Improving keyboard sounds for different songs",
    description: "Refining the Numa X sound palettes and exploring custom settings that better match specific songs and venues.",
    status: "in-progress",
    category: "Sound"
  },
  {
    id: "midi-integration",
    title: "Integrating BeatBuddy, MIDI Captain, and OnSong",
    description: "Finding the optimal workflow for seamless integration between my drum machine, MIDI controller, and setlist app during live performances.",
    status: "in-progress",
    category: "Workflow"
  },
  {
    id: "quad-cortex-fit",
    title: "Testing where the Quad Cortex fits into the live setup",
    description: "Determining the best use cases for neural effects processing in my performances and whether it genuinely adds value.",
    status: "in-progress",
    category: "Effects"
  },
  {
    id: "setup-streamline",
    title: "Streamlining setup and teardown for solo performances",
    description: "Developing faster, more efficient procedures for getting ready to perform and breaking down after gigs without sacrificing quality.",
    status: "in-progress",
    category: "Efficiency"
  }
];

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = currentlyWorkingOn;
}
