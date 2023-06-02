import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

function SettingsModal({
  isOpen,
  onClose,
  visibleBoxes,
  setVisibleBoxes,
  boxCount,
  setBoxCount,
}) {
  const handleToggle = (boxKey) => {
    setVisibleBoxes((prevVisibleBoxes) => ({
      ...prevVisibleBoxes,
      [boxKey]: !prevVisibleBoxes[boxKey],
    }));
  };

  const handleBoxCountChange = (value) => {
    setBoxCount(value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Checkbox
            isChecked={visibleBoxes.a}
            onChange={() => handleToggle('a')}
          >
            Box A
          </Checkbox>
          <Checkbox
            isChecked={visibleBoxes.b}
            onChange={() => handleToggle('b')}
          >
            Box B
          </Checkbox>
          <Checkbox
            isChecked={visibleBoxes.c}
            onChange={() => handleToggle('c')}
          >
            Box C
          </Checkbox>
          <NumberInput
            min={1}
            max={10}
            value={boxCount}
            onChange={handleBoxCountChange}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SettingsModal;
