import React, { useState } from "react";
import {
  Text,
  Image,
  SimpleGrid,
  Box,
  Link,
  Flex,
  Heading,
} from "@chakra-ui/react";

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
        "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/mnkmshfvxlb1stc4tnlq",
      funding: "FUNDING",
      title: "Such Good Bread- a cookBookby Mary Grace",
      link: "https://www.indiegogo.com/projects/such-good-bread-a-cookbook-by-mary-grace/hmco",
      description:
        "Approachable sourdough bread pieces,for sharing the magic of a homemade loaf of bread",
      category: "WRITING & PUBLISHING",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/hhlde8sfrriop1mrkqpr",
      funding: "FUNDING",
      title: "ZERO PUMP:World smallest pump for sleeping pads",
      link: "https://www.indiegogo.com/projects/zero-pump-world-s-smallest-pump-for-sleeping-pads/hmco",
      description:
        "Ultralight 1.2oz/Replaceable Battery /50s Inflator& Deflator",
      category: "TRAVEL & OUTDOORS",
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
        "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/x4rpnadkuzcpqsfeayjh",
      funding: "FUNDING",
      title: "Stories and graphic novels for a mixed Asian woman",
      link: "https://www.indiegogo.com/projects/stories-and-graphic-novels-for-a-mixed-asian-woman/hmco",
      description:
        "Fundraising campaign to publish stories and graphic novels for a mixed asian woman",
      category: "WRITING & PUBLISHING",
      rating: "$101,377 ",
      usdRaised: "USD raised",
      percent: "107%",
    },

    {
      image:
        "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/yttf1na0cyeixueescqk",
      funding: "FUNDING",
      title: "Overture-A Non-Dialogue Short Film",
      link: "https://www.indiegogo.com/projects/overture-a-non-dialogue-short-film/hmco",
      description: "A deaf and blind boy is overcome by his passion for music.",
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
  ],
};

export default function UserCards() {
  const cardsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(cardData.posts.length / cardsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const visibleCards = cardData.posts.slice(startIndex, endIndex);

  return (
    <div
      style={{
        width: "92%",
        margin: "auto",
        marginTop: "50px",
        marginBottom: "50px",
        position: "relative",
      }}
    >
      <Text mb="50px" fontSize="28px">
        Popular Projects
      </Text>
      <SimpleGrid columns={[1, 2, 2, 4]} spacing={10}>
        {visibleCards.map((data, index) => (
          <Box
            key={data.id}
            border="1px"
            borderColor="gray.300"
            position="relative"
            style={{
              width: "100%",
              transition: "transform 0.3s ease",
              marginBottom: "20px", // Add margin to prevent overlapping
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Image src={data.image} alt="project" h="270px" w="100%" />
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
          </Box>
        ))}
      </SimpleGrid>
      <Image
        src="https://cdn-icons-png.flaticon.com/128/7945/7945195.png"
        h="50px"
        onClick={handlePrevious}
        disabled={currentPage === 0}
        position="absolute"
        left="-20px"
        bottom="50%"
        transform="translateY(50%)"
        zIndex="1"
        cursor="pointer"
      />
      <Image
        src="https://cdn-icons-png.flaticon.com/128/7945/7945189.png"
        h="50px"
        onClick={handleNext}
        disabled={currentPage === totalPages - 1}
        position="absolute"
        right="-20px"
        bottom="50%"
        transform="translateY(50%)"
        zIndex="1"
        cursor="pointer"
      />
    </div>
  );
}
