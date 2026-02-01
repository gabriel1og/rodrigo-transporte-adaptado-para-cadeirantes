"use client";
import { Box, Flex, Text, Button, VStack } from "@chakra-ui/react";
import Link from "next/link";
import {
  BsWhatsapp,
  BsInstagram,
  BsTelephone,
  BsArrowUpRight,
} from "react-icons/bs";
import { HiOutlineChat } from "react-icons/hi";

const contactMethods = [
  {
    icon: BsWhatsapp,
    iconBg: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
    title: "WhatsApp",
    description: "Resposta rápida e agendamento fácil",
    href: "https://api.whatsapp.com/send/?phone=5531995622051&text=Olá! Gostaria de agendar uma viagem.&type=phone_number&app_absent=0",
  },
  {
    icon: BsInstagram,
    iconBg:
      "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    title: "Instagram",
    description: "Acompanhe nosso trabalho",
    href: "https://instagram.com",
  },
  {
    icon: BsTelephone,
    iconBg: "linear-gradient(135deg, #1a5490 0%, #0f3a5f 100%)",
    title: "Telefone",
    description: "Ligue diretamente para nós",
    href: "tel:+5531995622051",
  },
];

export function Contact() {
  return (
    <Box as="section" id="contato" bg="#f0f6fc" py={[12, 16, 20]}>
      <Box maxW="1200px" mx="auto" px={[4, 6, 8]}>
        <Flex
          flexDir={["column", "column", "row"]}
          gap={[10, 10, 16]}
          alignItems="center"
        >
          {/* Left Content */}
          <Box flex={1}>
            {/* Section Header */}
            <Text
              fontSize="sm"
              fontWeight="600"
              color="gray.500"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={3}
            >
              Contato
            </Text>
            <Text
              as="h2"
              fontSize={["2xl", "3xl", "4xl"]}
              fontWeight="700"
              color="gray.900"
              lineHeight={1.2}
              mb={4}
            >
              Vamos conversar?
            </Text>
            <Text
              fontSize="lg"
              color="gray.600"
              maxW="400px"
              lineHeight={1.7}
              mb={8}
            >
              Entre em contato para agendar sua viagem ou tirar dúvidas. Estamos
              prontos para ajudar.
            </Text>

            {/* Contact Methods */}
            <VStack gap={4} alignItems="stretch">
              {contactMethods.map((method, index) => (
                <Link key={index} href={method.href} target="_blank">
                  <Box
                    className="contact-card"
                    bg="white"
                    p={4}
                    borderRadius="16px"
                    border="1px solid"
                    borderColor="gray.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    cursor="pointer"
                  >
                    <Flex alignItems="center" gap={4}>
                      <Box
                        bg={method.iconBg}
                        w={12}
                        h={12}
                        borderRadius="12px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <method.icon size={22} color="white" />
                      </Box>
                      <Box>
                        <Text fontWeight="600" fontSize="md" color="gray.900">
                          {method.title}
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                          {method.description}
                        </Text>
                      </Box>
                    </Flex>
                    <BsArrowUpRight size={18} color="#94a3b8" />
                  </Box>
                </Link>
              ))}
            </VStack>
          </Box>

          {/* Right Content - CTA Card */}
          <Box
            flex={1}
            bg="#1a5490"
            borderRadius="24px"
            p={[6, 8]}
            color="white"
            maxW={["100%", "100%", "400px"]}
            w="100%"
          >
            <Text
              as="h3"
              fontSize={["xl", "2xl"]}
              fontWeight="700"
              lineHeight={1.3}
              mb={4}
            >
              Pronto para agendar sua próxima viagem?
            </Text>
            <Text fontSize="md" opacity={0.9} lineHeight={1.7} mb={6}>
              Entre em contato pelo WhatsApp e agende sua viagem de forma rápida
              e prática. Nosso atendimento é personalizado e estamos disponíveis
              para atender suas necessidades.
            </Text>
            <Link href="https://api.whatsapp.com/send/?phone=5531995622051&text=Olá! Gostaria de agendar uma viagem.&type=phone_number&app_absent=0">
              <Button
                bg="white"
                color="#1a5490"
                borderRadius="full"
                px={6}
                py={6}
                fontSize="md"
                fontWeight="600"
                _hover={{ bg: "gray.100" }}
                transition="all 0.2s"
                display="flex"
                alignItems="center"
                gap={2}
                w="full"
                justifyContent="center"
              >
                <HiOutlineChat size={20} />
                Chamar no WhatsApp
              </Button>
            </Link>
            <Text fontSize="sm" opacity={0.7} mt={4}>
              Atendemos de segunda a sábado, das 6h às 22h
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
