import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="purple"
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
        size="lg"
      />
      <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  );
}
