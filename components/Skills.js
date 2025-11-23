import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LinearProgress from "@mui/material/LinearProgress";

const DEFAULT_SKILLS = [
  "HTML - 8",
  "CSS - 8",
  "JavaScript - 8",
  "ReactJS - 8",
  "NextJS - 8",
  "TypeScript - 8",
  "Redux - 8",
  "GraphQL - 7",
  "Docker - 6",
  "NODEJS - 5",
];

function parseSkill(s) {
  const parts = s.split("-").map((p) => p.trim());
  return {
    name: parts[0],
    rating: Math.min(10, Math.max(0, Number(parts[1] || 0))),
  };
}

export default function Skills({ items = DEFAULT_SKILLS }) {
  const parsed = items.map(parseSkill);

  return (
    <Box sx={{ maxWidth: 900, mt: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Skills
      </Typography>
      <Grid container spacing={2}>
        {parsed.map((s, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                bgcolor: "background.paper",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 1 }}>{s.name}</Typography>
              <LinearProgress
                variant="determinate"
                value={(s.rating / 10) * 100}
                sx={{ height: 8, borderRadius: 8 }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
