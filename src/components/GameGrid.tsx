import {

  VStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
export default function GameGrid({selectedGenre,selectedPlatform}:{selectedGenre:Genre | null,selectedPlatform:Platform | null}) {
  const { games, error, loading } = useGames(selectedGenre,selectedPlatform);
  const skeletons=[1,2,3,4,5,6];
  return (
    <VStack>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        p="20px"
        spacing={10}
      >
        {loading && skeletons.map((game) => <GameCardSkeleton key={game} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
