import { LockKeyhole } from "lucide-react";
import type { DemoTrack } from "@/data/demo-catalog";
import { Artwork } from "@/components/ui/artwork";

type TrackRowProps = {
  track: DemoTrack;
  index?: number;
};

export function TrackRow({ track, index }: TrackRowProps) {
  return (
    <div className="track-row">
      {typeof index === "number" ? <span className="track-index">{String(index + 1).padStart(2, "0")}</span> : null}
      <Artwork variant={track.artwork} label={"Original abstract art for sample track " + track.title} className="track-row-art" />
      <div className="track-row-copy">
        <strong>{track.title}</strong>
        <span>{track.artist} · {track.collection}</span>
      </div>
      <span className="track-row-duration">{track.duration}</span>
      <span className="track-row-preview" title="Playback is not available in Phase 1">
        <LockKeyhole size={14} aria-hidden="true" />
        <span>Preview</span>
      </span>
    </div>
  );
}
