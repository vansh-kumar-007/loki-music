import Link from "next/link";
import { ArrowLeft, ArrowRight, AudioLines, ExternalLink, Music2 } from "lucide-react";

export function IntegrationScreen() {
  return (
    <div className="page-enter">
      <div className="page-intro">
        <p className="eyebrow">CONNECTED SERVICES</p>
        <h2>Connections, <span>with clarity.</span></h2>
        <p>Metadata and legal audio playback are separate capabilities. Nothing is linked in this preview.</p>
      </div>
      <div className="integration-cards">
        <section className="integration-card">
          <div className="integration-card-top">
            <span className="integration-mark integration-mark--lastfm">L.fm</span>
            <span className="integration-disconnected"><i /> NOT CONNECTED</span>
          </div>
          <p className="eyebrow">METADATA & SCROBBLING</p>
          <h3>Last.fm</h3>
          <p>Last.fm can provide artist, album, track, and listening-history metadata. It does not provide unrestricted full-track playback.</p>
          <button className="button button--secondary" type="button" disabled title="Account linking arrives in Phase 2">Connect Last.fm <span>Available in Phase 2</span></button>
          <a className="integration-doc-link" href="https://www.last.fm/api/intro" target="_blank" rel="noreferrer">Last.fm API information <ExternalLink size={13} /></a>
        </section>
        <section className="integration-card integration-card--provider">
          <div className="integration-card-top">
            <span className="integration-mark integration-mark--provider"><Music2 size={20} /></span>
            <span className="integration-disconnected"><i /> NOT SELECTED</span>
          </div>
          <p className="eyebrow">AUDIO PLAYBACK</p>
          <h3>Playback provider</h3>
          <p>LOKI has not selected a provider. Any future integration must support the intended use under its published terms.</p>
          <button className="button button--secondary" type="button" disabled title="No playback provider has been selected">Provider not selected <span>Decision unresolved</span></button>
          <Link className="integration-doc-link" href="/discover">Explore the sample catalog <ArrowRight size={13} /></Link>
        </section>
      </div>
      <div className="integration-principle">
        <span className="integration-principle-icon"><AudioLines size={18} /></span>
        <p><strong>Metadata does not equal playback rights.</strong> A track can be searchable or scrobble-able without being playable in a shared room.</p>
      </div>
      <Link className="text-link integration-back" href="/settings"><ArrowLeft size={15} /> Back to settings</Link>
    </div>
  );
}
