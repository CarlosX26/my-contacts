import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import ContactList from "../../components/ContactList"
import Header from "../../components/Header"
import ModalProfile from "../../components/ModalProfile"

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Header openProfile={onOpen} />
      <ContactList />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalProfile />
      </Modal>
    </>
  )
}

export default Dashboard
