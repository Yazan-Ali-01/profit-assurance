import './App.css';
import { Box, CssBaseline } from '@mui/material';
import HeroSection from './components/Sections/HeroSection';
import AboutCompanySection from './components/Sections/AboutCompanySection';
import InfoCardsGroup from './components/InfoCard/InfoCardsGroup';
import AdManagementSection from './components/Sections/AdManagementSection';
import PowerOfAdCampaignsSection from './components/Sections/PowerOfAdCampaignsSection';
import ColumnCardsSection from './components/Sections/ColumnCardsSection';
import StrategicToolsSection from './components/Sections/StrategicToolsSection';
import FooterSection from './components/Sections/FooterSection';
import ScrollToTopButton from './components/ScrollToTopButton';


function App() {

  return (
    <Box sx={{ position: 'relative' }}>
      <CssBaseline />
      <ScrollToTopButton />
      <HeroSection />
      <InfoCardsGroup />
      <AboutCompanySection /> 
      <AdManagementSection />
      <PowerOfAdCampaignsSection />
      <ColumnCardsSection /> 
      <StrategicToolsSection />
      <FooterSection />
      {/* <Box sx={{ height: '200px', bgcolor: 'white ' }} /> for second section replacement */}
    </Box>
  );
}

export default App;
