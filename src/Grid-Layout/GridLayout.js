import React from 'react';
import { Box } from '@chakra-ui/react';
import { WidthProvider, Responsive } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

function GridLayout({ visibleBoxes }) {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ];
  return (
    <ResponsiveGridLayout
      className="layout"
      layout={layout}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      {visibleBoxes.a && (
        <Box key="a" bg="tomato" h="100%">
          a
        </Box>
      )}
      {visibleBoxes.b && (
        <Box key="b" bg="blue.500" h="100%">
          b
        </Box>
      )}
      {visibleBoxes.c && (
        <Box key="c" bg="green.500" h="100%">
          c
        </Box>
      )}
    </ResponsiveGridLayout>
  );
}

export default GridLayout;
