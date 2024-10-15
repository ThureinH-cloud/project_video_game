import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

export default function PlatformSelector({onSelectPlatform,selectedPlatform}:{onSelectPlatform:(platform:Platform)=>void,selectedPlatform:Platform | null}) {
  const { platforms } = usePlatforms();
  return (
    <Box ml="53px">
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform?.name || 'Platforms'}
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem key={platform.id} onClick={()=>onSelectPlatform(platform)}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
