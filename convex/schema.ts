import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
  endpoints: defineTable({ method: v.string(), path: v.string(), active: v.boolean() }).index("by_path", ["path"]),
  responses: defineTable({ endpointId: v.id("endpoints"), statusCode: v.number(), contentType: v.string(), body: v.string(), delayMs: v.number() }),
  requests: defineTable({ endpointId: v.id("endpoints"), requestHeaders: v.string(), method: v.string(), ip: v.string(), timestamp: v.string() })
});
