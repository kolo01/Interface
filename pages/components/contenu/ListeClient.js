import { Box, Button, Center, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';

export default function ListeC({data}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [nom,setNom] = useState("")
  const [numero,setNumero] = useState("")
  const [adr,setAdr] = useState("")
  const [dette,setDette] = useState("")
  const [rem,setRem] = useState("")
  const [id,setId] = useState("")
  const toast = useToast()
   const router = useRouter()
   useEffect(()=>{
    Object.values(data)[4].map((data,key)=> {
        setId(data.id),setAdr(data.adresse),setDette(data.detteAnterieur),setNom(data.nomClient),setRem(data.remarqueClient),setNumero(data.numeroCLient)
        })
   },[])
 
   const updateUser = async () =>{
    await axios.put(`http://localhost:8000/api/clients/${id}`,{
      nomClient: nom,
      numeroCLient: numero,
      remarqueClient:rem,
      adresse:adr,
      detteAnterieur: dette
    }).then(()=>{ toast(
      {
        title: 'Client mis a jour.',
        // description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      }
    ),
    router.replace(router.asPath);
  })
  }

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Nom',
            selector: row => row.nomClient,
            sortable: true,
        },
        {
            name: 'Numero',
            selector: row => row.numeroCLient,
            sortable: true,
        },
        {
            name: 'Adresse',
            selector: row => row.adresse,
            sortable: true,
        },
        {
            name: 'Remarque',
            selector: row => row.remarqueClient,
            sortable: true,
        },
        {
            name: 'Dette',
            selector: row => row.detteAnterieur,
            sortable: true,
        },
       
    ];
    const ExpandedComponent = ({data }) => <Center>
       
         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modifier client</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input type="hidden" value={id}/>
                <Box>
                  <Flex mb={5}>
                    <Input
                    type="text"
                      placeholder="Nom du client "
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
                      placeholder="Numero du client "
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
                      placeholder="Adresse du client "
                      mr={5}
                      _placeholder={{
                        color: "black",
                      }}
                    />
                    <Input
                      type="number"
                      value={dette}
                        onChange={(e)=>{setDette(e.target.value)}}
                      placeholder="Dette anterieur "
                      _placeholder={{
                        color: "black",
                      }}
                    />
                  </Flex>
                  <Input type="text"
                  value={rem}
                    onChange={(e)=>{setRem(e.target.value)}} placeholder="Remarques" width={"100%"} mt={5} height={"200px"} _placeholder={{
                    color:"black",
                    textAlign:"center"
                  }}/>
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
        <Button bgColor="blue.300" color={"white"} onClick={onOpen}>Edit</Button>
       
        <Button bgColor="blue.300" color={"white"} type="submit" onClick={async ()=>{ await axios.delete(`http://localhost:8000/api/clients/${Object.values(data)[2]}`),router.replace(router.asPath);}}>Delete</Button>
         </Center> ;
  return (
    <>
      <Box>
      <DataTable
            columns={columns}
            data={Object.values(data)[4]}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
        />
      </Box>
    </>
  );
}   
