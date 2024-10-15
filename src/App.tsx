import { Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectPlatform,setSelectedPlatform]=useState<Platform | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "aside"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show>
        <GridItem area="aside" paddingX={5}>
          <Heading as='h4' mb='10px'>Genres</Heading>
          <GenreList selectGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack mr='20px'>
        <PlatformSelector selectedPlatform={selectPlatform} onSelectPlatform={(platform)=>setSelectedPlatform(platform)}/>
        <SortSelector/>
        </HStack>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectPlatform} />
      </GridItem>
    </Grid>
  );
}
