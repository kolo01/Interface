import {
  Box,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  InputGroup,
  InputLeftAddon,
  Input,
  Center,
  useToast,
} from "@chakra-ui/react";
import Footer from "../footer";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function Fournisseur() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const add = "Ajout d'un client";
  const [nom,setNom] = useState("")
  const [numero,setNumero] = useState("")
  const [adr,setAdr] = useState("")
  const [dette,setDette] = useState("")
  const [rem,setRem] = useState("")
  const toast = useToast()
  const router = useRouter()
  const registerUser = async () =>{
    await axios.post("http://localhost:8000/api/fournisseurs",{
      NomFournisseur: nom,
      numeroFourn: numero,
    
      addresse:adr
    }).then(()=>{ toast(
      {
        title: 'Client créé.',
        // description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      }
    ),
    router.replace(router.asPath);
  })
  }


  return (
    <>
      <Box>
        <Flex
          textAlign={"center"}
          placeContent={"center"}
          x
          justifyContent={"center"}
        >
          <Button
          mt={5}
            onClick={onOpen}
            bgColor={"blue.500"}
            color={"white"}
            leftIcon={<AiOutlineUserAdd />}
            _hover={{
              color:"blackAlpha.900",
              bgColor:"blue.500",
              opacity:"0.5"
            }}
          >
            Ajouter
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{add}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box>
                  <Flex mb={5}>
                    <Input
                    type="text"
                      placeholder="Nom du Fournisseur "
                      mr={5}
                      onChange={(e)=>{setNom(e.target.value)}}
                      _placeholder={{
                        color: "black",
                      }}
                    />
                    <Input
                      type="number"
                        onChange={(e)=>{setNumero(e.target.value)}}
                      placeholder="Numero du Fournisseur "
                      _placeholder={{
                        color: "black",
                      }}
                    />
                  </Flex>
                  <Flex>
                    <Input
                    type="text"
                      onChange={(e)=>{setAdr(e.target.value)}}
                      placeholder="Adresse du Fournisseur "
                      mr={5}
                      _placeholder={{
                        color: "black",
                      }}
                    />
                   
                  </Flex>
                 
                </Box>
              </ModalBody>

              <ModalFooter>
               
                <Button colorScheme="blue" onClick={()=>{registerUser()}} mr={3}>
                  Valider
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Annuler
                </Button>
               
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Box>
      {/* <Footer /> */}
    </>
  );
}


