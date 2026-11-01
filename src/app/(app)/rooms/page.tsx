import Link from "next/link";
import { ArrowRight, Headphones, LockKeyhole, UsersRound } from "lucide-react";
import { EmptyState } from "@/components/ui/empty-state";

export default function RoomsPage() {
  return (
    <div className="page-enter">
      <div className="page-intro page-intro--split">
        <div>
          <p className="eyebrow">LISTENING, TOGETHER</p>
          <h2>Your room.<br /><span>Your people.</span></h2>
          <p>Room discovery is not live yet. No active rooms or members are being shown in this interface preview.</p>
        </div>
        <Link className="button button--primary" href="/room/create">Preview room setup <ArrowRight size={16} /></Link>
      </div>
      <div className="room-default-strip">
        <span><LockKeyhole size={15} /> Private by default</span>
        <span><UsersRound size={15} /> 10-person starting limit</span>
        <span>Provisional settings · not enforced yet</span>
      </div>
      <div className="rooms-empty-panel">
        <EmptyState
          icon={Headphones}
          eyebrow="ROOM SERVICE NOT CONNECTED"
          title="The best rooms start with the right people."
          description="This is an honest empty state. Creating rooms, inviting participants, and syncing playback require the later authentication, database, realtime, and provider phases."
          actionLabel="Preview room setup"
          actionHref="/room/create"
        />
      </div>
      <p className="room-footnote">The room interface will never report synchronized listening from a room command alone; each listener&apos;s real playback state must be verified.</p>
    </div>
  );
}
