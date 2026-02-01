"use client";
import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  Badge,
  Image,
  HStack,
} from "@chakra-ui/react";
import {
  HiOutlineHeart,
  HiOutlineCalendar,
  HiOutlineCreditCard,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import mastercard from "@/public/mastercard.png";
import visa from "@/public/visa.png";
import pix from "@/public/logo-pix.png";
import elo from "@/public/elo.png";

const services = [
  {
    icon: HiOutlineHeart,
    title: "Atendimento Especializado",
    description:
      "Profissionais treinados para oferecer o melhor atendimento, com cuidado e respeito às necessidades de cada passageiro.",
  },
  {
    icon: HiOutlineCalendar,
    title: "Agendamento Prévio",
    description:
      "Solicite seu serviço com antecedência para garantir disponibilidade e pontualidade em suas viagens.",
  },
  {
    icon: HiOutlineCreditCard,
    title: "Pagamento Flexível",
    description:
      "Aceitamos diversas formas de pagamento: cartões de crédito, débito e PIX para sua comodidade.",
  },
  {
    icon: HiOutlineLocationMarker,
    title: "Cobertura Ampla",
    description:
      "Atendemos toda a região com veículos adaptados e prontos para proporcionar conforto em qualquer destino.",
  },
];

const paymentMethods = [
  { name: "Mastercard", logo: mastercard },
  { name: "Visa", logo: visa },
  { name: "PIX", logo: pix },
  { name: "Elo", logo: elo },
];

export function Services() {
  return (
    <Box as="section" id="servicos" bg="#f0f6fc" py={[12, 16, 20]}>
      <Box maxW="1200px" mx="auto" px={[4, 6, 8]}>
        {/* Section Header */}
        <Box mb={12}>
          <Text
            fontSize="sm"
            fontWeight="600"
            color="gray.500"
            textTransform="uppercase"
            letterSpacing="wider"
            mb={3}
          >
            Nossos Serviços
          </Text>
          <Text
            as="h2"
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="700"
            color="gray.900"
            lineHeight={1.2}
            mb={4}
          >
            Mobilidade com{" "}
            <Text
              as="span"
              fontFamily="var(--font-playfair)"
              fontStyle="italic"
              fontWeight="500"
            >
              excelência
            </Text>
          </Text>
          <Text fontSize="lg" color="gray.600" maxW="600px" lineHeight={1.7}>
            Oferecemos um serviço completo de transporte adaptado, pensado para
            garantir autonomia e dignidade em cada deslocamento.
          </Text>
        </Box>

        {/* Service Cards */}
        <SimpleGrid columns={[1, 2, 4]} gap={6} mb={12}>
          {services.map((service, index) => (
            <Box
              key={index}
              className="service-card"
              bg="white"
              p={6}
              borderRadius="16px"
              border="1px solid"
              borderColor="gray.100"
              boxShadow="sm"
            >
              <Box
                bg="#f0f6fc"
                w={12}
                h={12}
                borderRadius="12px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={4}
              >
                <service.icon size={24} color="#1a5490" />
              </Box>
              <Text
                fontWeight="700"
                fontSize="lg"
                color="gray.900"
                mb={3}
                lineHeight={1.3}
              >
                {service.title}
              </Text>
              <Text fontSize="sm" color="gray.500" lineHeight={1.7}>
                {service.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* Payment Methods */}
        <Flex
          alignItems="center"
          justifyContent="center"
          gap={[4, 6, 8]}
          flexWrap="wrap"
        >
          <Text fontSize="sm" color="gray.500" fontWeight="500">
            Formas de pagamento aceitas:
          </Text>
          <HStack flexWrap={"wrap"} justifyContent={"center"} gap={3}>
            {paymentMethods.map((method, index) => (
              <Badge
                key={index}
                bg="white"
                px={4}
                py={2}
                borderRadius="full"
                display="flex"
                alignItems="center"
                gap={2}
                boxShadow="sm"
                border="1px solid"
                borderColor="gray.100"
              >
                <Image
                  src={method.logo.src}
                  alt={method.name}
                  h="20px"
                  objectFit="contain"
                />
                <Text fontSize="sm" color="gray.700" fontWeight="500">
                  {method.name}
                </Text>
              </Badge>
            ))}
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
