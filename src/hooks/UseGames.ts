import { Genre } from "./UseGenres";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: String;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectGenre?.id, platforms: selectedPlatform?.id } },
    [selectGenre?.id, selectedPlatform?.id]
  );

export default useGames;
