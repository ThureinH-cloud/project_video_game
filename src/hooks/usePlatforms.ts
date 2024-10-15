import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
export interface Platform{
    id:number;
    name:string;
    slug:string;
}
const usePlatforms=()=>{
    const [platforms, setPlatforms] = useState<Platform[]>([]);
    const [error,setError] = useState("");
    useEffect(()=>{
        apiClient.get("https://api.rawg.io/api/platforms/lists/parents")
        .then(res=>setPlatforms(res.data.results))
        .catch(err=>setError(err));
    },[])
    return {platforms,error}
}
export default usePlatforms;