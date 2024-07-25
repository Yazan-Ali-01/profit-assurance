// ExpandableArrowButton.jsx
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ExpandableArrowButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ width: 40 }}
      animate={{ width: hovered ? 120 : 40 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: hovered ? '#FF6F00' : 'transparent',
        borderRadius: 4,
        overflow: 'hidden',
        cursor: 'pointer',
        padding: hovered ? '0 8px' : '0 0',
        border: hovered ? 'none' : '1px solid white',
        height: 40,
        justifyContent: 'center',
      }}
    >
      <ArrowForwardIos
        fontSize='small'
        sx={{ color: 'white' , transition: 'color 0.3s', fontSize: 16 }}
      />
      {hovered && (
        <Typography
          variant="body2"
          sx={{
            color: 'white',
            marginLeft: '8px',
            whiteSpace: 'nowrap',
            fontSize: 14, // Match the font size with the button style
          }}
        >
          READ MORE
        </Typography>
      )}
    </motion.div>
  );
};

export default ExpandableArrowButton;
