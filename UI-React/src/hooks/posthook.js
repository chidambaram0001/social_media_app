import axios from "axios";
import { useEffect, useState } from "react";

const UseAxiosPost = (baseUrl, formData)=>{
    const [data, setData] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsloading] = useState(null)
    // useEffect(()=>{
        let isMounted = true;
        const source = axios.CancelToken.source()
       // if(postData){
            const PostCallAPI = async (url, postData)=>{
                setIsloading(true)
              try{
                let response =  await axios.post(url,postData,{
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
              return {data, fetchError, isLoading}
            }
           
       // }
        
       
    // },[formData])

    return {data, fetchError, isLoading, PostCallAPI}
}

export default UseAxiosPost;