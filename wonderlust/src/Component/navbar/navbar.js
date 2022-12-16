// import { Link } from "react-scroll";
import {
  Box,
  Flex,
//   Avatar,
  HStack,
  IconButton,
  useDisclosure,
  // useColorModeValue,
  Stack,
  
  // Text,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
// import { FaLaptop } from "react-icons/fa";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

const Reload = () => {
  window.location.reload();
};


  return (
    <>
     {/* <Box
        bg={useColorModeValue("#eaf8f8", "#eaf8f8")}
        px={4}
        className={styles.mainBox}
      ></Box> */}
      <Box
         boxShadow='dark-lg'  
         height={"4.5rem"}
        //  bg='blueviolet'
        // bg={useColorModeValue("blueviolet", "#eaf8f8")}
        // px={4}
        className={styles.mainBox}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"} bg="#d1c2d9"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            justifyContent={{ base: "center", md: "space-between" }}
            w={"100%"}
            p={4}
            spacing={8}
            alignItems={"center"}
          >
            <Box>
             
             
              <Link
                to="home"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                     <Avatar
                        onClick={Reload}
                        boxSize={["10","12","14","16"]}
                        borderRadius="full"
                        className={styles.myLogo}
                         mt={['3','4','4','4']}
                         ml={['1','1','1','2']}
                          size={"md"}
                          src="travel.gif"
                        />
                   
                {/* <Text fontSize="xl" fontWeight="bolder" className="logo">
                <FaLaptop size='40' color="white"/>
                </Text> */}
              </Link>

            </Box>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            >
             
              <Link
                to="support"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Support</div>
              </Link>
              <Link
                to="checkout"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Checkout</div>
              </Link>
              <Link
                to="trip"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Trip</div>
              </Link>
              <Link
                to="hotels"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Hotels</div>
              </Link>
              <Link
                to="admin"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Admin</div>
              </Link>
              <Link
                to="login"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Login</div>
              </Link>
          
             
            
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box
           bg='#d1c2d9'
          pb={4}
          display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                to="support"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Support</div>
              </Link>
              <Link
                to="trip"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Trip</div>
              </Link>
              <Link
                to="hotels"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Hotels</div>
              </Link>
              <Link
                to="admin"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Admin</div>
              </Link>
              <Link
                to="login"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Login</div>
              </Link>
              
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
