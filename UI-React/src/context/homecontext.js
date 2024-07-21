import { createContext } from "react"
import useAxiosFetch from '../hooks/fetchhooks'

const DataContext = createContext({});

 export const DataProvider = ({children})=>{
    const {data, isLoading, fetchError, setData} = useAxiosFetch('http://localhost:3001/posts')
    
    
    return (<DataContext.Provider value={{
        data, isLoading, fetchError, setData
    }}> 
        {children}
    </DataContext.Provider>)
}

export default DataContext;