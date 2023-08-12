import { GridItem } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export function MainGridITem({ children }: Props) {
  return (
    <GridItem w="100%" h="inherit" p={2}>
      {children}
    </GridItem>
  );
}
