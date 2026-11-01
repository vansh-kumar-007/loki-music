"use client";

import {
  ListMusic,
  LockKeyhole,
  Play,
  Repeat2,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import { Artwork } from "@/components/ui/artwork";
import { useUiStore } from "@/store/ui-store";

const unavailable = "Playback is unavailable until a licensed provider is integrated.";

export function PlayerDock() {
  const volume = 65;
  const queueOpen = useUiStore((state) => state.queueOpen);
  const setQueueOpen = useUiStore((state) => state.setQueueOpen);

  return (
    <section className="player-dock" aria-label="Music player preview">
      <div className="player-track">
        <Artwork variant="moss" label="Original sample artwork for Glass Gardens" className="player-artwork" />
        <div className="player-track-copy">
          <strong>Glass Gardens</strong>
          <span>The Solstice · sample track</span>
        </div>
        <span className="player-sample-mark"><LockKeyhole size={12} /> No audio</span>
      </div>

      <div className="player-center">
        <div className="player-controls">
          <button className="player-control player-control--minor" type="button" disabled aria-label={unavailable} title={unavailable}>
            <Shuffle size={16} aria-hidden="true" />
          </button>
          <button className="player-control" type="button" disabled aria-label={unavailable} title={unavailable}>
            <SkipBack size={18} aria-hidden="true" />
          </button>
          <button className="player-play" type="button" disabled aria-label={unavailable} title={unavailable}>
            <Play size={15} fill="currentColor" aria-hidden="true" />
          </button>
          <button className="player-control" type="button" disabled aria-label={unavailable} title={unavailable}>
            <SkipForward size={18} aria-hidden="true" />
          </button>
          <button className="player-control player-control--minor" type="button" disabled aria-label={unavailable} title={unavailable}>
            <Repeat2 size={16} aria-hidden="true" />
          </button>
        </div>
        <div className="player-progress">
          <span>—:—</span>
          <div className="player-progress-track" aria-hidden="true"><span /></div>
          <span>—:—</span>
        </div>
      </div>

      <div className="player-trailing">
        <div className="player-volume">
          <Volume2 size={17} aria-hidden="true" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            disabled
            aria-label="Volume unavailable until playback is integrated"
          />
        </div>
        <button
          className={"queue-toggle" + (queueOpen ? " queue-toggle--active" : "")}
          type="button"
          onClick={() => setQueueOpen(!queueOpen)}
          aria-expanded={queueOpen}
          aria-controls="queue-panel"
          aria-label={queueOpen ? "Close queue" : "Open queue"}
        >
          <ListMusic size={18} aria-hidden="true" />
          <span>Queue</span>
        </button>
      </div>
      <span className="sr-only" id="player-unavailable-note">{unavailable}</span>
    </section>
  );
}
