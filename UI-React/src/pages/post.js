import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import DataContext from "../context/homecontext";

const Post = ()=>{
    const params = useParams();
    const currId = params['id'];
    const {data, isLoading, fetchError} = useContext(DataContext);
    var pageData =  (data|| []).filter((t)=>t.id == currId)[0];

   console.log(pageData)
    return (<div className="detailsPage">
        <NavLink to="/">Back</NavLink>
        <h5>user Id : {pageData.userId}</h5>
        <h1>{pageData.title}</h1>
        <img src={pageData.imgUrls[0]} alt="my image" />
        <h3>{pageData.body}</h3>
    </div>)
}

export default Post;