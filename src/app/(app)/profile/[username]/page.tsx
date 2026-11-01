import { UserRound } from "lucide-react";
import { FeatureStatusScreen } from "@/components/screens/feature-status-screen";

export default function ProfilePage() {
  return (
    <FeatureStatusScreen
      icon={UserRound}
      eyebrow="LISTENER PROFILE"
      title="A profile"
      accent="takes shape."
      description="Profiles are not connected to accounts yet. No username, listening activity, or private profile data is being loaded."
      phase="PROFILE / NOT CONNECTED"
      actionLabel="Account status"
      actionHref="/settings"
    />
  );
}
