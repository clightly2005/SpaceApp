// ConceptLayout.tsx
import type { InferSelectModel } from "drizzle-orm";
import { sections, concept } from "@/db/schema";

type Props = {
  section: InferSelectModel<typeof sections>;
  detail: InferSelectModel<typeof concept>;
};

export default function ConceptLayout({ section, detail }: Props) {
  return (
    <div>
      <p>Concept</p>
      <h1>{section.name}</h1>

      <dl>
        {detail.status && (<><dt>Status</dt><dd>{detail.status}</dd></>)}
        {detail.proposed && (<><dt>Proposed</dt><dd>{detail.proposed}</dd></>)}
      </dl>

      {section.body && <p>{section.body}</p>}
    </div>
  );
}