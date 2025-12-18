import { pgTable, unique, text, date, serial, foreignKey, boolean, integer, primaryKey } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	id: text().primaryKey().notNull(),
	name: text().notNull(),
	role: text(),
	bio: text(),
	location: text(),
	email: text(),
	website: text(),
	github: text(),
	twitter: text(),
	linkedin: text(),
	joinedDate: date("joined_date"),
	avatar: text(),
	initials: text(),
}, (table) => [
	unique("users_email_key").on(table.email),
]);

export const skills = pgTable("skills", {
	id: serial().primaryKey().notNull(),
	name: text().notNull(),
}, (table) => [
	unique("skills_name_key").on(table.name),
]);

export const projects = pgTable("projects", {
	id: text().primaryKey().notNull(),
	title: text().notNull(),
	category: text(),
	description: text(),
	longDescription: text("long_description"),
	timeline: text(),
	teamSize: text("team_size"),
	status: text(),
	trending: boolean().default(false),
	featured: boolean().default(false),
	createdAt: date("created_at"),
	updatedAt: date("updated_at"),
	authorId: text("author_id"),
	likes: integer().default(0),
}, (table) => [
	foreignKey({
			columns: [table.authorId],
			foreignColumns: [users.id],
			name: "projects_author_id_fkey"
		}),
]);

export const projectRequirements = pgTable("project_requirements", {
	id: serial().primaryKey().notNull(),
	projectId: text("project_id"),
	requirement: text().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.projectId],
			foreignColumns: [projects.id],
			name: "project_requirements_project_id_fkey"
		}).onDelete("cascade"),
]);

export const collaborators = pgTable("collaborators", {
	id: text().primaryKey().notNull(),
	name: text().notNull(),
	avatar: text(),
	initials: text(),
	role: text(),
});

export const comments = pgTable("comments", {
	id: text().primaryKey().notNull(),
	projectId: text("project_id"),
	text: text().notNull(),
	createdAt: date("created_at"),
	authorName: text("author_name"),
	authorAvatar: text("author_avatar"),
	authorInitials: text("author_initials"),
}, (table) => [
	foreignKey({
			columns: [table.projectId],
			foreignColumns: [projects.id],
			name: "comments_project_id_fkey"
		}).onDelete("cascade"),
]);

export const collaborations = pgTable("collaborations", {
	id: text().primaryKey().notNull(),
	userId: text("user_id"),
	title: text().notNull(),
	description: text(),
	role: text(),
	techStack: text("tech_stack").array(),
	status: text(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "collaborations_user_id_fkey"
		}).onDelete("cascade"),
]);

export const userSkills = pgTable("user_skills", {
	userId: text("user_id").notNull(),
	skillId: integer("skill_id").notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "user_skills_user_id_fkey"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.skillId],
			foreignColumns: [skills.id],
			name: "user_skills_skill_id_fkey"
		}).onDelete("cascade"),
	primaryKey({ columns: [table.userId, table.skillId], name: "user_skills_pkey"}),
]);

export const projectTechStack = pgTable("project_tech_stack", {
	projectId: text("project_id").notNull(),
	tech: text().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.projectId],
			foreignColumns: [projects.id],
			name: "project_tech_stack_project_id_fkey"
		}).onDelete("cascade"),
	primaryKey({ columns: [table.projectId, table.tech], name: "project_tech_stack_pkey"}),
]);
