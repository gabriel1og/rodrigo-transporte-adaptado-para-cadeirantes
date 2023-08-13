"use client";
import { Box, Badge, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export function Links() {
  return (
    <Box py={12}>
      <Link href="https://api.whatsapp.com/send/?phone=5531995622051&text&type=phone_number&app_absent=0">
        <Badge
          colorScheme="green"
          display="flex"
          flexDir="row"
          alignItems="center"
          py={5}
          px={[24, 24, 24, 28]}
          borderRadius={64}
          color="#d8e9ff"
          backdropFilter="blur(16px) saturate(180%)"
          backgroundColor="rgba(34, 57, 82, 0.75)"
          transition="all .3s ease-in-out .3s"
          _hover={{
            boxShadow: "0px 5px 15px 5px #cde1ea",
          }}
        >
          <BsWhatsapp size={20} />
          <Text ml={2} fontSize="1.1rem">
            Whatsapp
          </Text>
        </Badge>
      </Link>
    </Box>
  );
}
