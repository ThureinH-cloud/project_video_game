import {  Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
export default function GameCard({ game }: { game: Game }) {
  return (
    <Card width='300px' borderRadius="10" overflow="hidden">
      <Image w='316px' h='178px' objectFit="fill" src={game.background_image} />
      <CardBody>
        <Heading size="xl">{game.name}</Heading>
        <HStack justifyContent='space-between'>
        <PlatformIconList key={game.id} platforms={game.parent_platforms.map(platform=>platform.platform)}/>
        <CriticScore score={game.metacritic}/>
        </HStack>
        <Emoji rating={game.rating_top}/>
      </CardBody>
    </Card>
  );
}
