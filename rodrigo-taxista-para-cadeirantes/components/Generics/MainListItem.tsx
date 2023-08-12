import { ListItem, Text } from "@chakra-ui/react";
import { BsFillPatchCheckFill } from "react-icons/bs";

interface Props {
  text: string;
}

export function MainListItem({ text }: Props) {
  return (
    <ListItem
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      w="100%"
    >
      <BsFillPatchCheckFill size={20} />
      <Text width="75%" ml={2}>
        {text}
      </Text>
    </ListItem>
  );
}
