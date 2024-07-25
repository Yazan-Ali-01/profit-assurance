// FooterSection.jsx
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FooterSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: 'url("https://profit-assurance.com/wp-content/uploads/2024/07/bg2-home1.png")',
        color: 'white',
        padding: '40px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container maxWidth="1200px" margin="0 auto" alignItems="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h4" sx={{fontSize: 45, fontWeight: '700', mb: 1, textAlign: 'start' }}>
            Ready to elevate your business?
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'start' , fontWeight: '300'}}>
            Let’s achieve success together!
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              '&:hover': {
                backgroundColor: 'black',
              },
            }}
          >
            Get In Touch
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterSection;
