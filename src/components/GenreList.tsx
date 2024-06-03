import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/UseGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props{
    onSelectGenre:(genre:Genre)=>void;
}
const GenreList = ({onSelectGenre}:Props) => {
    
  const { data: genres ,isLoading ,error} = useGenres();

  if (error) return null;
  if(isLoading) return <Spinner/>

  return (
    <List>
      {genres.map((g) => (
        <ListItem key={g.id} paddingY='5px'>
          <HStack>
            <Image src={getCroppedImageUrl(g.image_background)} boxSize="32px" borderRadius={8} />
            <Button onClick={()=>onSelectGenre(g)} fontSize='lg'>{g.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
