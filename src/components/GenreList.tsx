import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/UseGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <List>
      {genres.map((g) => (
        <ListItem key={g.id} paddingY='5px'>
          <HStack>
            <Image src={getCroppedImageUrl(g.image_background)} boxSize="32px" borderRadius={8} />
            <Text fontSize='lg'>{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
