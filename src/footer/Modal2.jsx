import { ChatIcon } from "@chakra-ui/icons";
import "./ChatModal.css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
export default function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <ChatIcon onClick={onOpen} id="charIcon" />

      <Modal
        closeOnEsc={true}
        blockScrollOnMount={false}
        // closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        >
        <ModalContent
          color="green"
          id="chatModal"
          w="300px"
          h="400px"
          position="absolute"
          top="30%"
          left="78%"
        >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
