import { CollectionPlaceholder } from "@/components/CollectionPlaceholder";
import { getCollection } from "@/lib/builds";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Defender Collection — Forty Collection",
  description:
    "Land Rover Defender 90 and 110 re-engineered. Coming 2028. East Fort Lauderdale.",
};

export default function DefenderCollectionPage() {
  const collection = getCollection("defender");
  if (!collection) notFound();
  return <CollectionPlaceholder collection={collection} />;
}
