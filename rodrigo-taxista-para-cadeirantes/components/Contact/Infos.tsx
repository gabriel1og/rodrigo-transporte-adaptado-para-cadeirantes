"use client";
import { Box, Text, Heading, List, VStack } from "@chakra-ui/react";
import { MainListItem } from "../Generics/MainListItem";

export function Infos() {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      my={4}
    >
      <VStack fontWeight={600} fontSize="4xl" gap={0}>
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
        <Heading color="#79a6d6" size={["xl", "xl", "lg", "xl"]} mt={2}>
          Rodrigo
        </Heading>
      </VStack>
      <List py={12} spacing={4}>
        <MainListItem text="Atendimento especializado" />
        <MainListItem text="Solicitação do serviço mediante agendamento prévio" />
      </List>
    </Box>
  );
}
