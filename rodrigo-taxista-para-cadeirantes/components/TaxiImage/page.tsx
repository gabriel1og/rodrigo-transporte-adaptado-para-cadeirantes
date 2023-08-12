"use client";
import { Box, Image, Flex, Heading } from "@chakra-ui/react";
import taxiPhoto from "@/public/NewTaxiPoint.png";
export function TaxiImage() {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" h="100%">
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        my={10}
        mt={[20, 20, 10, 10]}
        mb={[0, 0, 10, 10]}
      >
        <Heading size="xl" mb={4}>
          Rodrigo da Silva
        </Heading>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        w={["80%", "80%", "100%", "100%"]}
      >
        <Image src={taxiPhoto.src} />
      </Box>
    </Flex>
  );
}
