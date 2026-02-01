"use client";
import { Box } from "@chakra-ui/react";
import { Header } from "@/components/Header/page";
import { Hero } from "@/components/Hero/page";
import { Services } from "@/components/Services/page";
import { Contact } from "@/components/Contact/page";
import { AboutUs } from "@/components/AboutUs/page";
import { Footer } from "@/components/Footer/page";

export default function Home() {
  return (
    <Box minH="100vh" bg="#f0f6fc">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
        <AboutUs />
      </main>
      <Footer />
    </Box>
  );
}
