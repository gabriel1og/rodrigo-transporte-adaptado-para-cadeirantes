"use client";
import {
  Flex,
  Box,
  Badge,
  Text,
  Heading,
  Image,
  List,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import Link from "next/link";
import { MainListItem } from "../Generics/MainListItem";
import { BsWhatsapp } from "react-icons/bs";
import elo from "@/public/elo.png";
import pix from "@/public/logo-pix.png";
import mastercard from "@/public/mastercard.png";
import visa from "@/public/visa.png";

export function Contact() {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" h="100%">
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        my={4}
      >
        <Heading fontWeight={600} fontSize="4xl">
          <Text
            position="relative"
            _after={{
              content: "''",
              width: "full",
              height: ["25%", "25%", "20%", "25%"],
              position: "absolute",
              bottom: 3.5,
              left: 0,
              borderRadius: "3px",
              bg: "#79a6d6",
              zIndex: -1,
            }}
            lineHeight={1.8}
            fontSize={["4xl", "4xl", "3xl", "4xl"]}
          >
            Entre em contato
          </Text>
          <Heading color="#79a6d6" size={["xl", "xl", "lg", "xl"]} mt={4}>
            Rodrigo
          </Heading>
        </Heading>
        <List py={12} spacing={4}>
          <MainListItem text="Atendimento especializado" />
          <MainListItem text="Solicitação do serviço mediante agendamento prévio" />
        </List>
      </Box>

      <Box>
        <Stack
          direction="row"
          spacing={4}
          divider={<StackDivider border="1px solid" borderColor="gray.100" />}
        >
          <Image w="100px" h="70px" objectFit="contain" src={mastercard.src} />
          <Image w="100px" h="70px" objectFit="contain" src={visa.src} />
        </Stack>

        <Stack
          direction="row"
          spacing={4}
          divider={<StackDivider border="1px solid" borderColor="gray.100" />}
          mt={6}
        >
          <Image w="100px" h="70px" objectFit="contain" src={elo.src} />
          <Image w="100px" h="70px" objectFit="contain" src={pix.src} />
        </Stack>
      </Box>

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
    </Flex>
  );
}
