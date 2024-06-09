import { GameQuery } from "../App";
import SearchInput from "../components/SearchInput";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: String;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top:number
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering:gameQuery.sortOrder,
        search:gameQuery.searchText
      },
    },
    [gameQuery]
  );

export default useGames;
