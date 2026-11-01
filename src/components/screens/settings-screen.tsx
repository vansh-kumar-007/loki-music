import Link from "next/link";
import { ArrowRight, CircleUserRound, Eye, SlidersHorizontal, Sparkles } from "lucide-react";

export function SettingsScreen() {
  return (
    <div className="page-enter">
      <div className="page-intro">
        <p className="eyebrow">MAKE IT YOURS</p>
        <h2>Settings <span>& privacy.</span></h2>
        <p>Your choices will stay private by default. Account-level preferences become active with authentication in a later phase.</p>
      </div>
      <div className="settings-list">
        <section className="settings-card">
          <div className="settings-card-icon"><CircleUserRound size={19} /></div>
          <div className="settings-card-copy"><p className="eyebrow">ACCOUNT</p><h3>Profile & identity</h3><p>Profiles are not active in the UI preview. Public visibility will require an explicit choice.</p></div>
          <span className="settings-soon">PHASE 2</span>
        </section>
        <section className="settings-card">
          <div className="settings-card-icon"><Eye size={19} /></div>
          <div className="settings-card-copy"><p className="eyebrow">PRIVACY</p><h3>Listening activity</h3><p>Global activity and listening history are not collected or shared by this preview.</p></div>
          <span className="settings-soon">NOT ACTIVE</span>
        </section>
        <Link className="settings-card settings-card--link" href="/settings/integrations">
          <div className="settings-card-icon"><Sparkles size={19} /></div>
          <div className="settings-card-copy"><p className="eyebrow">CONNECTED SERVICES</p><h3>Integrations</h3><p>Last.fm and playback providers are not connected. Review what each service can and cannot do.</p></div>
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
        <section className="settings-card">
          <div className="settings-card-icon"><SlidersHorizontal size={19} /></div>
          <div className="settings-card-copy"><p className="eyebrow">APPEARANCE</p><h3>Dark emerald</h3><p>The Phase 1 interface uses the LOKI dark emerald theme. Display preferences are not persisted yet.</p></div>
          <span className="settings-soon">PREVIEW</span>
        </section>
      </div>
      <div className="settings-footnote"><span className="status-dot status-dot--muted" /> No account settings or privacy preferences are being saved.</div>
    </div>
  );
}
