
import  useGenres, { Genre } from "../hooks/useGenres"
import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

export default function GenreList({onSelectGenre,selectGenre}:{onSelectGenre:(genre:Genre)=>void,selectGenre:Genre | null}) {
  const {genres,error,loading} = useGenres();
  const skeletons=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 

  return (
    <div>
        {loading && skeletons.map((skeleton) => <GenreSkeleton key={skeleton}/>)}
        {error && <Text>{error}</Text>}
        <List>
            {genres.map(genre=><ListItem paddingY='5px' key={genre.id}><HStack><Image src={genre.image_background} boxSize='32px' borderRadius={8}/><Button textDecoration={selectGenre?.name===genre.name ? 'underline' : ''} onClick={()=>onSelectGenre(genre)} variant='link' fontSize='lg'>{genre.name}</Button></HStack></ListItem>)}
        </List>
    </div>
  )
}
