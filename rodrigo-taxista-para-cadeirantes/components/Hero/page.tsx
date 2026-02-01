"use client";
import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  Image,
  Badge,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  HiArrowRight,
  HiShieldCheck,
  HiClock,
  HiCreditCard,
} from "react-icons/hi";
import taxiPhoto from "@/public/NewTaxiPoint.png";

const features = [
  { icon: HiShieldCheck, label: "Segurança total" },
  { icon: HiClock, label: "Agendamento prévio" },
  { icon: HiCreditCard, label: "Cartão e PIX" },
];

export function Hero() {
  return (
    <Box as="section" bg="#f0f6fc" py={[12, 16, 20]}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={[4, 6, 8]}
        flexDir={["column", "column", "row"]}
        alignItems="center"
        gap={[10, 10, 16]}
      >
        {/* Left Content */}
        <Box flex={1} maxW={["100%", "100%", "50%"]}>
          {/* Badge */}
          <Badge
            bg="white"
            color="gray.700"
            px={4}
            py={2}
            borderRadius="full"
            fontSize="sm"
            fontWeight="500"
            display="inline-flex"
            alignItems="center"
            gap={2}
            mb={6}
            boxShadow="sm"
          >
            <Box w={2} h={2} bg="#1a5490" borderRadius="full" />
            Atendendo com excelência
          </Badge>

          {/* Main Heading */}
          <Text
            as="h1"
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="700"
            color="gray.900"
            lineHeight={1.2}
            mb={4}
          >
            Transporte adaptado
            <br />
            com{" "}
            <Text
              as="span"
              fontFamily="var(--font-playfair)"
              fontStyle="italic"
              fontWeight="500"
            >
              dignidade
            </Text>
          </Text>

          {/* Subtitle */}
          <Text
            fontSize={["md", "lg"]}
            color="gray.600"
            mb={8}
            maxW="480px"
            lineHeight={1.7}
          >
            Serviço especializado de transporte para cadeirantes. Comodidade,
            segurança e respeito em cada viagem.
          </Text>

          {/* Buttons */}
          <Flex gap={4} mb={8} flexWrap="wrap">
            <Link href="https://api.whatsapp.com/send/?phone=5531995622051&text=Olá! Gostaria de agendar uma viagem.&type=phone_number&app_absent=0">
              <Button
                bg="#1a5490"
                color="white"
                borderRadius="full"
                px={6}
                py={6}
                fontSize="md"
                fontWeight="600"
                _hover={{ bg: "#0f3a5f" }}
                transition="all 0.2s"
                display="flex"
                alignItems="center"
                gap={2}
              >
                Agendar agora
                <HiArrowRight />
              </Button>
            </Link>
            <Link href="#servicos">
              <Button
                bg="white"
                color="gray.700"
                borderRadius="full"
                px={6}
                py={6}
                fontSize="md"
                fontWeight="600"
                border="1px solid"
                borderColor="gray.200"
                _hover={{ bg: "gray.50" }}
                transition="all 0.2s"
              >
                Conhecer serviços
              </Button>
            </Link>
          </Flex>

          {/* Features */}
          <HStack gap={[4, 6]} flexWrap="wrap">
            {features.map((feature, index) => (
              <Flex key={index} alignItems="center" gap={2}>
                <feature.icon size={18} color="#64748b" />
                <Text fontSize="sm" color="gray.500" fontWeight="500">
                  {feature.label}
                </Text>
              </Flex>
            ))}
          </HStack>
        </Box>

        {/* Right Content - Image */}
        <Box flex={1} position="relative" maxW={["100%", "100%", "50%"]}>
          <Box
            className="hero-image"
            bg="linear-gradient(135deg, #d3e5fb 0%, #7499d4 100%)"
            borderRadius="24px"
            overflow="hidden"
            position="relative"
          >
            <Image
              src={taxiPhoto.src}
              alt="Transporte adaptado para cadeirantes"
              w="100%"
              h="auto"
              objectFit="cover"
            />
          </Box>

          {/* Quote Card */}
          <Box
            position={["relative", "relative", "absolute"]}
            bottom={[0, 0, "-20px"]}
            left={[0, 0, "-20px"]}
            bg="white"
            p={5}
            borderRadius="16px"
            boxShadow="lg"
            maxW={["100%", "100%", "400px"]}
            mt={[4, 4, 0]}
          >
            <Text
              fontSize="sm"
              color="gray.600"
              fontStyle="italic"
              lineHeight={1.6}
            >
              "Se o lugar não permitir acesso a todas as pessoas, esse{" "}
              <Text as="span" color="#1a5490" fontWeight="600">
                lugar é deficiente
              </Text>
              ."
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
