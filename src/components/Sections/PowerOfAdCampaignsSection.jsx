import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import AdSectionChip from '../AdSectionChip'; // Assuming you're using the same chip component

const PowerOfAdCampaignsSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: '100px 20px', textAlign: 'center', backgroundColor: 'white' }}>
      <Box sx={{ display: 'inline-flex', justifyContent: 'center', marginBottom: '20px' }}>
        <AdSectionChip label="DRIVING SUCCESS ACROSS INDUSTRIES" />
      </Box>
      <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', marginBottom: '20px', maxWidth: '650px' , marginX: 'auto'}}>
        The Power of Ad Campaigns
      </Typography>
      <Typography variant="body1" sx={{ color: theme.palette.text.secondary, maxWidth: '750px', margin: '0 auto' }}>
        Ad campaigns play a crucial role in the success of businesses and organizations across various industries. Here are some key reasons highlighting their importance.
      </Typography>
    </Box>
  );
};

export default PowerOfAdCampaignsSection;
