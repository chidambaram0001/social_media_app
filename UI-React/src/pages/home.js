import { useContext } from "react";
import DataContext from "../context/homecontext";
import List from "../components/list";
import axios from "axios";
const Home = ({searchVal})=>{
    const  {data,  isLoading, fetchError, setData} = useContext(DataContext);
    const listData = [];
    var searchResult = data;
    console.log(searchVal);
    if(searchVal){
        searchResult = data.filter((t)=>t.body.indexOf(searchVal) > -1);
    }
    const handleDeletePost = (id)=>{
        axios.delete('http://localhost:3001/deletePost/'+id).then((t)=>{
            console.log(t)
            if(t.status == 200){
                setData(t=> data.filter(val=>val.id != id));
                
            }
        })
    
    }

    (searchResult || []).forEach((element, idx) => {
        listData.push(<List data={element} handleDelete={handleDeletePost} key={idx}/>);
    });
    return (<div>
        {isLoading && <span> Result Loading ....</span>}
        {fetchError && <span> { fetchError}</span>}
            <ul>
                {listData}
            </ul>
        </div>);
}

export default Home;