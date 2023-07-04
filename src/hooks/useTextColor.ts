import { useColorModeValue } from "@chakra-ui/react";

export default () => {
    const textColor = useColorModeValue("#444444", "#eeeeee");

    return textColor;
}
