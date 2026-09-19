//renders any article that gets pressed on side nav
import { notFound } from 'next/navigation'
import {eq} from 'drizzle-orm'
import {db} from '@/db'
import {celestial, sections, mission, concept, people, technology, sectionPeople} from '@/db/schema'
import CelestialLayout from '@/components/education/CelestialLayout'
import MissionLayout from '@/components/education/MissionLayout'
import ConceptLayout from '@/components/education/ConceptLayout'
import TechnologyLayout from '@/components/education/TechnologyLayout'

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  const[section] = await db.select().from(sections).where(eq(sections.slug, id));
  if(!section) notFound();
  
  switch(section.type){
    case 'celestial':{
      const [detail] = await db.select().from(celestial).where(eq(celestial.sectionId, section.id));
      return <CelestialLayout section={section} detail={detail}></CelestialLayout>
    }
    case 'mission':{
      const [detail] =  await db.select().from(mission).where(eq(mission.sectionId, section.id));
      const crew = await db.select({id: people.id, name: people.name, role: people.role, history: people.history, education: people.education, experience: people.experience, image: people.image,})
        .from(sectionPeople).innerJoin(people, eq(sectionPeople.personId, people.id))
        .where(eq(sectionPeople.sectionId, section.id));
      return<MissionLayout section={section} detail={detail} crew={crew}></MissionLayout>
    }
    case 'technology':{
      const [detail] = await db.select().from(technology).where(eq(technology.sectionId, section.id));
      return <TechnologyLayout section={section} detail={detail}></TechnologyLayout>
    }
    case 'concept':{
      const [detail] = await db.select().from(concept).where(eq(concept.sectionId, section.id));
      return <ConceptLayout section={section} detail={detail}></ConceptLayout>
    }
    default:
      notFound();
  }
}