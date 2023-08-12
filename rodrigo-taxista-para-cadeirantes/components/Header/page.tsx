"use client";
import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import MainLogo from "@/public/MainLogo.png";

export function Header() {
  return (
    <Flex
      h="100%"
      alignItems={"center"}
      justifyContent={"center"}
      py={12}
      className="header"
    >
      <Box textAlign="center">
        <Heading
          textTransform="uppercase"
          fontSize={["2xl", "2xl", "3xl", "3xl"]}
        >
          Transporte Adaptado
        </Heading>
        <Heading
          textTransform="uppercase"
          fontSize={["2xl", "2xl", "3xl", "3xl"]}
          color="#0a319d"
        >
          Para Cadeirantes
        </Heading>
        <Text color="#566675">Comodidade e segurança</Text>
      </Box>
      <Image
        w={["70px", "80px", "90px", "90px"]}
        src={MainLogo.src}
        className="header-image"
      />
    </Flex>
  );
}
