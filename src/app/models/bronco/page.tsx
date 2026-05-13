import { CollectionPlaceholder } from "@/components/CollectionPlaceholder";
import { getCollection } from "@/lib/builds";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Bronco Collection — Forty Collection",
  description:
    "Early Ford Bronco re-engineered. Coming Q3 2027. East Fort Lauderdale.",
};

export default function BroncoCollectionPage() {
  const collection = getCollection("bronco");
  if (!collection) notFound();
  return <CollectionPlaceholder collection={collection} />;
}
