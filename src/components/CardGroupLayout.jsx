// components/CardGroupLayout.jsx
import { Box } from '@mui/material';

const CardGroupLayout = ({ children, sx = {} }) => (
  <Box sx={{ position: 'relative', zIndex: 1, top: -50, display: 'flex', justifyContent: 'center', alignItems:'center', gap: 2, maxWidth: '1400px', ...sx }}>
    {children}
  </Box>
);

export default CardGroupLayout;
