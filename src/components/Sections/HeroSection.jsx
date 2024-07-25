import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import HeroSectionChip from '../HeroSectionChip';
import CustomButton from '../CustomButton'; 

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '120vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        backgroundImage: "url('https://profit-assurance.com/wp-content/uploads/2020/12/slide2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '0 20px',
        color: 'white',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 40,
          right: 45,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src="https://profit-assurance.com/wp-content/uploads/2024/07/1-logowhite.png"
          alt="Logo"
          style={{ width: 275, height: 275 }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        <Box
          sx={{
            flex: '0 0 40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              border: '2px solid white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span className="block w-2 h-2 rounded-full" style={{ backgroundColor: theme.palette.primary.main }}></span>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            maxWidth: '800px',
            padding: '20px',
          }}
        >
          <HeroSectionChip />
          
          <Typography variant="h1" sx={{ mt: 2, fontWeight: 600, fontSize: { xs: 50, sm: 75 } }}>
            New Website
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: 600, fontSize: { xs: 50, sm: 75 } }}>
            Coming Soon!
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, fontSize: 18 }}>
            <strong>Profit Assurance Technology</strong> is building something amazing!
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 18 }}>
            Our new website will be live soon. For now, enjoy the content below.
          </Typography>
          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <CustomButton variant="contained">Explore More</CustomButton>
            <CustomButton variant="outlined">Get In Touch</CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
