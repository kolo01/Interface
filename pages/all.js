import { Button } from "@chakra-ui/react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./components/footer";
import Dashboard from "./components/contenu/Dashboard";

export default function All({data,data2,data3}) {
    return(<>
        <Navbar/>
    
        <Dashboard numC={Object.values(data)[4].length} numF={Object.values(data2)[4].length} numP={Object.values(data3)[4].length}/>
        <Footer/>
    </>)
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:8000/api/clients');
    const res2 = await fetch('http://localhost:8000/api/fournisseurs');
    const res3 = await fetch('http://localhost:8000/api/produits');
    // const res4 = await fetch('http://localhost:8000/api/clients');
    const data = await res.json();
    const data2 = await res2.json();
    const data3 = await res3.json();
  
    return {
      props: {
        data,
        data2,
        data3,
      },
    };
  }