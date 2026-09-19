import { pgTable, pgEnum, serial, text, integer } from "drizzle-orm/pg-core";

export const sectionType = pgEnum("section_type", ["mission", "technology", "celestial", "concept"]);
export const sections = pgTable("sections", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  type: sectionType("type").notNull(),
  summary: text("summary"),
  body: text("body"),
});

export const celestial = pgTable("celestial", {
  sectionId: integer("section_id").notNull().unique().references(() => sections.id),
  subtype: text("subtype"),
  mass: text("mass"),
  distanceFromSun: text("distance_from_sun"),
  orbitalPeriod: text("orbital_period"),
  moonsCount: integer("moons_count"),
  image: text("image"),
});

export const technology = pgTable("technology", {
  sectionId: integer("section_id").notNull().unique().references(() => sections.id),
  agency: text("agency"),
  category: text("category"),
  status: text("status"),
  image: text("image"),
});

export const mission = pgTable("mission", {
  sectionId: integer("section_id").notNull().unique().references(() => sections.id),
  agency: text("agency"),
  depatureDate: text("departure_date"),
  destination: text("destination"),
  status: text("status"),
  duration: text("duration"),
  image: text("image"),
});

export const concept = pgTable("concept", {
  sectionId: integer("section_id").notNull().unique().references(() => sections.id),
  status: text("status"),
  proposed: text("proposed"),
  image: text("image"),
});

export const people = pgTable("people", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role"),
  history: text("history"),
  education: text("education"),
  experience: text("experience"),
  image: text("image"),
});

export const sectionPeople = pgTable("section_people", {
  sectionId: integer("section_id").notNull().references(() => sections.id),
  personId: integer("person_id").notNull().references(() => people.id),
});