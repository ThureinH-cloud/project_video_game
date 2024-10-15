import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Genre } from "./useGenres";
export interface Platform{
  id:number;
  name:string;
  slug:string;
}
export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[],
    metacritic:number;
    rating_top:number;
  }
 export interface FetchGameResponse {
    count: number;
    results: Game[];
  }
const useGames = (selectedGenre:Genre | null,selectedPlatform:Platform | null) => {
    
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchGameResponse>("/games",{params: {genres: selectedGenre?.id,platforms:selectedPlatform?.id}})
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [selectedGenre?.id,selectedPlatform?.id]);
  return { games, error, loading };
};
export default useGames;
