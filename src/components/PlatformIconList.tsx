import { HStack, Icon } from "@chakra-ui/react";
import { FaWindows,FaXbox,FaPlaystation,FaApple,FaAndroid,FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "../hooks/useGames";

export default function PlatformIconList({platforms}:{platforms:Platform[]}) {
    const iconMap:any={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        android:FaAndroid,
        web:BsGlobe
    }
  return (
    <HStack marginY={1}>
        {platforms.map(platform =><Icon key={platform.id} as={iconMap[platform.slug]} color='gray.300'/>)}
    </HStack>
  )
}
