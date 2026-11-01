import { UsersRound } from "lucide-react";
import { FeatureStatusScreen } from "@/components/screens/feature-status-screen";

export default function FriendsPage() {
  return (
    <FeatureStatusScreen
      icon={UsersRound}
      eyebrow="YOUR LISTENING CIRCLE"
      title="Good music"
      accent="travels."
      description="Friends, requests, and activity are not connected. User presence and listening details will remain private unless people choose to share them."
      phase="FRIENDS / NOT CONNECTED"
      actionLabel="Review privacy defaults"
      actionHref="/settings"
    />
  );
}
