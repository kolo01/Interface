import axios from "axios";
import Navbar from "./Navbar";
import Client from "./components/contenu/Client";
import Dashboard from "./components/contenu/Dashboard";
import ListeC from "./components/contenu/ListeClient";

export default function Cli({data}){
    return (
        <>
        <Navbar/>
            {/* <Dashboard/> */}
            <Client/>
            <ListeC data={data}/>
        </>
    )  
}
export async function getServerSideProps() {
    const res = await axios.get("http://localhost:8000/api/clients");
    // console.log(res);
    const data = res.data;
  
    return {
      props: {
        data,
      },
    };
  }