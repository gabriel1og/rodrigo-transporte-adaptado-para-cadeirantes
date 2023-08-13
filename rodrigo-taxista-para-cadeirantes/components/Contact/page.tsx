"use client";
import { Flex } from "@chakra-ui/react";
import { Infos } from "./Infos";
import { Payment } from "./Payment";
import { Links } from "./Links";

export function Contact() {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" h="100%">
      <Infos />
      <Payment />
      <Links />
    </Flex>
  );
}
