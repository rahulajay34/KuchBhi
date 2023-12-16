import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Center, Text, Button, Spacer } from "@chakra-ui/react";

import { Image, SimpleGrid, Box, Link, Flex, Heading } from "@chakra-ui/react";

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

    {
      image:
        "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/zmhle5jmyfogdyoihrru",
      funding: "FUNDING",
      title: "CIGA Design Eye of Horous Automatic Skeleton Watch",
      link: "https://www.indiegogo.com/projects/ciga-design-eye-of-horus-automatic-skeleton-watch/hmco",
      description:
        "Fully Transparent | Skeleton Design | Automatic Mechanical|Durable ",
      category: "FASHION & WEARABLES",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },
    {
      image:
        "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/ujetvs78tfqadgubswrw",
      funding: "FUNDING",
      title: "Neakasa M1: Open top self-cleaning cat litter box",
      link: "https://www.indiegogo.com/projects/neakasa-m1-open-top-self-cleaning-cat-litter-box/hmco",
      description: "open-Top design |odor-free waste disposal super easy clean",
      category: "HOME",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/mkkzr9ayou2chesld1ip",
      funding: "FUNDING",
      title: "Velacy: World 1st CD-Quality Low Latency Earbuds",
      link: "https://www.indiegogo.com/projects/velacy-world-s-1st-cd-quality-low-latency-earbuds/hmco",
      description: "LE Audio Powered | Lossless",
      category: "AUDIO",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/jrdobqkyqfy3xgawpu4p",
      funding: "FUNDING",
      title: "PLAUD NOTE:ChatGPT Empowered AI voice Recorder",
      link: "https://www.indiegogo.com/projects/plaud-note-chatgpt-empowered-ai-voice-recorder--2/hmco",
      description: "One-Press Recording| Transcription & Summary",
      category: "AUDIO",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/fz0emaus9gklnokhonvo",
      funding: "FUNDING",
      title: "Elfin Fountain:Pumples Pet WATER Fountain",
      link: "https://www.indiegogo.com/projects/elfin-fountain-pumpless-pet-water-fountain/hmco",
      description: "No Cleaning Hassle|No electricity leak",
      category: "HOME",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/vr5sgs6qegym4muuotyw",
      funding: "FUNDING",
      title: "Producity Redefined: AI-Powered Desk Lamp",
      link: "https://www.indiegogo.com/projects/productivity-redefined-ai-powered-desk-lamp/hmco",
      description: "chat-GPT powered|sun light spectrum",
      category: "PRODUCTIVITY",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/jzate6y2qkaqlxjbzglz",
      funding: "FUNDING",
      title: "Hardcover ROCK POSTER book by DAN BLAKESLEE",
      link: "https://www.indiegogo.com/projects/hardcover-rock-poster-book-by-dan-blakeslee/hmco",
      description: "DRAW THEM IN hardcover rock poster book by musician. ",
      category: "ART",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/ujetvs78tfqadgubswrw",
      funding: "FUNDING",
      title: "Neakasa M1: Open top self-cleaning cat litter box",
      link: "https://www.indiegogo.com/projects/neakasa-m1-open-top-self-cleaning-cat-litter-box/hmco",
      description: "open-Top design |odor-free waste disposal super easy clean",
      category: "HOME",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/k3tcurcnkjepkpmenpfd",
      funding: "FUNDING",
      title: "Senior thesis film",
      link: "https://www.indiegogo.com/projects/senior-thesis-film-the-animals-they-ate/hmco",
      description:
        "An exploration of the ommission from women stories from history",
      category: "FILM",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/mcjmynch5bzl26arjzhc",
      funding: "FUNDING",
      title: "LaSALLE Anthology",
      link: "https://www.indiegogo.com/projects/lasalle-anthology/hmco",
      description: "support 6 emerging filmmakers at once and crew",
      category: "FILM",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/hytw2yiopalmhodtu8qm",
      funding: "FUNDING",
      title: "OBSBOT tail air-AI-Powered PTZ streaming camera",
      link: "https://www.indiegogo.com/projects/obsbot-tail-air-ai-powered-ptz-streaming-camera/hmco",
      description:
        "Expand your video shooting to the next level with AI power .",
      category: "CAMERA GEAR",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/dosjdbll7khfyzj1dk4i",
      funding: "FUNDING",
      title: "Dusty apron expands beyond desserts",
      link: "https://www.indiegogo.com/projects/dusty-apron-expands-beyond-desserts/hmco",
      description: "See what we bring to the table",
      category: "FOOD & BEVERAGES",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },
    {
      image:
        "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/jzate6y2qkaqlxjbzglz",
      funding: "FUNDING",
      title: "Hardcover ROCK POSTER book by DAN BLAKESLEE",
      link: "https://www.indiegogo.com/projects/hardcover-rock-poster-book-by-dan-blakeslee/hmco",
      description: "DRAW THEM IN hardcover rock poster book by musician. ",
      category: "ART",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },
  ],
};

