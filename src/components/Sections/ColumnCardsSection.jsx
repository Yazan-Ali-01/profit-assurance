// ColumnCardsSection.jsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import ColumnCard from '../ColumnCard';

const ColumnCardsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardsData = [
    { number: '01', title: 'Brand Awareness', description: 'Ad campaigns are instrumental in introducing your brand, products, or services to your target audience. They help create familiarity and recognition, laying the foundation for customer trust and loyalty.' },
    { number: '02', title: 'Audience Engagement', description: 'Effective ad campaigns engage your audience, encouraging interaction and fostering a connection between your brand and your customers.' },
    { number: '03', title: 'Driving Sales and Conversions', description: 'Strategically designed ad campaigns can drive sales and conversions by highlighting your products or services compellingly.' },
    { number: '04', title: 'Market Positioning', description: 'Ad campaigns help position your brand in the market, differentiating you from competitors and establishing your brand’s identity.' },
    { number: '05', title: 'Measurable Results', description: 'With the right tools, you can measure the effectiveness of your ad campaigns, gaining insights that inform future strategies.' },
  ];

  return (
    <Box sx={{ position: 'relative', height: '550px', background: 'url(https://maxbizz.s3.amazonaws.com/images/fservice4.jpg) center/cover', display: 'flex' }}>
      {cardsData.map((card, index) => (
        <Box
          key={index}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
          sx={{
            flex: 1,
            position: 'relative',
            '&:not(:last-child)::after': {
              content: '""',
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '1px',
              backgroundColor: 'white',
              opacity: 0.5,
            }
          }}
        >
          <ColumnCard
            number={card.number}
            title={card.title}
            description={card.description}
            hovered={hoveredCard === index}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ColumnCardsSection;
