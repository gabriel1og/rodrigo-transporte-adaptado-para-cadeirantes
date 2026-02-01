"use client";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
import MainLogo from "@/public/MainLogo.png";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box
      as="header"
      className="header-nav"
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={[4, 6, 8]}
        py={4}
        alignItems="center"
        justifyContent="space-between"
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
                fontSize="lg"
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

        {/* Desktop Navigation */}
        <HStack gap={8} display={["none", "none", "flex"]}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Text
                fontSize="sm"
                fontWeight="500"
                color="gray.600"
                _hover={{ color: "#1a5490" }}
                transition="color 0.2s"
              >
                {item.label}
              </Text>
            </Link>
          ))}
        </HStack>

        {/* CTA Button */}
        <Link href="https://api.whatsapp.com/send/?phone=5531995622051&text=Olá! Gostaria de agendar uma viagem.&type=phone_number&app_absent=0">
          <Button
            display={["none", "none", "flex"]}
            bg="#1a5490"
            color="white"
            borderRadius="full"
            px={6}
            py={5}
            fontSize="sm"
            fontWeight="600"
            _hover={{ bg: "#0f3a5f" }}
            transition="all 0.2s"
          >
            Agendar viagem
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <IconButton
          display={["flex", "flex", "none"]}
          aria-label="Menu"
          variant="ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          size="lg"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </IconButton>
      </Flex>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <Box
          display={["block", "block", "none"]}
          bg="white"
          borderTop="1px solid"
          borderColor="gray.100"
          py={4}
          px={6}
        >
          <Flex flexDir="column" gap={4}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <Text
                  fontSize="md"
                  fontWeight="500"
                  color="gray.600"
                  py={2}
                  _hover={{ color: "#1a5490" }}
                >
                  {item.label}
                </Text>
              </Link>
            ))}
            <Link href="https://api.whatsapp.com/send/?phone=5531995622051&text=Olá! Gostaria de agendar uma viagem.&type=phone_number&app_absent=0">
              <Button
                w="full"
                bg="#1a5490"
                color="white"
                borderRadius="full"
                py={5}
                fontSize="sm"
                fontWeight="600"
                _hover={{ bg: "#0f3a5f" }}
              >
                Agendar viagem
              </Button>
            </Link>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
