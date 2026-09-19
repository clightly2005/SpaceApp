// TechnologyLayout.tsx
import Image from "next/image";
import type { InferSelectModel } from "drizzle-orm";
import { sections, technology } from "@/db/schema";

type Props = {
  section: InferSelectModel<typeof sections>;
  detail: InferSelectModel<typeof technology>;
};

export default function TechnologyLayout({ section, detail }: Props) {
  return (
    <div>
      <p>Technology</p>
      <h1>{section.name}</h1>

     

      {section.body && <p>{section.body}</p>}
    </div>
  );
}