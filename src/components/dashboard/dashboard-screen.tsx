import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Clock3,
  Compass,
  Headphones,
  Radio,
  Search,
  UsersRound,
} from "lucide-react";
import { demoTracks } from "@/data/demo-catalog";
import { Artwork } from "@/components/ui/artwork";
import { DemoBadge } from "@/components/ui/demo-badge";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrackCard } from "@/components/ui/track-card";
import { TrackRow } from "@/components/ui/track-row";

export function DashboardScreen() {
  return (
    <div className="dashboard-screen page-enter">
      <section className="dashboard-welcome">
        <div>
          <p className="eyebrow">YOUR LISTENING SPACE</p>
          <h2>Welcome back,<br /><span>take a breath.</span></h2>
          <p className="welcome-copy">A little space for your sound, your discoveries, and the people you want to share them with.</p>
          <Link className="button button--primary" href="/discover">
            Discover music <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="welcome-feature">
          <div className="welcome-feature-art">
            <Artwork variant="orbit" label="Original abstract sample art for Soft Static" />
            <span className="welcome-feature-stamp"><AudioLines size={16} /> SAMPLE</span>
          </div>
          <div className="welcome-feature-meta">
            <div><span>FEATURED SAMPLE</span><strong>Soft Static</strong><small>North Window · Rooms We Keep</small></div>
            <span className="lock-orb" title="Audio is not attached"><Radio size={15} /></span>
          </div>
          <p className="welcome-feature-note">Interface sample only · no audio attached</p>
        </div>
      </section>

      <section className="dashboard-state-grid" aria-label="Connection status">
        <article className="state-card">
          <span className="state-card-icon"><AudioLines size={18} /></span>
          <div><span>LISTENING</span><strong>Not connected</strong><small>Provider setup comes later</small></div>
          <i className="status-dot status-dot--muted" />
        </article>
        <article className="state-card">
          <span className="state-card-icon"><UsersRound size={18} /></span>
          <div><span>YOUR ROOMS</span><strong>Not available yet</strong><small>Room services are not connected</small></div>
          <i className="status-dot status-dot--muted" />
        </article>
        <article className="state-card">
          <span className="state-card-icon"><Radio size={18} /></span>
          <div><span>LAST.FM</span><strong>Not connected</strong><small>Connect when accounts arrive</small></div>
          <i className="status-dot status-dot--muted" />
        </article>
      </section>

      <section className="dashboard-section">
        <SectionHeading
          eyebrow="A SMALL START"
          title="Recently played"
          description="Fictional sample tracks for the interface preview."
          action={<Link className="text-link" href="/history">View history <ArrowUpRight size={15} /></Link>}
        />
        <div className="track-list-panel">
          {demoTracks.slice(0, 3).map((track, index) => <TrackRow key={track.id} track={track} index={index} />)}
          <div className="track-list-foot"><DemoBadge>Sample catalog · no playback</DemoBadge><Link href="/discover">Explore samples <ArrowRight size={14} /></Link></div>
        </div>
      </section>

      <section className="dashboard-section">
        <SectionHeading
          eyebrow="SOMETHING NEW"
          title="Made for discovery"
          description="Original artwork and fictional track metadata, clearly marked as sample content."
          action={<Link className="text-link" href="/discover">Browse discover <ArrowUpRight size={15} /></Link>}
        />
        <div className="track-card-grid">
          {demoTracks.slice(1, 4).map((track) => <TrackCard key={track.id} track={track} />)}
        </div>
      </section>

      <section className="dashboard-section dashboard-signal-grid">
        <div>
          <SectionHeading
            eyebrow="TRENDING / SAMPLE ONLY"
            title="A little to explore"
            description="Fictional sample shelf; not sourced from live popularity or listener activity."
            action={<Link className="text-link" href="/discover">Discover <ArrowUpRight size={15} /></Link>}
          />
          <div className="track-card-grid track-card-grid--two">
            {demoTracks.slice(3, 5).map((track) => <TrackCard key={track.id} track={track} />)}
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="YOUR LISTENING STORY"
            title="Personal stats"
            description="Nothing is being collected in this preview."
          />
          <EmptyState
            icon={AudioLines}
            eyebrow="LAST.FM NOT CONNECTED"
            title="Your listening, at a glance"
            description="Top artists, listening history, and statistics can appear here after you choose to connect Last.fm."
            actionLabel="View integration status"
            actionHref="/settings/integrations"
          />
        </div>
      </section>

      <section className="dashboard-lower-grid">
        <div className="dashboard-section dashboard-section--nested">
          <SectionHeading eyebrow="TOGETHER, SOMEDAY" title="Listening rooms" />
          <EmptyState
            icon={Headphones}
            eyebrow="Room features are not connected"
            title="A room for your people"
            description="This preview shows the room entry point only. Creating and joining live rooms requires the later backend and provider phases."
            actionLabel="See the rooms page"
            actionHref="/rooms"
          />
        </div>
        <div className="dashboard-section dashboard-section--nested">
          <SectionHeading eyebrow="YOUR LISTENING CIRCLE" title="Friends listening" />
          <EmptyState
            icon={UsersRound}
            eyebrow="No accounts connected"
            title="Your circle will live here"
            description="Friends and activity are private by default and will appear only after the account and social features are built."
            actionLabel="Account status"
            actionHref="/settings"
          />
        </div>
      </section>

      <section className="dashboard-lastfm-card">
        <div className="lastfm-card-icon">L.fm</div>
        <div className="lastfm-card-copy">
          <p className="eyebrow">YOUR LISTENING STORY</p>
          <h2>Music metadata, with consent.</h2>
          <p>Last.fm can provide discovery and scrobbling when linked. It does not provide audio playback.</p>
        </div>
        <Link className="button button--secondary button--small" href="/settings/integrations">
          Integration status <ArrowRight size={15} />
        </Link>
      </section>

      <section className="dashboard-shortcuts" aria-label="Quick navigation">
        <Link href="/search"><Search size={17} /><span>Search the sample catalog</span><ArrowRight size={15} /></Link>
        <Link href="/rooms"><Compass size={17} /><span>Explore listening rooms</span><ArrowRight size={15} /></Link>
        <Link href="/history"><Clock3 size={17} /><span>Listening history status</span><ArrowRight size={15} /></Link>
      </section>
    </div>
  );
}
