export type ArtworkVariant = "moss" | "dusk" | "orbit" | "ember" | "glass";

export type DemoTrack = {
  id: string;
  title: string;
  artist: string;
  collection: string;
  mood: string;
  duration: string;
  artwork: ArtworkVariant;
};

// Fictional sample metadata for the Phase 1 interface only. No audio is attached.
export const demoTracks: readonly DemoTrack[] = [
  {
    id: "glass-gardens",
    title: "Glass Gardens",
    artist: "The Solstice",
    collection: "Quiet Hours",
    mood: "After dark",
    duration: "04:18",
    artwork: "moss",
  },
  {
    id: "blue-hour",
    title: "Blue Hour, Again",
    artist: "Mira Vale",
    collection: "Small Constellations",
    mood: "Dream pop",
    duration: "03:46",
    artwork: "dusk",
  },
  {
    id: "soft-static",
    title: "Soft Static",
    artist: "North Window",
    collection: "Rooms We Keep",
    mood: "Ambient",
    duration: "05:02",
    artwork: "orbit",
  },
  {
    id: "paper-moons",
    title: "Paper Moons",
    artist: "Juniper Radio",
    collection: "Almost Home",
    mood: "Indie",
    duration: "03:29",
    artwork: "ember",
  },
  {
    id: "slow-current",
    title: "Slow Current",
    artist: "Cedar & Sea",
    collection: "Low Tide",
    mood: "Downtempo",
    duration: "04:41",
    artwork: "glass",
  },
];
