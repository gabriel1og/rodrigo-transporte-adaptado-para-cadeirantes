"use client";
import { Box, Flex, Text, SimpleGrid, Badge } from "@chakra-ui/react";
import {
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
} from "react-icons/hi";

const mainServices = [
  {
    icon: HiOutlineHeart,
    title: "Saúde e Bem-estar",
    description:
      "Transporte seguro para consultas médicas, sessões de fisioterapia, exames e hospitais.",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Educação Inclusiva",
    description:
      "Transporte escolar especializado para crianças com mobilidade reduzida, garantindo que o caminho para o aprendizado seja tranquilo.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Lazer e Vida Social",
    description:
      "Levamos você a passeios, eventos, shoppings e visitas familiares. Afinal, a cidade deve ser de todos.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Viagens e Aeroportos",
    description:
      "Suporte para embarque e desembarque com total auxílio com a bagagem e equipamentos.",
  },
];

export function AboutUs() {
  return (
    <Box as="section" id="sobre" bg="white" py={[12, 16, 20]}>
      <Box maxW="1200px" mx="auto" px={[4, 6, 8]}>
        {/* Section Header */}
        <Flex flexDir="column" alignItems="center" textAlign="center" mb={12}>
          <Badge
            bg="#f0f6fc"
            color="#1a5490"
            px={4}
            py={2}
            borderRadius="full"
            fontSize="sm"
            fontWeight="600"
            mb={4}
          >
            Sobre Nós
          </Badge>
          <Text
            as="h2"
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="700"
            color="gray.900"
            lineHeight={1.2}
            mb={4}
            maxW="800px"
          >
            Transporte Acessível para Pessoas com Mobilidade Reduzida
          </Text>
          <Text fontSize="lg" color="gray.600" maxW="600px" lineHeight={1.7}>
            Mobilidade com Dignidade e Segurança para Quem Você Ama
          </Text>
        </Flex>

        {/* Description Card */}
        <Box
          bg="#f0f6fc"
          borderRadius="24px"
          p={[6, 8, 10]}
          mb={16}
          textAlign="center"
        >
          <Text fontSize={["md", "lg"]} color="gray.600" lineHeight={1.8} maxW="900px" mx="auto">
            Entendemos que o transporte de pessoas com mobilidade reduzida exige
            mais do que um veículo adaptado; exige{" "}
            <Text as="span" color="#1a5490" fontWeight="600">
              respeito
            </Text>
            ,{" "}
            <Text as="span" color="#1a5490" fontWeight="600">
              pontualidade
            </Text>{" "}
            e um{" "}
            <Text as="span" color="#1a5490" fontWeight="600">
              atendimento humanizado
            </Text>
            . Nosso serviço de Táxi Acessível foi planejado para oferecer total
            autonomia e conforto a cadeirantes em seus deslocamentos diários.
          </Text>
        </Box>

        {/* Services Title */}
        <Text
          as="h3"
          fontSize={["xl", "2xl"]}
          fontWeight="700"
          color="gray.900"
          textAlign="center"
          mb={8}
        >
          Nossos Principais Serviços
        </Text>

        {/* Service Cards */}
        <SimpleGrid columns={[1, 2]} gap={6} mb={12}>
          {mainServices.map((service, index) => (
            <Box
              key={index}
              className="service-card"
              bg="white"
              p={6}
              borderRadius="16px"
              border="1px solid"
              borderColor="gray.100"
              boxShadow="sm"
              display="flex"
              alignItems="flex-start"
              gap={4}
            >
              <Box
                bg="#f0f6fc"
                w={12}
                h={12}
                minW={12}
                borderRadius="12px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <service.icon size={24} color="#1a5490" />
              </Box>
              <Box>
                <Text fontWeight="700" fontSize="lg" color="gray.900" mb={2}>
                  {service.title}
                </Text>
                <Text fontSize="sm" color="gray.500" lineHeight={1.7}>
                  {service.description}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {/* Why Choose Us Banner */}
        <Box
          bg="#1a5490"
          borderRadius="24px"
          p={[6, 8]}
          display="flex"
          flexDir={["column", "column", "row"]}
          alignItems={["flex-start", "flex-start", "center"]}
          gap={6}
        >
          <Box
            bg="rgba(255, 255, 255, 0.1)"
            w={14}
            h={14}
            minW={14}
            borderRadius="16px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <HiOutlineShieldCheck size={28} color="white" />
          </Box>
          <Box color="white">
            <Text fontSize={["lg", "xl"]} fontWeight="700" mb={2}>
              Por que nos escolher?
            </Text>
            <Text fontSize="md" opacity={0.9} lineHeight={1.7}>
              Nossos veículos são modernos, devidamente adaptados com
              rampas/elevadores de última geração e seguem todas as normas de
              segurança vigentes.{" "}
              <Text as="span" fontWeight="700">
                Mais do que motoristas, somos parceiros da sua mobilidade.
              </Text>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
