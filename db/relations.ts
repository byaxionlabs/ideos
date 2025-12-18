import { relations } from "drizzle-orm/relations";
import { users, projects, projectRequirements, comments, collaborations, userSkills, skills, projectTechStack } from "./schema";

export const projectsRelations = relations(projects, ({one, many}) => ({
	user: one(users, {
		fields: [projects.authorId],
		references: [users.id]
	}),
	projectRequirements: many(projectRequirements),
	comments: many(comments),
	projectTechStacks: many(projectTechStack),
}));

export const usersRelations = relations(users, ({many}) => ({
	projects: many(projects),
	collaborations: many(collaborations),
	userSkills: many(userSkills),
}));

export const projectRequirementsRelations = relations(projectRequirements, ({one}) => ({
	project: one(projects, {
		fields: [projectRequirements.projectId],
		references: [projects.id]
	}),
}));

export const commentsRelations = relations(comments, ({one}) => ({
	project: one(projects, {
		fields: [comments.projectId],
		references: [projects.id]
	}),
}));

export const collaborationsRelations = relations(collaborations, ({one}) => ({
	user: one(users, {
		fields: [collaborations.userId],
		references: [users.id]
	}),
}));

export const userSkillsRelations = relations(userSkills, ({one}) => ({
	user: one(users, {
		fields: [userSkills.userId],
		references: [users.id]
	}),
	skill: one(skills, {
		fields: [userSkills.skillId],
		references: [skills.id]
	}),
}));

export const skillsRelations = relations(skills, ({many}) => ({
	userSkills: many(userSkills),
}));

export const projectTechStackRelations = relations(projectTechStack, ({one}) => ({
	project: one(projects, {
		fields: [projectTechStack.projectId],
		references: [projects.id]
	}),
}));