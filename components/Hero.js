import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Hero() {
  const profileUrl =
    "/krishna.jpg";

  return (
    <Box sx={{ display: 'flex', gap: 6, alignItems: 'center', mb: 6, flexWrap: 'wrap' }}>
      <Box sx={{ flex: '1 1 420px', minWidth: 320 }}>
        <Typography variant="h1" component="h1" sx={{ fontWeight: 800, mb: 1, fontSize: { xs: '2rem', md: '3rem' } }}>
          I'm Krishna
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.secondary', mb: 2 }}>
          Web Developer
        </Typography>
        <Typography sx={{ color: 'text.secondary', maxWidth: 720 }}>
          Dedicated to crafting beautiful and functional websites that make ideas come alive through code. Explore my portfolio to see my passion for web development in action.
        </Typography>
      </Box>

      <Stack alignItems="center" sx={{ width: 160 }}>
        <Avatar alt="Krishna" src={profileUrl} sx={{ width: 160, height: 160, border: '6px solid rgba(242,200,160,0.4)', boxShadow: '0 8px 30px rgba(60,40,20,0.12)' }} />
      </Stack>
    </Box>
  );
}
