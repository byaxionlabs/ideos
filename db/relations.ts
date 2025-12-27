import { relations } from "drizzle-orm/relations"
import {
  authUsers,
  authAccounts,
  authSessions,
  users,
  projects,
  projectRequirements,
  comments,
  collaborations,
  userSkills,
  skills,
  projectTechStack,
} from "./schema"

/* ────────────────────────────────────────────────
   AUTH RELATIONS (NEW)
   ──────────────────────────────────────────────── */

export const authUsersRelations = relations(authUsers, ({ many, one }) => ({
  accounts: many(authAccounts),
  sessions: many(authSessions),

  // OPTIONAL but recommended:
  // connect auth user → domain user
  userProfile: one(users, {
    fields: [authUsers.id],
    references: [users.id],
  }),
}))

export const authAccountsRelations = relations(authAccounts, ({ one }) => ({
  user: one(authUsers, {
    fields: [authAccounts.userId],
    references: [authUsers.id],
  }),
}))

export const authSessionsRelations = relations(authSessions, ({ one }) => ({
  user: one(authUsers, {
    fields: [authSessions.userId],
    references: [authUsers.id],
  }),
}))

/* ────────────────────────────────────────────────
   DOMAIN RELATIONS (UNCHANGED)
   ──────────────────────────────────────────────── */

export const usersRelations = relations(users, ({ many }) => ({
  projects: many(projects),
  collaborations: many(collaborations),
  userSkills: many(userSkills),
}))

export const projectsRelations = relations(projects, ({ one, many }) => ({
  user: one(users, {
    fields: [projects.authorId],
    references: [users.id],
  }),
  projectRequirements: many(projectRequirements),
  comments: many(comments),
  projectTechStacks: many(projectTechStack),
}))

export const projectRequirementsRelations = relations(
  projectRequirements,
  ({ one }) => ({
    project: one(projects, {
      fields: [projectRequirements.projectId],
      references: [projects.id],
    }),
  })
)

export const commentsRelations = relations(comments, ({ one }) => ({
  project: one(projects, {
    fields: [comments.projectId],
    references: [projects.id],
  }),
}))

export const collaborationsRelations = relations(
  collaborations,
  ({ one }) => ({
    user: one(users, {
      fields: [collaborations.userId],
      references: [users.id],
    }),
  })
)

export const userSkillsRelations = relations(userSkills, ({ one }) => ({
  user: one(users, {
    fields: [userSkills.userId],
    references: [users.id],
  }),
  skill: one(skills, {
    fields: [userSkills.skillId],
    references: [skills.id],
  }),
}))

export const skillsRelations = relations(skills, ({ many }) => ({
  userSkills: many(userSkills),
}))

export const projectTechStackRelations = relations(
  projectTechStack,
  ({ one }) => ({
    project: one(projects, {
      fields: [projectTechStack.projectId],
      references: [projects.id],
    }),
  })
)
