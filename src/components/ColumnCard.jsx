// ColumnCard.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import ExpandableArrowButton from './ExpandableArrowButton';


const ColumnCard = ({ number, title, description, hovered }) => {
  const theme = useTheme(); // Get theme to access primary color

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: hovered ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.3)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'background-color 0.3s ease, padding-bottom 0.3s ease',
        position: 'relative',
        cursor: 'pointer',
        height: '100%',
        backdropFilter: 'blur(5px)',
      }}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={hovered ? { y: -30 } : { y: 0 }}
        transition={{ duration: 0.3 }}
      >
        
      </motion.div>
      <Box sx={{ mt: 'auto', position: 'relative', paddingBottom: hovered ? '150px' : '20px' }}>
        <motion.div
          initial={{ y: 0 }}
          animate={hovered ? { y: -60 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: hovered ? theme.palette.primary.main : 'white',
              mb: 1,
            }}
          >
            {number}
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '10px', textAlign: 'start' }}>
            {title}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          style={{ position: 'absolute', bottom: '20px', left: 0, right: 0, textAlign: 'left', padding: '0 10px'}}
        >
          <Typography variant="body1" sx={{textAlign: 'start'}}>
            {description}
          </Typography>
        </motion.div>
      </Box>
      <ExpandableArrowButton />
    </Box>

  );
};

export default ColumnCard;
