import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";

let cardData = {
  posts: [
    {
      image:
        "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/mwzutnsu2czjn3m4zisw",
      funding: "FUNDING",
      title: "MONTEK 2000W Suitcase Power Station X1200 & X2000 ",
      link: "https://www.indiegogo.com/projects/montek-2000w-suitcase-power-station-x1200-x2000/hmco",
      description:
        "2000W AC/1280Wh LFP or 207Wh NMC/ups/stand alone/app 1000w ac in/850-1200w.....",
      category: "ENERGY & GREENTECH",
      link2:
        "https://www.indiegogo.com/projects/montek-2000w-suitcase-power-station-x1200-x2000/hmco",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/r1fgozbl1q3n2n1xbxkf",
      funding: "FUNDING",
      title: "Six Weeks",
      link: "https://www.indiegogo.com/projects/six-weeks/hmco)",
      description:
        "A short film exploring reproductive choices in post-Dobbs America and socially conservative inida.",
      category: "FILM",
      link: "https://www.indiegogo.com/projects/six-weeks/hmco",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/igohre0gu5h7iedpvk3a",
      funding: "FUNDING",
      title: "The Lie Behind The Star-Graphic Novel",
      link: "https://www.indiegogo.com/projects/the-lie-behind-the-star-graphic-novel/hmco)",
      description: "Cosmic adventure. cosmic horror!",
      category: "COMICS",
      // link:"",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/zmhle5jmyfogdyoihrru",
      funding: "FUNDING",
      title: "Giga Design Eye Of Horus Automatic Skeleton Watch",
      link: "https://www.indiegogo.com/projects/ciga-design-eye-of-horus-automatic-skeleton-watch/hmco)",
      description: "Fully Transparent|Skeleton design",
      category: "FASHION AND WEARABLES",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/rszbpblrhpf1pcgcxxhn",
      funding: "FUNDING",
      title: "Soul Trader short film Fund Raiser",
      link: "https://www.indiegogo.com/projects/soul-trader-short-film-fund-raiser/hmco",
      description: "If darkness is near , reach for the light",
      category: "FILM",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },
  ],
};
export default function Search() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink
          onClick={onOpen}
          _hover={{ color: "#E51075", textDecoration: "none" }}
        >
          <img
            style={{ height: "50px" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAaVBMVEX///8hJikAAAAeIyYVGx/j4+QAAAYNFRkABw0bISQiJyj8/P1JTU0AAAPX19gSGRy0t7hER0nv8PFzdXacnp719vaChYbp6emtra4ADRLLzc6QkpK7vb0wMzR9f4BQU1U3OjxdYWNoa2sl9QWsAAACZUlEQVRoge2Y3ZaqMAyFSQqUUqUgKBZQxPd/yElH1/lx6JyLMaxzkW/u2llrk90mTUwSQRAEQRAEQRAEQRAEQRBi2Gw4j2M3ZcdtdftupzH32uP+cq3oOzbSPV6xMPDEOJyrjYRrdADK4SeaPsFgu0nQI5KuL9u6yvpqGpuctHVz4Bc+5SR06X4p2WkuANyNXbqjiPO2/3PJds6AnpkNnyg+HJOX2zwpBfnIKny4GeVPX9cHBIUDp3KXQ7pb3UBIF8tn+LFU4LPVrZ0BZExrOmW94nWA/NZXPuXWga4ipfKiFGNmlcbs1l8Im5w0eDa7j985SidR1FzKGZZFF9usPMQ3f8qAJUbD6slttmJSYbk/f6fMFjO5HQ9r4HTbUqFqY5s13bCJSzm5GdPE+i7Kdbde3t4B5WweeResU7Fcfwd0lm5Z3zrvw9XmezIaA8Vq0JZeaEazbTIhGFjztNWgbqwt6KIhnb8uhx4JjB4ZO++spJZreX2TRk/tKEDpG84n2ivqcf9K3IyMUGlovCF1Hd8lO5O00ffhedo2Gw01/kU73HQYOYqFK2y6ZXlK/TVerl1dn087pC9RBXUqx7Z4hB0t7T+mb5AkVOpzLFwQ8+bh/lT6EDYu1I4zdYNTQ/OUegx0KZrn2dow6oXVFDu+Sz6cZggDnWva6fjU/VwvdUl+7Ge+qpLYQ1bRTPdaVg7XMOGBM+etZurfTJeQ3crfGcOO0LdFOG0NfJc8yhRSHFS+bPsjiqW/w0KFvFwfwbipU61c/+//ezsU9j3eIbMqU04N2+eVIAiCIAiCIAiCIAiCIPzvfAA67htnKF4m8wAAAABJRU5ErkJggg=="
            alt=""
          />
        </BreadcrumbLink>
      </BreadcrumbItem>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent mt="65px">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input ref={initialRef} placeholder="Search here" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} mt={-5}>
              Enter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
