import Image from "next/image"
import type { InferSelectModel } from "drizzle-orm";
import {sections, mission, people} from '@/db/schema'

type Section = InferSelectModel<typeof sections>;
type MissionDet = InferSelectModel<typeof mission>;
type Crew = InferSelectModel<typeof people>;

type Props = {
    section: Section;
    detail: MissionDet;
    crew: Crew[];
};

export default function MissionLayout({ section, detail, crew }: Props) {
  return (
    <div className="text-[#f0ede6]  mt-10">
      <p className="text-md uppercase tracking-widest text-white/40 mb-3">Mission</p>
      <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-8">{section.name}</h1>

      <div className="flex flex-wrap rounded bg-neutral-900 gap-x-10 gap-y-3 border-y border-white/10 py-4 px-4 mb-10 text-sm">
        {detail.agency && (
          <div>
            <span className="block text-white/40 uppercase tracking-widest text-xs">Agency</span>
            <span className="text-white/80">{detail.agency}</span>
          </div>
        )}
        {detail.destination && (
          <div>
            <span className="block text-white/40 uppercase tracking-widest text-xs">Destination</span>
            <span className="text-white/80">{detail.destination}</span>
          </div>
        )}
        {detail.status && (
          <div>
            <span className="block text-white/40 uppercase tracking-widest text-xs">Status</span>
            <span className="text-white/80">{detail.status}</span>
          </div>
        )}
        {detail.duration && (
          <div>
            <span className="block text-white/40 uppercase tracking-widest text-xs">Duration</span>
            <span className="text-white/80">{detail.duration}</span>
          </div>
        )}
      </div>

      {section.body && (
        <p className="text-base sm:text-md text-white/60 text-justify leading-relaxed mb-12 max-w-3xl">
          {section.summary}
        </p>
      )}
      {section.summary && (
        <p className="text-base sm:text-md text-white/60 text-justify leading-relaxed mb-12 max-w-3xl">
          {section.body}
        </p>
      )}
      {crew.length > 0 && (
        <section>
          <h2 className="text-2xl font-serif mb-6">Crew</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {crew.map((person) => (
              <div key={person.name} className="border rounded bg-neutral-900 hover:bg-mauve-950 border-white/10 rounded-xl p-4">
                {person.image && (
                  <Image src={person.image} width={200} height={200} alt={person.name}
                    className="w-full aspect-square object-cover rounded-lg mb-3"/>
                )}
                <p className="font-medium text-white/90">{person.name}</p>
                {person.role && <p className="text-xs uppercase tracking-widest text-white/40 mb-2">{person.role}</p>}
                {person.history && <p className="text-sm text-white/60 leading-relaxed pt-2">History: {person.history}</p>}
                {person.education && <p className="text-sm text-white/60 leading-relaxed pt-2">Education: {person.education}</p>}
                {person.experience &&<p className="text-sm text-white/60 leading-relaxed pt-2">{person.experience}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}