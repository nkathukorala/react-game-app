import React from "react";
import { Game } from "../hooks/UseGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
