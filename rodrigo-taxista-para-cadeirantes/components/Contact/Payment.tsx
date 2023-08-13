"use client";
import { Box, Image, Stack, StackDivider } from "@chakra-ui/react";
import elo from "@/public/elo.png";
import pix from "@/public/logo-pix.png";
import mastercard from "@/public/mastercard.png";
import visa from "@/public/visa.png";

export function Payment() {
  return (
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
  );
}
