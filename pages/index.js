import { Button } from "@chakra-ui/react";
import Link from "next/link";
import Signin from "./components/connexion/Signin";
import Footer from "./components/footer";
import axios from "axios";

const HomePage = () => {
  return (
   <>
  
   <Signin/>
   <Link href={"/all"}>explore</Link>
   <Footer/>
   </>
  );
};

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:8000/api/users').then();
  // console.log(res)
  const data = res.data

  return {
    props: {
      data,
    },
  };
}

export default HomePage;