import type { Iklan } from "@/db/schema/iklan";
import { VideoItem } from ".";

type VideoCollectionProps = {
  videoCollection: Iklan[];
  pill: "year" | "country";
};

export default function VideoCollection({
  videoCollection,
  pill,
}: VideoCollectionProps) {
  return (
    <div
      data-testid="video-collection-container"
      className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {videoCollection.map((vid: Iklan) => {
        return <VideoItem key={vid.id} pill={pill} vid={vid} />;
      })}
    </div>
  );
}
