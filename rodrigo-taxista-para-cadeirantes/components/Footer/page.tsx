"use client";
import { Box, Flex, Text, Image, HStack } from "@chakra-ui/react";
import Link from "next/link";
import MainLogo from "@/public/MainLogo.png";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <Box
      as="footer"
      bg="white"
      borderTop="1px solid"
      borderColor="gray.100"
      py={8}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={[4, 6, 8]}
        flexDir={["column", "column", "row"]}
        alignItems="center"
        justifyContent="space-between"
        gap={6}
      >
        {/* Logo */}
        <Link href="/">
          <Flex alignItems="center" gap={3}>
            <Box
              bg="#1a5490"
              borderRadius="full"
              p={1.5}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                w="36px"
                h="36px"
                src={MainLogo.src}
                alt="Rodrigo Mobilidade"
                filter="brightness(0) invert(1)"
              />
            </Box>
            <Box>
              <Text
                fontWeight="700"
                fontSize="md"
                color="gray.900"
                lineHeight={1.2}
              >
                Rodrigo
              </Text>
              <Text fontSize="xs" color="gray.500" lineHeight={1}>
                Transporte adaptado para cadeirantes
              </Text>
            </Box>
          </Flex>
        </Link>

        {/* Navigation */}
        <HStack gap={6}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Text
                fontSize="sm"
                fontWeight="500"
                color="gray.500"
                _hover={{ color: "#1a5490" }}
                transition="color 0.2s"
              >
                {item.label}
              </Text>
            </Link>
          ))}
        </HStack>

        {/* Copyright */}
        <Text fontSize="sm" color="gray.400">
          Todos os{" "}
          <Text as="span" color="#1a5490">
            direitos reservados
          </Text>
          . © {new Date().getFullYear()}
        </Text>
      </Flex>
    </Box>
  );
}
