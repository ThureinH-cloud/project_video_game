import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
export default function Navbar() {
  return (
    <HStack  p='10px'>
        <Image  src={logo} boxSize={16} />
        <SearchInput/>
      <ColorModeSwitch  />
    </HStack>
  );
}
