import React, { useState } from 'react';
import { ChakraProvider, IconButton, Icon } from '@chakra-ui/react';
import { FaCog } from 'react-icons/fa';
import { useDisclosure } from '@chakra-ui/react';
import SettingsModal from './Grid-Layout/SettingsModal';
import GridLayout from './Grid-Layout/GridLayout';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [visibleBoxes, setVisibleBoxes] = useState({
    a: true,
    b: true,
    c: true,
  });
  const [boxCount, setBoxCount] = useState(3);

  return (
    <ChakraProvider>
      <IconButton
        aria-label="Settings"
        icon={<Icon as={FaCog} />}
        onClick={onOpen}
      />
      <SettingsModal
        isOpen={isOpen}
        onClose={onClose}
        visibleBoxes={visibleBoxes}
        setVisibleBoxes={setVisibleBoxes}
        boxCount={boxCount}
        setBoxCount={setBoxCount}
      />

      <GridLayout visibleBoxes={visibleBoxes} boxCount={boxCount} />
    </ChakraProvider>
  );
}

export default App;
