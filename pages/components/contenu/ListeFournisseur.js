import { Box, Button, Center, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import DataTable from 'react-data-table-component';

export default function ListeF({data}) {
 
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [nom,setNom] = useState("")
  const [numero,setNumero] = useState("")
  const [adr,setAdr] = useState("")
  const [dette,setDette] = useState("")
  const [rem,setRem] = useState("")
  const [id,setId] = useState("")
  const toast = useToast()
   const router = useRouter()
  
  const handleDelete = async (id)=>{
    await axios.delete(`http://localhost:8000/api/fournisseurs/${id}`);
    router.replace(router.asPath);
  }
 
   const updateUser = async () =>{
    await axios.put(`http://localhost:8000/api/fournisseurs/${id}`,{
      NomFournisseur: nom,
      numeroFourn: numero,
    
      addresse:adr,
     
    }).then(()=>{ toast(
      {
        title: 'Etat de fournisseur mis a jour.',
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
   
        <Center>
          <Flex mt={5} px={10} width={"90%"} bgColor={"darkblue"} color={"white"} justifyContent={"space-between"}>
            <Text> ID</Text>
            <Text> Nom Du Fournisseur</Text>
            <Text> Adresse</Text>
            <Text> Numero</Text>
            <Text> Actions</Text>
          </Flex>
          
        </Center>
      
        {(Object.values(data)[4]||  Object.values(data)[4].length>0)?
        <Center mt={5}>
          <Box width={"100%"}>
          {Object.values(data)[4].map((data,index)=>{
            return(<Center><Flex  mt={5} px={10} py={10} width={"90%"} bgColor={"whiteAlpha.400"} color={"black"} justifyContent={"space-between"}>
              <Text>{data.id}</Text>
              <Text>{data.NomFournisseur}</Text>
              <Text>{data.addresse}</Text>
              <Text>{data.numeroFourn}</Text>
              <Flex>
                 <Button mr={5} onClick={onOpen} onClickCapture={()=>{setNom(data.NomFournisseur)
setNumero(data.numeroFourn)
setAdr(data.addresse),setId(data.id)}}>Edit</Button>
                 <Button onClick={()=> handleDelete(data.id)}>Delete</Button>
              </Flex>
            </Flex>
            </Center>)
          }
            
          )}
          </Box>
        </Center>
         :
         <Center fontSize={"25px"} mt={10} fontWeight={"hairline"} fontStyle={"oblique"}>Aucune Donnée(s)</Center>}
        
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modifier Fournisseurs</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input type="hidden" value={id}/>
                <Box>
                  <Flex mb={5}>
                    <Input
                    type="text"
                      placeholder="Nom du Fournisseur "
                      mr={5}
                      value={nom}
                      onChange={(e)=>{setNom(e.target.value)}}
                      _placeholder={{
                        color: "black",
                      }}
                    />
                    <Input
                      type="number"
                      value={numero}
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
                    value={adr}
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
               
                <Button colorScheme="blue" onClick={()=>{updateUser()}} mr={3}>
                  Valider
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Annuler
                </Button>
               
              </ModalFooter>
            </ModalContent>
          </Modal>
      </Box>
    </>
  );
}   
