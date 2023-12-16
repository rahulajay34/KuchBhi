import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Text,
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

export default function Explore() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Link
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        color="#2A2A2A"
        fontWeight="bold"
        mr="8px"
        _hover={{ color: "#E51075", textDecoration: "none" }}
      >
        Explore
      </Link>

      <Drawer
        isOpen={isOpen}
        placement="top"
        mt="100px"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent h="550px" >
          <DrawerCloseButton />
          <DrawerHeader mt="20px">
            <Flex w="80%" mx="auto">
              <Box p="4"  w="450px" h="150px" >
                <Text fontSize="14px" w="160px" mt="-15px" fontWeight="bold">
                  Explore All Projects
                </Text>
                <Flex bg="gray.50">
                  <Image
                    h="115px"
                    w="100px"
                    mt="10px"
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fHww"
                  />
                  <Link
                    href="https://www.indiegogo.com/explore/all?project_type=campaign"
                    mt="10px"
                    _hover={{ color: "#E5107", textDecoration: "none" }}
                    textAlign="center"
                  >
                    Clever Things For Curious Humans™
                  </Link>
                  <Image
                    h="115px"
                    w="100px"
                    mt="10px"
                    src="https://media.istockphoto.com/id/646168884/photo/interior-hipster-wall-bicycle-with-shelf-template.webp?b=1&s=170667a&w=0&k=20&c=rLhgfP5ED8cKQUCbdutMuP0oRz3I9x-CIQhb-9RVnmo="
                  />
                </Flex>
              </Box>

              <Box p="4"  w="130px">
                <Text fontSize="14px" w="120px" mt="-15px" fontWeight="bold">
                  Our Top 10 Finds
                </Text>

                <Image
                  h="100%"
                  w="100%"
                  mt="10px"
                  src="https://media.istockphoto.com/id/1359675618/photo/young-man-sitting-on-a-gray-sofa-caresses-the-head-of-a-brown-tabby-cat.webp?b=1&s=170667a&w=0&k=20&c=SLPzt0_K6B5PAL3pHJ-HqXkC6b1yO1bKK0od7n5m_38="
                />
              </Box>

              <Box p="4"  w="130px">
                <Text fontSize="14px" w="120px" mt="-15px" fontWeight="bold">
                  Team Favourites
                </Text>

                <Image
                  h="100%"
                  w="100%"
                  mt="10px"
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwdGFyaW5lcnxlbnwwfHwwfHx8MA%3D%3D"
                />
              </Box>

              <Box p="4"  w="130px">
                <Text fontSize="14px" w="140px" mt="-15px" fontWeight="bold">
                  Spend Under $100
                </Text>
                <Image
                  h="100%"
                  mt="10px"
                  w="100%"
                  src="https://e1.pxfuel.com/desktop-wallpaper/883/602/desktop-wallpaper-premium-vector-of-black-and-white-abstract-map-contour-lines-topographic-design-thumbnail.jpg"
                />
              </Box>
              <Box p="4"  w="130px">
                <Text fontSize="14px" w="120px" mt="-15px" fontWeight="bold">
                  Food & Drink
                </Text>

                <Image
                  h="100%"
                  w="250%"
                  mt="10px"
                  src="https://www.shutterstock.com/image-photo/black-drip-electric-coffee-machine-600nw-2111869688.jpg"
                />
              </Box>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex bg="gray.50">
              <Box w="500px" h="270px">
                <Flex>
                  <Box>
                    <Link
                      display="block"
                      mt="40px"
                      ml="130px"
                      fontSize="14px"
                      fontWeight="bold"
                      href="https://www.indiegogo.com/explore/tech-innovation"
                    >
                      TECH & INNOVATION
                    </Link>
                    <br />
                    <Link
                      ml="130px"
                      href="https://www.indiegogo.com/explore/tech-innovation"
                    >
                      Audio
                    </Link>
                    <br />
                    <Link
                      ml="130px"
                      href="https://www.indiegogo.com/explore/camera-gear"
                    >
                      Camera Gear
                    </Link>
                    <br />
                    <Link
                      ml="130px"
                      href="https://www.indiegogo.com/explore/education"
                    >
                      Education
                    </Link>
                    <br />
                    <Link
                      ml="130px"
                      href="https://www.indiegogo.com/explore/energy-green-tech"
                    >
                      Energy & Green Tech
                    </Link>
                    <br />
                    <Link
                      ml="130px"
                      href="https://www.indiegogo.com/explore/fashion-wearables"
                    >
                      Fashion & Wearables
                    </Link>
                    <br />
                    <Link
                      ml="130px"
                      href="https://www.indiegogo.com/explore/food-beverages"
                    >
                      Food & Beverages
                    </Link>
                    <br />
                  </Box>
                  <Box mt="85" ml="20px">
                    <Link href="">Health & Fitness</Link>
                    <br />
                    <Link href="">Home</Link>
                    <br />
                    <Link href="">Phone & Accessories</Link>
                    <br />
                    <Link href="">Productivity</Link>
                    <br />
                    <Link href="">Transportation</Link>
                    <br />
                    <Link href="">Travel & Outdoors</Link>
                    <br />
                  </Box>
                </Flex>
              </Box>

              <Box w="380px" h="270px">
                <Flex>
                  <Box>
                    <Link
                      display="block"
                      mt="40px"
                      fontSize="14px"
                      fontWeight="bold"
                      href="https://www.indiegogo.com/explore/creative-works"
                    >
                      CREATIVE PROJECTS
                    </Link>
                    <br />
                    <Link href="">Art</Link>
                    <br />
                    <Link href="">Comics</Link>
                    <br />
                    <Link href="">Dance & Theater</Link>
                    <br />
                    <Link href="">Film</Link>
                    <br />
                    <Link href="">Music</Link>
                    <br />
                    <Link href="">Photography</Link>
                    <br />
                  </Box>
                  <Box mt="85px">
                    <Link href="">Podcasts.Blogs & Vlogs</Link>
                    <br />
                    <Link href="">Tabletop Games</Link>
                    <br />
                    <Link href="">Vedio Games</Link>
                    <br />
                    <Link href="">Web Series & TV Shows</Link>
                    <br />
                    <Link href="">Writing & Publishing</Link>
                    <br />
                  </Box>
                </Flex>
              </Box>

              <Box w="500px" h="270px">
                <Link
                  display="block"
                  mt="40px"
                  fontSize="14px"
                  fontWeight="bold"
                  href="https://www.indiegogo.com/explore/community-projects"
                >
                  COMMUNITY PROJECTS
                </Link>
                <br />
                <Link href="https://www.indiegogo.com/explore/culture">
                  Culture
                </Link>
                <br />
                <Link href="https://www.indiegogo.com/explore/environment">
                  Environment
                </Link>
                <br />

                <Link href="https://www.indiegogo.com/explore/human-rights">
                  Human Rights
                </Link>
                <br />
                <Link href="https://www.indiegogo.com/explore/local-businesses">
                  Local Businesses
                </Link>
                <br />
                <Link href="https://www.indiegogo.com/explore/wellness">
                  Wellness
                </Link>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
