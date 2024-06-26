
import platforms from "../data/platforms";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () => ({ data:platforms, error:null, isLoading:false})
export default usePlatforms;
