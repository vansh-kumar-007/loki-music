import Link from "next/link";
import { ArrowRight, Compass, Search } from "lucide-react";
import { demoTracks } from "@/data/demo-catalog";
import { DemoBadge } from "@/components/ui/demo-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrackCard } from "@/components/ui/track-card";

export function DiscoverScreen() {
  return (
    <div className="page-enter">
      <div className="page-intro page-intro--split">
        <div>
          <p className="eyebrow">A QUIETER KIND OF DISCOVERY</p>
          <h2>Find your <span>next sound.</span></h2>
          <p>Explore the first visual catalog, built from fictional sample metadata and original abstract artwork.</p>
        </div>
        <Link className="button button--secondary" href="/search"><Search size={16} /> Search samples</Link>
      </div>
      <div className="discover-note">
        <Compass size={16} aria-hidden="true" />
        <span>Discovery is a UI preview. Provider search and playable tracks are not connected.</span>
        <DemoBadge>Sample catalog</DemoBadge>
      </div>
      <div className="mood-strip" aria-label="Sample moods">
        <span className="mood-chip mood-chip--active">All samples</span>
        <span className="mood-chip">After dark</span>
        <span className="mood-chip">Dream pop</span>
        <span className="mood-chip">Ambient</span>
        <span className="mood-chip">Indie</span>
      </div>
      <section className="dashboard-section">
        <SectionHeading eyebrow="THE LOKI SAMPLE SHELF" title="A little of everything" description="These fictional tracks demonstrate the discovery layout; they are not available to play." />
        <div className="track-card-grid track-card-grid--four">
          {demoTracks.map((track) => <TrackCard key={track.id} track={track} />)}
        </div>
      </section>
      <div className="provider-gate-card">
        <div className="provider-gate-mark"><Compass size={20} /></div>
        <div>
          <p className="eyebrow">A REAL CATALOG COMES LATER</p>
          <h3>Music search needs an approved provider.</h3>
          <p>LOKI will keep discovery metadata separate from legal playback access. No provider has been selected yet.</p>
        </div>
        <Link className="text-link" href="/settings/integrations">View integrations <ArrowRight size={15} /></Link>
      </div>
    </div>
  );
}
