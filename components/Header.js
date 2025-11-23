import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
  const router = useRouter();

  const NavButton = ({ href, children }) => (
    <Link href={href} passHref legacyBehavior>
      <Button
        color={router.pathname === href ? 'primary' : 'inherit'}
        sx={{
          ml: 1,
          bgcolor: router.pathname === href ? 'primary.main' : 'transparent',
          color: router.pathname === href ? '#fff' : 'text.primary'
        }}
      >
        {children}
      </Button>
    </Link>
  );

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 6 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 800, letterSpacing: 1 }}>KRISHNA PRADHAN</Typography>
        </Box>
        <Box>
          <NavButton href="/">Home</NavButton>
          <NavButton href="/projects">Projects</NavButton>
          <NavButton href="/contact">Contact</NavButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
