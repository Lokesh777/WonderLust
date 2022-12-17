import {VStack,Container,Box,Flex} from '@chakra-ui/react';
import { useState } from 'react'
import style from './styles.module.css'

const Register = () =>{

    const [active, setActive] = useState("/")

    return (
        <VStack 
        // mt='5%'
        >
           
                   <Container maxW='md' >
                        {/* <h1 className={style.h1}>Welcome WonderLust</h1> */}
                            <Box>
                                <img className={style.welcome_img} src="https://media.giphy.com/media/jF1oqkXJL0Mda/giphy.gif" alt="" />
                            </Box>

                        <Flex className={style.flex}>
                            <Box className={style.box}>
                            <a href="/register"
                        className={active === "#register" ? "active" : ""}
                        
                        onClick={()=> setActive("/")}
                        >Signup</a>
                            </Box>
                            <Box className={style.box}>
                            <a href="/login_again"
                            className={active === "#login_again" ? "active" : ""}
                        onClick={()=> setActive("/")}
                        >Login</a>
                            </Box>
                        </Flex>
                   </Container>
              
       </VStack>
    )
}
export default Register;