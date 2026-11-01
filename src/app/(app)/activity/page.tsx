import { Activity } from "lucide-react";
import { FeatureStatusScreen } from "@/components/screens/feature-status-screen";

export default function ActivityPage() {
  return (
    <FeatureStatusScreen
      icon={Activity}
      eyebrow="WHAT YOUR CIRCLE IS HEARING"
      title="A little"
      accent="in motion."
      description="Activity is not collected or displayed in this preview. Future sharing will be opt-in and limited by each user's privacy settings."
      phase="ACTIVITY / NOT COLLECTED"
      actionLabel="Review privacy"
      actionHref="/settings"
    />
  );
}
