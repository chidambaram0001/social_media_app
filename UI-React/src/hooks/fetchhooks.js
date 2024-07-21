import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch = (baseUrl)=>{
    const [data, setData] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsloading] = useState(null)
    useEffect(()=>{
        let isMounted = true;
        const source = axios.CancelToken.source()
        const fetchData = async (url)=>{
            setIsloading(true)
          try{
            let response =  await axios.get(url,{
                cancelToken: source.token
            })

           // if(isMounted){
                setData(response.data);
                setIsloading(false);
                setFetchError(null)
         //   }
          } catch(e){
            setFetchError(e)
            setIsloading(false);
            setData(null);
          } 
        }
        fetchData(baseUrl);
    },[])

    return {data, fetchError, isLoading, setData}
}

export default useAxiosFetch;