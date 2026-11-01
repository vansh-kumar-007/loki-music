import { Headphones } from "lucide-react";
import { FeatureStatusScreen } from "@/components/screens/feature-status-screen";

export default function RoomPage() {
  return (
    <FeatureStatusScreen
      icon={Headphones}
      eyebrow="LISTENING ROOM"
      title="This room"
      accent="isn't live."
      description="Room sessions are not connected yet. No room identifier here resolves to stored room state or active participants."
      phase="ROOM SESSION / NOT CONNECTED"
      actionLabel="Browse rooms"
      actionHref="/rooms"
    />
  );
}
