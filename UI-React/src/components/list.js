import { NavLink } from "react-router-dom";

const List = ({data, handleDelete})=>{
    return(<li>
        <span className="close" onClick={(e)=>handleDelete(data.id)}>X</span>
        <div className="user">
            <span className="usrImg"></span>
            <span className="usrName">Chidhu</span>
        </div>
        <div className="Content">
        <NavLink to={"/post/"+data.id}> <h3>{data.title}</h3></NavLink>  
        <img src={data.imgUrls[0]} alt="myImage" />
        <h4 className="body">{data.body}</h4>
        </div>
        
    </li>)
}

export default List;