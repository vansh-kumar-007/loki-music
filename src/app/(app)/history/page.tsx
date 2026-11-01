import { Clock3 } from "lucide-react";
import { FeatureStatusScreen } from "@/components/screens/feature-status-screen";

export default function HistoryPage() {
  return (
    <FeatureStatusScreen
      icon={Clock3}
      eyebrow="YOUR LISTENING STORY"
      title="Recently"
      accent="played."
      description="This preview does not record playback or maintain a listening history. History will require a connected account and an explicit privacy choice."
      phase="HISTORY / NO DATA STORED"
      actionLabel="View integration status"
      actionHref="/settings/integrations"
    />
  );
}
