"use client";
import { Box, Flex, Text, Image, Stack } from "@chakra-ui/react";
import Title from "@/public/TaxiTitle.png";
import Logo from "@/public/Logo.png";

export function Header() {
  return (
    <Flex
      h="100%"
      alignItems={"center"}
      justifyContent={"space-between"}
      p={6}
      className="header"
    >
      <Image w="300px" src={Title.src} />
      <Image w="80px" borderRadius="20px" src={Logo.src} className="logo" />
    </Flex>
  );
}
