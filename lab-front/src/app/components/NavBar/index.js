import React from 'react'
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link as ReachLink } from "@reach/router"
import { Link } from 'react-router-dom'


import tumblrLogo from '../../assets/images/Tumblr.png'

const NavBar = () => {
    return(
        <Flex  p="4">
        <Box color="blue">
        <img src={tumblrLogo} alt="Tumblr img" width="100px"/>
        </Box>
        <Spacer />
        <Box>
        <Link as={ReachLink} to="/signup">
          <Button colorScheme="green" color="black" mr="4">Sign Up</Button>
        </Link>
        <Link as={ReachLink} to="/login">  
          <Button colorScheme="blue" color="black">Log in</Button>
        </Link>
        </Box>
      </Flex>
    )
}

export default NavBar