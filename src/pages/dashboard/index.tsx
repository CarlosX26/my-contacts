import { Modal, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import ContactList from "../../components/ContactList"
import Header from "../../components/Header"
import ModalNewContact from "../../components/ModalNewContact"
import ModalProfile from "../../components/ModalProfile"

const Dashboard = () => {
  const [modal, setModal] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()

  const toggleModal = (modal: string): void => {
    setModal(modal)
  }

  return (
    <>
      <Header openProfile={onOpen} toggleModal={toggleModal} />
      <ContactList openNewContact={onOpen} toggleModal={toggleModal} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {modal === "profile" && <ModalProfile />}
        {modal === "newContact" && <ModalNewContact />}
      </Modal>
    </>
  )
}

export default Dashboard
