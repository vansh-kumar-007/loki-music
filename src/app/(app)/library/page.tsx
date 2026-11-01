import { Library } from "lucide-react";
import { FeatureStatusScreen } from "@/components/screens/feature-status-screen";

export default function LibraryPage() {
  return (
    <FeatureStatusScreen
      icon={Library}
      eyebrow="YOUR COLLECTION"
      title="A home for"
      accent="your music."
      description="Your library will bring saved tracks and collections together once accounts and a music provider are connected."
      phase="LIBRARY / NOT CONNECTED"
      actionLabel="Explore sample tracks"
      actionHref="/discover"
    />
  );
}
