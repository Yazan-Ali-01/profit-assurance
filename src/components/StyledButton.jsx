import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  paddingX: '20px',
  paddingY: '15px',
  fontWeight: '600',
  fontSize: 15,
  '&:hover': { backgroundColor: theme.palette.primary.dark },
}));

export default StyledButton;