export default function TeamFavourite() {
  const [displayCount, setDisplayCount] = useState(8);

  const handleSeeMore = () => {
    setDisplayCount(displayCount + 4);
  };
  return (
    <div>
      <Navbar />
      <Box position="relative">
        <Image
          w="100%"
          h={["250px", "300px", "350px"]}
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwdGFyaW5lcnxlbnwwfHwwfHx8MA%3D%3D"
        />
        <Center
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          color="white"
        >
          <Text
            fontSize={["32px", "36px", "48px"]}
            fontWeight="bold"
          >
            Indiegogo Team Favorites
          </Text>
        </Center>
      </Box>
      <Flex>
        <Box p="4">
          <Flex direction={{base:"column" , md:"row",lg:"row"}} justifyContent="space-around" w={{base:"100%",md:"100%",lg:"450px"}} ml="25px">
            <Text fontSize="18px">213 projects</Text>
            <Text fontSize="18px"> 156k backers</Text>
            <Text fontSize="18px">$50.8M raised</Text>
          </Flex>
        </Box>
        <Spacer />
      </Flex>
      <SimpleGrid
        columns={[1, 2, 2, 4]}
        spacing={10}
        w="90%"
        mx="auto"
        mt="50px"
        minChildWidth="260px"
      >
        {cardData.posts.slice(0, displayCount).map((data, index) => (
          <Box
            h="550px"
            border="1px"
            borderColor="gray.300"
            w="300px"
            key={data.id}
            position="relative"
            style={{
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Image h="270px" w="300px" src={data.image} alt="project" />
            <Text
              fontSize="12px"
              color="#088366"
              fontWeight="bold"
              ml="15px"
              mt="20px"
            >
              {data.funding}
            </Text>
            <Text
              fontSize="18px"
              color="#2A2A2A"
              fontWeight="bold"
              ml="15px"
              mt="7px"
            >
              <Link href={data.link}>{data.title}</Link>
            </Text>
            <Text fontSize="14px" color="#6A6A6A" ml="15px" mt="7px">
              {data.description}
            </Text>

            <Text
              fontSize="14px"
              color="#6A6A6A"
              ml="15px"
              mt="7px"
              _hover={{ color: "#E51075" }}
            >
              <Link href={data.link2}>{data.category}</Link>
            </Text>
            <Flex justifyContent="space-between" w="92%" mx="auto">
              <Box display="flex">
                <Heading as="h3" size="md" mt="20px">
                  {data.rating}
                </Heading>
                <Text mt="20px">{data.usdRaised}</Text>
              </Box>
              <Text mt="20px">{data.percent}</Text>
            </Flex>
            <hr
              style={{
                width: "90%",
                margin: "auto",
                border: "4px solid #35CA97",
                borderRadius: "5px",
                marginTop: "20px",
              }}
            />

            {/* </Box> */}
          </Box>
        ))}
      </SimpleGrid>
      {displayCount < cardData.posts.length && (
        <Button
          display="block"
          mx="auto"
          mt="30px"
          w="200px"
          color="white"
          bg="#E51075"
          _hover={{ backgroundColor: "#E51075" }}
          onClick={handleSeeMore}
        >
          SEE MORE
        </Button>
      )}{" "}
      <Footer />
    </div>
  );
}
