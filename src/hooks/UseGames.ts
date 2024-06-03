import { Genre } from "./UseGenres";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: String;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectGenre:Genre |null) => useData<Game>("/games",{params:{genres:selectGenre?.id}},[selectGenre?.id]);

export default useGames;
