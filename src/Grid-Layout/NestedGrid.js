import React from 'react';
import { Box } from '@chakra-ui/react';
import { WidthProvider, Responsive } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

function NestedGrid({ gridKey, bgColor, boxCount }) {
  const layout = Array.from({ length: boxCount }, (_, i) => ({
    i: `${gridKey}-${i + 1}`,
    x: i,
    y: 0,
    w: 1,
    h: 2,
  }));

  return (
    <ResponsiveGridLayout
      className="layout"
      layout={layout}
      cols={{
        lg: boxCount,
        md: boxCount,
        sm: boxCount,
        xs: boxCount,
        xxs: boxCount,
      }}
    >
      {layout.map((item) => (
        <Box key={item.i} bg={bgColor} h="100%">
          {item.i}
        </Box>
      ))}
    </ResponsiveGridLayout>
  );
}

export default NestedGrid;
