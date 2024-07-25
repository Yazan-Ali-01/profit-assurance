/* eslint-disable react/prop-types */
import React from 'react';
import { Button, useTheme } from '@mui/material';

const CustomButton = ({ variant, children, color, onHoverColor }) => {
  const theme = useTheme();

  const commonStyles = {
    borderRadius: '3px',
    paddingX: 3.5,
    paddingY: 1.5,
  };

  // Determine the color for contained buttons
  const containedBackgroundColor = color || theme.palette.primary.main;

  // Determine the hover color for contained buttons
  const containedHoverColor = onHoverColor || theme.palette.secondary.main;

  // Determine the color for outlined buttons
  const outlinedColor = color || 'white';

  // Determine the hover color for outlined buttons
  const outlinedHoverBackgroundColor = onHoverColor || 'rgba(33, 66, 100, 0.7)';

  const containedStyles = {
    ...commonStyles,
    bgcolor: containedBackgroundColor,
    '&:hover': {
      bgcolor: containedHoverColor,
    },
  };

  const outlinedStyles = {
    ...commonStyles,
    color: outlinedColor,
    borderColor: outlinedColor,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    '&:hover': {
      backgroundColor: outlinedHoverBackgroundColor,
      borderColor: outlinedHoverBackgroundColor,
    },
  };

  return (
    <Button variant={variant} sx={variant === 'contained' ? containedStyles : outlinedStyles}>
      {children}
    </Button>
  );
};

export default CustomButton;
