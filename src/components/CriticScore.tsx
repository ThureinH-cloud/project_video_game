import { Badge } from "@chakra-ui/react";

export default function CriticScore({score}:{score:number}) {
    let color=score>75? "green":score>60?"yellow":"";
  return (
    <div>
        <Badge colorScheme={color} paddingX='2' borderRadius='3' fontSize='14'>{score}</Badge>
    </div>
  )
}
