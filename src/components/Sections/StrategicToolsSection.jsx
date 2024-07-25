// StrategicToolsSection.jsx
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import AdSectionChip from '../AdSectionChip';
import { BarChart, Loyalty, TrendingUp } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const StrategicToolsSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url("https://profit-assurance.com/wp-content/uploads/2020/10/bg-overlay-home1.png")',
        backgroundPosition: '0 28%',
        backgroundRepeat: 'no-repeat',
        padding: '100px 0px 0px',
        color: 'black',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Grid container maxWidth="1200px" margin="0 auto" spacing={8}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
            <img
              src="https://profit-assurance.com/wp-content/uploads/2020/10/image3-home1.png"
              alt="Man with laptop"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                transform: 'scale(1.1)',
                transition: 'transform 0.3s ease-in-out',
                position: 'relative',
                top: '20px', // Push the image down by 20px
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
          <Box sx={{ maxWidth: '500px', width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
              <AdSectionChip label="DRIVING GROWTH" />
            </Box>
            <Typography variant="h4" component="h2" sx={{ marginBottom: '20px', textAlign: 'start' }}>
              Strategic Tools for Business Growth
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                    '&:hover': {
                      '.icon-box': {
                        backgroundColor: theme.palette.primary.main,
                      },
                      '.icon': {
                        color: 'white',
                      },
                    },
                  }}
                >
                  <Box
                    className="icon-box"
                    sx={{
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 70,
                      height: 50,
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                      cursor: 'pointer',
                      mr: 2,
                    }}
                  >
                    <TrendingUp
                      className="icon"
                      sx={{ fontSize: 40, color: theme.palette.primary.main, transition: 'color 0.3s' }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" component="h3" sx={{ textAlign: 'start' }}>
                      Driving Growth
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'start' }}>
                      Strategic ad campaigns help businesses reach new audiences and increase revenue.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                    '&:hover': {
                      '.icon-box': {
                        backgroundColor: theme.palette.primary.main,
                      },
                      '.icon': {
                        color: 'white',
                      },
                    },
                  }}
                >
                  <Box
                    className="icon-box"
                    sx={{
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 70,
                      height: 50,
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                      cursor: 'pointer',
                      mr: 2,
                    }}
                  >
                    <BarChart
                      className="icon"
                      sx={{ fontSize: 40, color: theme.palette.primary.main, transition: 'color 0.3s' }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" component="h3" sx={{ textAlign: 'start' }}>
                      Enhancing Brand Perception
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'start' }}>
                      Consistent and creative ad campaigns build a strong, positive brand image.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      '.icon-box': {
                        backgroundColor: theme.palette.primary.main,
                      },
                      '.icon': {
                        color: 'white',
                      },
                    },
                  }}
                >
                  <Box
                    className="icon-box"
                    sx={{
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 70,
                      height: 50,
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                      cursor: 'pointer',
                      mr: 2,
                    }}
                  >
                    <Loyalty
                      className="icon"
                      sx={{ fontSize: 40, color: theme.palette.primary.main, transition: 'color 0.3s' }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" component="h3" sx={{ textAlign: 'start' }}>
                      Building Lasting Relationships
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'start' }}>
                      Engaging ad campaigns foster customer loyalty and trust for long-term success.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StrategicToolsSection;
