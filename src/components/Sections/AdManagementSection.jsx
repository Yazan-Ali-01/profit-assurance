import { ArrowForward } from '@mui/icons-material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import AdSectionChip from '../AdSectionChip';

const AdManagementSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      padding: '0px 20px',
      backgroundImage: 'url(https://profit-assurance.com/wp-content/uploads/2020/09/bg1-home1.jpg)',
      backgroundSize: 'cover', // Ensure the image covers the entire box
      backgroundPosition: 'center', // Center the image
      backgroundRepeat: 'no-repeat', // Prevent repeating
      color: 'white'
    }}>

      <Grid container spacing={8} alignItems="center" maxWidth="1200px" margin="0 auto">
        <Grid item xs={12} md={6}>
          <Box sx={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <AdSectionChip label='INNOVATIVE AD MANAGEMENT'/>
            <Typography variant="h3" component="h1" sx={{ marginBottom: '20px' , fontSize: 43, fontWeight: 500,maxWidth: 500, textAlign: 'start' , marginTop: '10px'}}>
              Profit Assurance Technology: Elevate Your Advertising Campaigns
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: theme.palette.primary.main,
                color: 'white',
                mb: 2,
                textTransform: 'none', 
                width: '100%',
                paddingX: '20px', // Add padding for horizontal space
                paddingY: '15px',
                fontWeight: '600',
                fontSize: 15,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center', // Ensure text and icon are centered vertically
                '&:hover': { bgcolor: theme.palette.primary.dark },
              }}
              endIcon={<ArrowUpwardIcon fontSize="small" />}
            > 
              Development Excellence
            </Button>
            <Typography variant="body1" sx={{ marginBottom: '20px', textAlign: 'start', width: '100%',fontWeight:200, fontSize: 18, paddingX: '30px' }}>
              Our experienced development team collaborates closely with your marketing experts to craft compelling ad creatives optimized for diverse platforms and devices.
            </Typography>
            <Button

              variant="outlined"
              sx={{
                textTransform: 'none', 
                fontSize: 16,
                borderColor: 'white',
                color: 'white',
                marginBottom: '10px',
                bgcolor: '#3F4148',
                paddingY: '12px',
                width: '100%',
                paddingX: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '&:hover': { borderColor: theme.palette.primary.main, color: theme.palette.primary.main },
              }}
              endIcon={<ArrowForward fontSize="small" />}
            >
              Technical Precision
            </Button>
            <Button

              variant="outlined"
              sx={{
                    textTransform: 'none', 
                    fontSize: 16,
                borderColor: 'white',
                color: 'white',
                marginBottom: '10px',
                bgcolor: '#3F4148',
                paddingY: '12px',
                width: '100%',
                paddingX: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '&:hover': { borderColor: theme.palette.primary.main, color: theme.palette.primary.main },
              }}
              endIcon={<ArrowForward fontSize="small" />}
            >
              Publication Strategy
            </Button>
            <Button

              variant="outlined"
              sx={{
                    textTransform: 'none', 
                    fontSize: 16,
                borderColor: 'white',
                color: 'white',
                marginBottom: '10px',
                bgcolor: '#3F4148',
                paddingY: '12px',
                width: '100%',
                paddingX: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '&:hover': { borderColor: theme.palette.primary.main, color: theme.palette.primary.main },
              }}
              endIcon={<ArrowForward fontSize="small" />}
            >
              Continuous Optimization
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://profit-assurance.com/wp-content/uploads/2020/09/image2-home1.jpg"
            alt="Ad Management"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdManagementSection;
