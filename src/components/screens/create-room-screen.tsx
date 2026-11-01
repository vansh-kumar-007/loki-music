import Link from "next/link";
import { ArrowLeft, Headphones, LockKeyhole, UsersRound } from "lucide-react";

export function CreateRoomScreen() {
  return (
    <div className="page-enter">
      <div className="page-intro">
        <p className="eyebrow">MAKE A SPACE FOR YOUR PEOPLE</p>
        <h2>Create a <span>listening room.</span></h2>
        <p>Room creation is planned, but accounts, room storage, and live playback are not implemented yet.</p>
      </div>
      <div className="create-room-preview">
        <div className="create-room-form">
          <div className="create-room-form-heading">
            <span className="large-icon"><Headphones size={21} /></span>
            <div><p className="eyebrow">ROOM SETUP / PREVIEW</p><h3>Shape your space</h3></div>
          </div>
          <div className="unavailable-form-note"><LockKeyhole size={15} /> Form preview only — nothing can be saved yet.</div>
          <fieldset disabled>
            <label htmlFor="room-name">Room name</label>
            <input id="room-name" placeholder="e.g. Somewhere, slowly" />
            <label htmlFor="room-description">A little about this room</label>
            <textarea id="room-description" placeholder="Set the mood…" rows={3} />
            <div className="room-visibility-row">
              <div><strong>Private by default</strong><span>Only invited members could join.</span></div>
              <input type="checkbox" defaultChecked aria-label="Private room, disabled preview" />
            </div>
            <button className="button button--primary" type="button">Create room</button>
          </fieldset>
          <p className="room-default-note"><UsersRound size={14} /> Proposed starting limit: 10 people, including the owner. Settings are not active.</p>
        </div>
        <aside className="create-room-aside">
          <p className="eyebrow">DESIGNED AROUND TRUST</p>
          <h3>A room should feel like yours.</h3>
          <p>Privacy, invites, capacity, and control roles will be enforced by the room service once it exists.</p>
          <Link className="text-link" href="/rooms"><ArrowLeft size={15} /> Back to rooms</Link>
        </aside>
      </div>
    </div>
  );
}
