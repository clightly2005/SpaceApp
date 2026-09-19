// CelestialLayout.tsx
import Image from "next/image";
import type { InferSelectModel } from "drizzle-orm";
import { sections, celestial } from "@/db/schema";

type Props = {
  section: InferSelectModel<typeof sections>;
  detail: InferSelectModel<typeof celestial>;
};

export default function CelestialLayout({ section, detail }: Props) {
  return (
    <div>
      <p>Celestial body</p>
      <h1>{section.name}</h1>

      <dl>
        {detail.subtype && (<><dt>Type</dt><dd>{detail.subtype}</dd></>)}
        {detail.mass && (<><dt>Mass</dt><dd>{detail.mass}</dd></>)}
        {detail.distanceFromSun && (<><dt>Distance from Sun</dt><dd>{detail.distanceFromSun}</dd></>)}
        {detail.orbitalPeriod && (<><dt>Orbital period</dt><dd>{detail.orbitalPeriod}</dd></>)}
        {detail.moonsCount != null && (<><dt>Moons</dt><dd>{detail.moonsCount}</dd></>)}
      </dl>

      {section.body && <p>{section.body}</p>}
    </div>
  );
}