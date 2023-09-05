import { Avatar, Box, Button, Center, CloseButton, Flex, HStack, Heading, IconButton, InputGroup, InputLeftElement, Spacer, Tab, TabList, Tabs, VStack, VisuallyHidden } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "postcss";

export default function Navbar(){
    return(
        <>
       <Flex  width={"100%"} mt={10} bg={"blackAlpha.900"} color={"white"} p={5}>
        <Center width={"100%"}>
        <Flex width={"90%"} justify={"space-between"} textAlign={"center"} alignContent={"center"}>
        <Link href="/all">Accueil</Link>
        <Link href="/Client">Client</Link>
        <Link href="/Fournisseur">Fournisseur</Link>
        <Link href="/Produit">Produit</Link>
        <Link href="/Commandes">Commandes</Link>
        <Link href="/Livraison">Livraison</Link>
        <Link href="#">Deconnexion</Link>
        </Flex>
        </Center>
       </Flex>
        </>
    )
}