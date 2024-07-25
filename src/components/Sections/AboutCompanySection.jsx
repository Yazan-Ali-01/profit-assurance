// AboutCompanySection.jsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import AboutCompanyChip from '../AboutCompanyChip';
import CustomButton from '../CustomButton';
import SectionLayout from '../SectionLayout';

const AboutCompanySection = () => {
  return (
    <SectionLayout>
      <Grid container spacing={4} alignItems="flex-start" sx={{margin: 0 , padding:0}}>
        <Grid item xs={12} md={7}>
          <img
            src="https://profit-assurance.com/wp-content/uploads/2020/09/image1-home1.png"
            srcSet="
              https://profit-assurance.com/wp-content/uploads/2020/09/image1-home1.png 696w,
              https://profit-assurance.com/wp-content/uploads/2020/09/image1-home1-300x280.png 300w
            "
            sizes="(max-width: 696px) 100vw, 696px"
            alt="Company Image"
            loading="lazy"
            decoding="async"
            style={{ width: '100%', borderRadius: '10px', marginTop: '-40px' }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 4 }} >
            <AboutCompanyChip />
            <Typography variant="h5" component="h3" sx={{ marginTop: '10px', marginBottom: '20px', fontWeight: 600, fontSize:40, textAlign: 'start' }}>
              Profit Assurance Technology
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px', textAlign: 'start', fontWeight: 100, fontSize: 18 }}>
              Welcome to our comprehensive ad management, development, and publication solutions converge to elevate your advertising campaigns needs.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '30px', textAlign: 'start', fontWeight: 100, fontSize: 18 }}>
              We understand that successful ad management requires a synergy between innovative development and strategic publication strategies.
            </Typography>
            <CustomButton variant='contained' onHoverColor='black'>EXPLORE MORE</CustomButton>
          </Box>
        </Grid>
      </Grid>
    </SectionLayout>
  );
};

export default AboutCompanySection;
