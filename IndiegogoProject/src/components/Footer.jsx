import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  Box,
  Text,
  Link,
  Heading,
  Input,
  Container,
  Button,
  Flex,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
} from "@chakra-ui/react";

export default function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <div>
      <Flex
        h="auto"
        mt={10}
        bg="rgb(245,245,245)"
        direction={{ base: "column", md: "column", lg: "column" }}
        justify="space-around"
      >
        <Box
          h="auto"
          mt={71}
          display="flex"
          flexDirection={{ base: "column-reverse", md: "row", lg: "row" }}
          justifyContent={{ md: "space-evenly", lg: "space-around" }}
        >
          <Box
            h="auto"
            w={{ md: "45%", lg: "60%" }}
            mt={2}
            display="flex"
            justifyContent="space-around"
            flexDirection={{ base: "column", md: "column", lg: "row" }}
          >
            <Box
              w={{ base: "90%", sm: "45%", md: "50%", lg: "23%" }}
              mb={4}
              px={{ base: 2, md: 4 }}
              m={{ md: "auto", lg: "0px" }}
            >
              <Text color="#6A6A6A" fontSize={{ base: "16px", md: "18px" }}>
                EXPLORE
              </Text>
              <Box mt={2}>
                <Link>What We Do</Link> <br />
                <Link>Funding</Link> <br />
              </Box>
            </Box>

            <Box
              m={{ md: "auto", lg: "0px" }}
              w={{ base: "90%", sm: "45%", md: "50%", lg: "23%" }}
              mb={4}
              px={{ base: 2, md: 4 }}
            >
              <Text color="#6A6A6A" fontSize={{ base: "16px", md: "18px" }}>
                ABOUT
              </Text>
              <Box mt={2}>
                <Link>About Us</Link> <br />
                <Link>Blog</Link> <br />
                <Link>Trust & Safety</Link> <br />
                <Link>Help & Support</Link> <br />
                <Link>Press</Link> <br />
                <Link>Careers</Link> <br />
                <Link>Contact</Link> <br />
              </Box>
            </Box>

            <Box
              m={{ md: "auto", lg: "0px" }}
              w={{ base: "90%", sm: "45%", md: "60%", lg: "23%" }}
              mb={4}
              px={{ base: 2, md: 4 }}
            >
              <Text color="#6A6A6A" fontSize={{ base: "16px", md: "18px" }}>
                ENTREPRENEURS
              </Text>
              <Box mt={2}>
                <Link>How It Works</Link> <br />
                <Link>Indiegogo vs. Kickstarter</Link> <br />
                <Link>Education Center</Link> <br />
                <Link>Experts Directory</Link> <br />
                <Link>Fees</Link> <br />
                <Link>Enterprise</Link> <br />
                <Link>China</Link> <br />
              </Box>
            </Box>
          </Box>

          <Box
            h="auto"
            w={{ base: "100%", md: "23%" }}
            mt={{ base: 7, md: 0 }}
            ml={{ base: 0, md: 170 }}
            px={{ base: 2, md: 4 }}
            textAlign="center"
          >
            <img
              style={{ height: "50px", display: "block", margin: "auto" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmkHZBtXtsKrp8I3Bk1FaXIY4NPLXjKRvig&usqp=CAU"
              alt=""
            />
            <Heading as="h4" size="md" textAlign="center">
              Find it first on Indiegogo
            </Heading>

            <Text textAlign="center" mt={2}>
              Discover new and clever products in the Indiegogo newsletter
            </Text>
            <Container>
              <Input
                borderRadius="0"
                mt={8}
                h="50px"
                borderColor="gray.200"
                size="md"
                type="email"
                name=""
                id="emailInput"
                placeholder="Your Email Address"
              />
              <br />
              <input
                style={{ textAlign: "center", marginTop: "15px" }}
                type="checkbox"
                name=""
                id="checkbox"
              />{" "}
              I agree to the{" "}
              <Link href="https://www.indiegogo.com/about/terms">
                <a style={{ textDecoration: "underline", color: "#E51075" }}>
                  Terms of Use
                </a>
              </Link>{" "}
              and have read and understand the{" "}
              <Link href="https://www.indiegogo.com/about/privacy">
                <a style={{ textDecoration: "underline", color: "#E51075" }}>
                  Privacy Policy
                </a>{" "}
              </Link>
              <br />
            </Container>
            <button
              style={{
                backgroundColor: "#E51075",
                color: "white",
                width: "100%",
                height: "40px",
                marginTop: "15px",
              }}
            >
              Sign Me Up
            </button>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          w={{ base: "100%", md: "100%", lg: "450px" }}
          h="70px"
          ml={{ base: "0px", md: "0px", lg: "5vw" }}
        >
          <Box>
            <Button
              border="1px"
              borderColor="gray"
              fontSize="12px"
              w="200px"
              borderRadius="0px"
              onClick={onOpen}
            >
              {" "}
              Rs.Indian Rupee (INR)
            </Button>

            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Currency Settings</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <Text>
                    Changing the currency will allow you to view estimates of
                    the campaign goal and contribution amounts in the currency
                    you choose.
                  </Text>
                  <br />
                  <Text>
                    You will still be charged in the campaign’s original
                    currency. The amount charged by your card issuer in your
                    local currency may differ from our estimate, based on their
                    exchange rate and any applicable fees.
                  </Text>
                  <Select
                    placeholder="Rs.Indian Rupee (INR)"
                    w="220px"
                    mt="20px"
                  >
                    <option value="option1">$ Hong Kong Dollar(HKD)</option>
                    <option value="option2">UAE Dirham(AED)</option>
                    <option value="option3">$Austrailian Dollar(AUD)</option>
                    <option value="option3">$Canadian Dollar(CAD)</option>
                    <option value="option3">Rs.Indian Rupee(INR)</option>
                    <option value="option3">DO Not Convert Currency</option>
                  </Select>
                </ModalBody>

                <ModalFooter>
                  <Button
                    onClick={onClose}
                    colorScheme=""
                    mr={3}
                    color="#E51075"
                    border="1px"
                    borderColor="gray"
                    w="120px"
                    borderRadius="2px"
                  >
                    Cancel
                  </Button>
                  <Button
                    _hover={{ bg: "#E51075" }}
                    bg="#E51075"
                    color="white"
                    border="1px"
                    w="120px"
                    borderRadius="2px"
                  >
                    Save
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            w="190px"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              w="200px"
            >
              <a href="https://www.facebook.com/Indiegogo">
                <img
                  src="https://img.icons8.com/?size=24&id=118491&format=png"
                  alt=""
                />
              </a>
              <a href="https://twitter.com/indiegogo">
                <img
                  src="https://img.icons8.com/?size=24&id=102916&format=png"
                  alt=""
                />
              </a>
              <a href="https://www.youtube.com/indiegogo">
                <img
                  src="https://img.icons8.com/?size=24&id=85162&format=png"
                  alt=""
                />
              </a>
              <a href="https://instagram.com/indiegogo">
                <img
                  src="https://img.icons8.com/?size=24&id=85154&format=png"
                  alt=""
                />
              </a>
              <a href="https://www.linkedin.com/company/indiegogo">
                <img
                  src="https://img.icons8.com/?size=30&id=98960&format=png"
                  alt=""
                />
              </a>
              <a href="https://open.spotify.com/show/7bEdWFbpv3rKHotpDzcCV4?si=6a5cee9902214695&nd=1">
                <img
                  src="https://img.icons8.com/?size=30&id=99983&format=png"
                  alt=""
                />
              </a>
            </Box>
          </Box>
        </Box>
        <hr
          style={{
            border: "1px solid lightgray",
            margin: "auto",
            marginTop: "20px",
            width: "95%",
          }}
        />

        <Box
          w="70%"
          mt="20px"
          display="flex"
          justifyContent="space-evenly"
          m="auto"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
        >
          <Box
            w={{ base: "100%", md: "100%", lg: "31%" }}
            display="flex"
            justifyContent="space-evenly"
          >
            <Link
              fontSize={{ base: "11px", md: "13px", lg: "13px" }}
              href="https://www.indiegogo.com/about/terms"
            >
              {" "}
              Terms of use
            </Link>
            <Link
              fontSize={{ base: "11px", md: "13px", lg: "13px" }}
              href="https://www.indiegogo.com/about/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              fontSize={{ base: "11px", md: "13px", lg: "13px" }}
              href="https://www.indiegogo.com/"
            >
              Cookie Policy
            </Link>
          </Box>
          <Box
            w={{ base: "100%", md: "100%", lg: "31%" }}
            display="flex"
            justifyContent={{ base: "space-between", md: "space-around" }}
          >
            <Link
              fontSize={{ base: "11px", md: "13px", lg: "13px" }}
              href="https://www.indiegogo.com/"
            >
              Do Not Sell My Personal Information
            </Link>
            <Link
              fontSize={{ base: "11px", md: "13px", lg: "13px" }}
              href="https://www.indiegogo.com/about/accessibility"
            >
              Accessibility
            </Link>
          </Box>
          <Text
            fontSize={{ base: "11px", md: "13px", lg: "13px" }}
            textAlign={{ base: "center", md: "center", lg: "none" }}
          >
            @ 2023 Indiegogo.Inc.All Rights Reserved
          </Text>
        </Box>
      </Flex>
    </div>
  );
}
