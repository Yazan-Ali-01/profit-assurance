import React from 'react'
import { Analytics, MonetizationOnOutlined, TrackChangesOutlined } from '@mui/icons-material';
import InfoCard from './InfoCard';
import CardGroupLayout from '../CardGroupLayout';


const InfoCardsGroup = () => {
  return (
  <CardGroupLayout>
        <InfoCard icon={<Analytics color='warning' />} title="Advanced Analytic" description="Growth, focus & analysis." />
        <InfoCard icon={<TrackChangesOutlined color='warning' />} title="Corporate Finance" description="Strategy is the foundation." />
        <InfoCard icon={<MonetizationOnOutlined color='warning' />} title="Business Consultation" description="Professional skilled team." />
  </CardGroupLayout>
  )
}

export default InfoCardsGroup