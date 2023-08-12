"use client";
import { Flex, Box, Badge, Text, Heading, Divider } from "@chakra-ui/react";
import Link from "next/link";

export function Contact() {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" h="100%">
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        my={10}
      >
        <Heading size={["2xl", "2xl", "xl", "2xl"]} mb={4}>
          Entre em contato
        </Heading>
        <Divider bg="rgba(34, 57, 82, 1)" h="2px" w="120px" />
      </Box>

      <Box>
        <Link href="https://api.whatsapp.com/send/?phone=5531995622051&text&type=phone_number&app_absent=0">
          <Badge
            colorScheme="green"
            py={5}
            px={[24, 24, 24, 28]}
            borderRadius={64}
            backdropFilter="blur(16px) saturate(180%)"
            backgroundColor="rgba(34, 57, 82, 0.75)"
            _hover={{
              transition: "all .3s ease-in-out",
              boxShadow: "0px 0px 10px 3px #9fb2bc",
            }}
          >
            <Text fontSize="1.1rem" color="#d8e9ff">
              Whatsapp
            </Text>
          </Badge>
        </Link>
      </Box>
    </Flex>
  );
}
