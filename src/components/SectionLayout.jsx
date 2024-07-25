import { Box } from '@mui/material';

const SectionLayout = ({ children, sx = {} }) => (
  <Box sx={{ padding: '0px 20px', maxWidth: '1300px', margin: '0 auto', ...sx }}>
    {children}
  </Box>
);

export default SectionLayout;
