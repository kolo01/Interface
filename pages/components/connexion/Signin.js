import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react'
import axios from 'axios';
import { useState } from 'react';

export default function Signin() {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e)=>{setEmail(e.target.value)}} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'} onClick={async ()=>{
              await axios.post(' https://127.0.0.1:8000/login',{
    email,password
  })}}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
        display={["none","none","none","grid","grid",]}
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            './splash.jpg'
          }
        />
      </Flex>
    </Stack>
  )
}
export async function getServerSideProps() {
  const res = await axios.fetch(' https://127.0.0.1:8000/login',);
  const data = await res.json();
  console.log(res.json())
  return {
    props: {
      data,
    },
  };
}
