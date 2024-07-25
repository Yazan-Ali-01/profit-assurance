import React from 'react';
import { useTheme } from '@mui/material/styles';

const AboutCompanyChip = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFECE6', // Use a theme color
        color: theme.palette.primary.main, // Use a theme color
        borderRadius: '9999px',
        padding: '2px 16px',
        fontSize: '0.875rem',
        border: `1px solid ${theme.palette.warning.main}`, // Use a theme color for the border
      }}
      className='font-semibold'
    >
      About Company
    </div>
  );
};

export default AboutCompanyChip;
