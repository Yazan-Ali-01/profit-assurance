import { useTheme } from '@mui/material/styles';
import React from 'react';

const AdSectionChip = ({ label }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 102, 51, 0.1)',
        color: theme.palette.primary.main,
        borderRadius: '9999px',
        padding: '2px 10px',
        fontSize: '0.775rem',
        border: `1px solid ${theme.palette.warning.main}`,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
      className='font-semibold'
    >
      {label}
    </div>
  );
}

export default AdSectionChip;
