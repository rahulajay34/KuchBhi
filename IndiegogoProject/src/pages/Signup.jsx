import React, { useContext, useState, useEffect } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Text,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Checkbox,
} from "@chakra-ui/react";
import { SignupContext } from "../context/SignupContextProvider";
import { AuthSlideContext } from "../context/AuthContextProvider";
function Signup() {
  const {
    isOpenSignup,
    onOpenSignup,
    onCloseSignup,
    initialRefSignup,
    finalRefSignup,
  } = useContext(SignupContext);

  const { setUserDetails, setIsAuth, isAuth } = useContext(AuthSlideContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    newsletter: false,
    termsAgreed: false,
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setUserDetails(formData);
    setIsAuth(true);
  }

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem color="#2A2A2A" fontWeight="bold">
          <BreadcrumbLink
            onClick={onOpenSignup}
            _hover={{ color: "#E51075", textDecoration: "none" }}
            mr="12px"
          >
            Sign Up
          </BreadcrumbLink>

          <Modal
            initialFocusRef={initialRefSignup}
            finalFocusRef={finalRefSignup}
            isOpen={isOpenSignup}
            onClose={onCloseSignup}
          >
            <ModalOverlay />
            <ModalContent h="800px">
              <form onSubmit={handleSubmit}>
                <ModalHeader fontSize="36px" textAlign="center">
                  Welcome!
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text
                    fontSize="16px"
                    color="gray"
                    textAlign="center"
                    mt="-15px"
                  >
                    Sign up to join Indiegogo.
                  </Text>

                  <FormControl onSubmit={handleSubmit}>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      onChange={handleChange}
                      name="firstName"
                      value={formData.firstName}
                      ref={initialRefSignup}
                      placeholder="Your First Name"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      onChange={handleChange}
                      name="lastName"
                      value={formData.lastName}
                      placeholder="Your Last Name"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      onChange={handleChange}
                      name="email"
                      value={formData.email}
                      placeholder="Your Email"
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      onChange={handleChange}
                      name="password"
                      value={formData.password}
                      placeholder="Password"
                    />
                  </FormControl>

                  <Checkbox
                    size="lg"
                    colorScheme="red"
                    borderColor="gray.200"
                    mt="15px"
                  >
                    Sign me up for the Indiegogo newsletter
                  </Checkbox>

                  <Checkbox
                    size="lg"
                    colorScheme="red"
                    borderColor="gray.200"
                    mt="10px"
                  >
                    I agree to the{" "}
                    <Link
                      color="#E51075"
                      textDecoration="underline"
                      href="https://www.indiegogo.com/about/terms"
                    >
                      Terms of Use
                    </Link>{" "}
                    and have read and understand the
                    <Link
                      color="#E51075"
                      textDecoration="underline"
                      href="https://www.indiegogo.com/about/privacy"
                    >
                      Privacy Policy
                    </Link>
                  </Checkbox>
                </ModalBody>

                <ModalFooter>
                  <Button
                    type="submit"
                    value="submit"
                    colorScheme="pink"
                    mr={3}
                    w="100%"
                  >
                    CREATE ACCOUNT
                  </Button>
                </ModalFooter>
                <Text textAlign="center">OR</Text>
                <ModalFooter>
                  <Button colorScheme="facebook" mr={3} w="100%">
                    CONTINUE WITH FACEBOOK
                  </Button>
                </ModalFooter>
                <ModalFooter>
                  <Text fontSize="14px" mb="-10px" color="gray" mr="80px">
                    No posts without your permission.
                  </Text>
                </ModalFooter>

                <ModalFooter>
                  <Box
                    display="flex"
                    width="250px"
                    height="50px"
                    alignItems="center"
                    m="auto"
                    mt="0px"
                  >
                    <Text fontSize="17px" textAlign="center" color="">
                      Already have an account?{" "}
                      <Link
                        href="https://www.indiegogo.com/"
                        fontWeight="bold"
                        fontSize="15px"
                        _hover={{ color: "#E51075" }}
                        textDecoration="underline"
                      >
                        Log In
                      </Link>
                    </Text>
                  </Box>
                </ModalFooter>
              </form>
            </ModalContent>
          </Modal>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
export default Signup;
