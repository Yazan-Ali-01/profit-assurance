import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const InfoCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Card sx={{ minWidth: 375, borderRadius: 2 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: 80, // Increase size for the icon container
                height: 80,
                borderRadius: '50%',
                bgcolor: '#FFF3E9',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mr: 2, // Margin right to space icon from text
              }}
            >
              {icon}
            </Box>
            <Box>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InfoCard;
