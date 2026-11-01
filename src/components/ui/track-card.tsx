import { LockKeyhole } from "lucide-react";
import type { DemoTrack } from "@/data/demo-catalog";
import { Artwork } from "@/components/ui/artwork";
import { DemoBadge } from "@/components/ui/demo-badge";

type TrackCardProps = {
  track: DemoTrack;
};

export function TrackCard({ track }: TrackCardProps) {
  return (
    <article className="track-card">
      <div className="track-card-art-wrap">
        <Artwork variant={track.artwork} label={"Original abstract art for sample track " + track.title} />
        <span className="track-card-play" aria-hidden="true">
          <LockKeyhole size={17} />
        </span>
      </div>
      <div className="track-card-meta">
        <div>
          <h3>{track.title}</h3>
          <p>{track.artist}</p>
        </div>
        <span className="track-card-duration">{track.duration}</span>
      </div>
      <div className="track-card-foot">
        <span>{track.mood}</span>
        <DemoBadge>Sample</DemoBadge>
      </div>
    </article>
  );
}
