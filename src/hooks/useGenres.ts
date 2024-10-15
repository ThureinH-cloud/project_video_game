import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
export interface Genre{
    id:number;
    name:string;
    slug:string;
    image_background:string;
}
export interface FetchGenreList{
    results:Genre[];
    count:number;
}
 const useGenres=()=> {
  const [genres,setGenres]=useState<Genre[]>([]);
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    apiClient.get<FetchGenreList>('https://api.rawg.io/api/genres')
    .then(res=>setGenres(res.data.results))
    .catch(error=>setError(error))
    .finally(()=>{
        setLoading(false);
    })
  },[]);
  return {genres,error,loading}
  
}
export default useGenres;