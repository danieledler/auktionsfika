"use client";
import Auktionsfika from "@/components/Auktionsfika";
import ColorMode from "@/components/ColorMode";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as="main" display="flex" flexDir="column">
      <ColorMode />
      <Auktionsfika />
    </Box>
  );
}
