import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Link,
  Heading,
  VStack,
} from "@chakra-ui/react";

export default function Dropdown({ firstName, handleLogout }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Heading _hover={{ color: "#E51075" }} as="h4" size="md" onClick={onOpen}>
        {" "}
        {firstName}{" "}
      </Heading>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent style={{ height: "40vh", width: "30vh" }} mt="65px">
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="start">
              <Link href="https://www.indiegogo.com/individuals/35910937/campaigns">
                My Campaigns
              </Link>
              <Link href="https://www.indiegogo.com/individuals/35910937/contributions">
                {" "}
                My Contribution
              </Link>
              <Link href="https://www.indiegogo.com/individuals/35910937">
                Profile
              </Link>
              <Link href="https://www.indiegogo.com/individuals/35910937/edit#/settings">
                Settings
              </Link>
              <Link onClick={handleLogout}>Log Out</Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
