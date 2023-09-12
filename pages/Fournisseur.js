import axios from "axios";
import Navbar from "./Navbar";
import Client from "./components/contenu/Client";
import ListeF from "./components/contenu/ListeFournisseur";
import Fournisseur from "./components/contenu/Fournisseur";

export default function Cli({data}){
 
    return (
        <>
        <Navbar/>
            {/* <Dashboard/> */}
            <Fournisseur/>
            <ListeF data={data}/>
        </>
    )  
}
export async function getServerSideProps() {
    const res = await axios.get("http://localhost:8000/api/fournisseurs");
    // console.log(res);
    const data = res.data;
  
    return {
      props: {
        data,
      },
    };
  }