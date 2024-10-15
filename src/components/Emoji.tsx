import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp"
import thumbsup from "../assets/thumbs-up.webp"
export default function Emoji({rating}:{rating:number}) {
  if (rating<3) return null;
  const emojiMap:{[key:number]:ImageProps}={
   3: {src:meh,alt:'meh'},
   4: {src:thumbsup,alt:"recommend"},
   5: {src:bullsEye,alt:"exceptional"},
  }
  return (
    <Image {...emojiMap[rating]} boxSize='25px' />
  )
}
