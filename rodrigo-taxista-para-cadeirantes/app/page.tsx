"use client";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import { Header } from "@/components/Header/page";
import { Contact } from "@/components/Contact/page";
import { Drawing } from "@/components/Drawing/page";
import { MainGridITem } from "@/components/Generics/MainGridItem";
export default function Home() {
  return (
    <Box h="100%">
      <Grid
        templateAreas={`"header"
                  "main"
                  "footer"`}
        gridTemplateRows={".5fr 4fr .5fr"}
        gridTemplateColumns={"1fr"}
        h="inherit"
        gap="1"
        color="blackAlpha.800"
        fontWeight="bold"
      >
        <GridItem area={"header"}>
          <Header />
        </GridItem>

        <GridItem area={"main"}>
          <Grid
            templateColumns={["1fr", "1fr", "40% 60%", "40% 60%"]}
            templateRows={["2fr", "2fr", "1fr", "1fr"]}
            gap={0}
            h="100%"
            textAlign="center"
          >
            <MainGridITem children={<Contact />} />
            <MainGridITem children={<Drawing />} />
          </Grid>
        </GridItem>

        <GridItem area={"footer"} className="footer">
          <Box
            display="flex"
            flexDir="row"
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="100%"
          >
            <Text color="#848ba0">Todos os direitos reservados®</Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
