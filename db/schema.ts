import {
	pgTable,
	timestamp,
	unique,
	text,
	date,
	serial,
	foreignKey,
	boolean,
	integer,
	primaryKey,
} from "drizzle-orm/pg-core"

/* ────────────────────────────────────────────────
   AUTH TABLES (Better Auth)
   ──────────────────────────────────────────────── */
export const authUsers = pgTable("auth_users", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	emailVerified: boolean("email_verified").default(false),
	image: text("image"),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
})

export const authAccounts = pgTable(
	"auth_accounts",
	{
		id: text("id").primaryKey(),
		userId: text("user_id").notNull(),
		accountId: text("account_id").notNull(),
		providerId: text("provider_id").notNull(),
		accessToken: text("access_token"),
		refreshToken: text("refresh_token"),
		accessTokenExpiresAt: timestamp("access_token_expires_at"),
		refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
		scope: text("scope"),
		idToken: text("id_token"),
		password: text("password"),
		createdAt: timestamp("created_at").defaultNow(),
		updatedAt: timestamp("updated_at").defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.userId],
			foreignColumns: [authUsers.id],
			name: "auth_accounts_user_id_fkey",
		}).onDelete("cascade"),
	]
)

export const authSessions = pgTable(
	"auth_sessions",
	{
		id: text("id").primaryKey(),
		userId: text("user_id").notNull(),
		expiresAt: timestamp("expires_at").notNull(),
		token: text("token").notNull().unique(),
		ipAddress: text("ip_address"),
		userAgent: text("user_agent"),
		createdAt: timestamp("created_at").defaultNow(),
		updatedAt: timestamp("updated_at").defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.userId],
			foreignColumns: [authUsers.id],
			name: "auth_sessions_user_id_fkey",
		}).onDelete("cascade"),
	]
)

/* ────────────────────────────────────────────────
   DOMAIN TABLES (Your App)
   ──────────────────────────────────────────────── */
export const users = pgTable(
	"users",
	{
		id: text("id").primaryKey().notNull(),
		name: text("name").notNull(),
		role: text("role"),
		bio: text("bio"),
		location: text("location"),
		email: text("email"),
		website: text("website"),
		github: text("github"),
		twitter: text("twitter"),
		linkedin: text("linkedin"),

		joinedDate: date("joined_date"),

		avatar: text("avatar"),
		initials: text("initials"),

		createdAt: timestamp("created_at").defaultNow(),
		updatedAt: timestamp("updated_at").defaultNow(),
	},
	(table) => [unique("users_email_key").on(table.email)]
)


/* (Everything below this stays exactly as you had it) */

export const skills = pgTable(
	"skills",
	{
		id: serial("id").primaryKey(),
		name: text("name").notNull(),
	},
	(table) => [unique("skills_name_key").on(table.name)]
)

export const projects = pgTable(
	"projects",
	{
		id: text("id").primaryKey(),
		title: text("title").notNull(),
		category: text("category"),
		description: text("description"),
		longDescription: text("long_description"),
		timeline: text("timeline"),
		teamSize: text("team_size"),
		status: text("status"),
		trending: boolean("trending").default(false),
		featured: boolean("featured").default(false),
		createdAt: date("created_at"),
		updatedAt: date("updated_at"),
		authorId: text("author_id"),
		likes: integer("likes").default(0),
	},
	(table) => [
		foreignKey({
			columns: [table.authorId],
			foreignColumns: [users.id],
			name: "projects_author_id_fkey",
		}),
	]
)

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
	primaryKey({ columns: [table.userId, table.skillId], name: "user_skills_pkey" }),
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
	primaryKey({ columns: [table.projectId, table.tech], name: "project_tech_stack_pkey" }),
]);
