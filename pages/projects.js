import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Header from "../components/Header";
import { getProjects } from "../lib/contentful";

export default function Projects({ projects }) {
  return (
    <Container maxWidth="lg">
      <Header />
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
        Projects
      </Typography>

      <Grid container spacing={3}>
        {projects.map((p) => {
          const fields = p.fields || {};
          const image = fields.image?.fields?.file?.url
            ? `https:${fields.image.fields.file.url}`
            : null;
          return (
            <Grid item xs={12} md={6} key={p.sys.id}>
              <Card
                sx={{
                  transition: "transform 220ms ease, box-shadow 220ms ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 40px rgba(30,20,10,0.12)",
                  },
                }}
              >
                {image && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={fields.title}
                    sx={{ objectFit: "cover" }}
                  />
                )}
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {fields.title}
                  </Typography>
                  <Typography sx={{ mb: 2, color: "text.secondary" }}>
                    {fields.description}
                  </Typography>
                  {fields.link && (
                    <Link
                      href={fields.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open project
                    </Link>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  try {
    const items = await getProjects();
    // Map limited fields to keep payload small
    const projects = items.map((it) => ({ sys: it.sys, fields: it.fields }));
    return { props: { projects }, revalidate: 60 };
  } catch (err) {
    console.error("Error fetching projects", err);
    return { props: { projects: [] } };
  }
}
