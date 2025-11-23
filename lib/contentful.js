import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_DELIVERY_TOKEN;

if (!space || !accessToken) {
  console.warn(
    "CONTENTFUL_SPACE_ID and CONTENTFUL_DELIVERY_TOKEN must be set. See .env.local.example"
  );
}

// Only create client if credentials are available
export const client = space && accessToken ? createClient({
  space,
  accessToken,
}) : null;

export async function getProjects() {
  if (!client) return [];
  try {
    const res = await client.getEntries({
      content_type: "project",
      order: "-fields.createdAt",
    });
    return res.items || [];
  } catch (err) {
    console.error("Error fetching projects:", err.message);
    return [];
  }
}

export async function getSkills() {
  if (!client) return [];
  try {
    const res = await client.getEntries({
      content_type: "skill",
      order: "-fields.rating",
    });
    return res.items || [];
  } catch (err) {
    console.error("Error fetching skills:", err.message);
    return [];
  }
}
