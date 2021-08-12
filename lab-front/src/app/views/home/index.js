import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { NavBar } from '../../components'
import '../../../App.css'
import { Link as ReachLink } from "@reach/router"
import { Link } from 'react-router-dom'


function Home(){
    return(
        <section className="App">
             <NavBar/>
             <section className="center">
             <Flex
                direction = "column"
                width="400px"
                height= "50vh"
                justify="space-around"
                mt="100px"
             >
                <h1>tumblr</h1>
                <h3>Crea, observa, conversa y encuentra a gente como tú.</h3>
               <Link as={ReachLink} to="/signup">
                   <Button w="380px" colorScheme="green" color="black">Sign Up</Button>
               </Link>

               <Link as={ReachLink} to="/login">
                    <Button w="380px" colorScheme="blue" color="black">Login</Button>
                </Link>
              </Flex>

               </section>

        </section>
    )
}

export default Home