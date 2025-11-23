import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Box from "@mui/material/Box";
import { getSkills } from "../lib/contentful";

export default function Home({ skills }) {
  return (
    <Container maxWidth="lg">
      <Header />
      <Hero />

      <Box
        sx={{
          display: "flex",
          gap: 6,
          alignItems: "flex-start",
          mt: 2,
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ flex: "1 1 420px", minWidth: 320 }}>
          <Typography sx={{ color: "text.secondary", mb: 4 }}>
            Dedicated to crafting beautiful and functional websites that make
            ideas come alive through code. Explore my portfolio to see my
            passion for web development in action.
          </Typography>
          <Skills items={skills} />
        </Box>
        <Box sx={{ flex: "0 0 320px", display: { xs: "none", md: "block" } }}>
          {/* Placeholder for future side content (projects highlight, contact callout) */}
        </Box>
      </Box>
    </Container>
  );
}

export async function getStaticProps() {
  try {
    const items = await getSkills();
    // Map to keep payload small
    const skills = items.map((it) => ({ sys: it.sys, fields: it.fields }));
    return { props: { skills }, revalidate: 60 };
  } catch (err) {
    console.error("Error fetching skills", err);
    return { props: { skills: [] } };
  }
}
