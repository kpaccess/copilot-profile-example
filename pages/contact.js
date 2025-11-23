import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";

export default function Contact() {
  return (
    <Container maxWidth="sm">
      <Header />
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
        Contact
      </Typography>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted (local only)");
        }}
      >
        <TextField label="Name" fullWidth sx={{ mb: 2 }} required />
        <TextField
          label="Email"
          type="email"
          fullWidth
          sx={{ mb: 2 }}
          required
        />
        <TextField
          label="Message"
          multiline
          rows={5}
          fullWidth
          sx={{ mb: 2 }}
          required
        />
        <Button variant="contained" type="submit">
          Send
        </Button>
      </Box>
    </Container>
  );
}
