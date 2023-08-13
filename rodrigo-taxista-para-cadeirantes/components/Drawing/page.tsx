"use client";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import taxiPhoto from "@/public/NewTaxiPoint.png";
export function Drawing() {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" h="100%">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        w={["80%", "80%", "100%", "100%"]}
      >
        <Image src={taxiPhoto.src} />
      </Box>

      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        my={4}
        mt={[0, 0, 4, 4]}
      >
        <Text>
          "Se o lugar não permitir acesso a todas as pessoas, esse lugar é
          deficiente."
        </Text>
      </Box>
    </Flex>
  );
}
