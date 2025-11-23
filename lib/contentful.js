import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_DELIVERY_TOKEN;

if (!space || !accessToken) {
  // This will be visible during build/runtime if env missing.
  console.warn(
    "CONTENTFUL_SPACE_ID and CONTENTFUL_DELIVERY_TOKEN must be set. See .env.local.example"
  );
}

export const client = createClient({
  space,
  accessToken,
});

export async function getProjects() {
  const res = await client.getEntries({
    content_type: "project",
    order: "-fields.createdAt",
  });
  return res.items || [];
}

export async function getSkills() {
  const res = await client.getEntries({
    content_type: "skill",
    order: "-fields.rating",
  });
  return res.items || [];
}
