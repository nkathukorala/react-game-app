import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/UseGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres ,isLoading ,error} = useGenres();

  if (error) return null;
  if(isLoading) return <Spinner/>

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
