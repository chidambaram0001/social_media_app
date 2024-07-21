import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import DataContext from "../context/homecontext";
import axios from "axios";
import { useNavigation, useNavigate } from "react-router-dom";

const AddPost = ()=>{
    const {register, handleSubmit, setValue, formState:{errors}} = useForm({mode:"onSubmit"}); 
    const {data,  isLoading, fetchError} = useContext(DataContext);
    const [file, setFile] = useState();
    const nav = useNavigate()
    const handleRegister = (formData)=>{
        //e.preventDefault();
        console.log(formData)
        console.log(data)
        formData['id'] = (data.at(-1)['id'] || 0) + 1;
        formData['userId'] = Math.floor(Math.random()*80)+1;
        axios.post('http://localhost:3001/addPost', formData).then((t)=>{
            console.log(t);
            data.push(t.data)
            nav('/')
        })
    }
    function handleChange(e) {
        console.log(e.target.files);
       
        const formData = new FormData();
      formData.append("files", e.target.files[0]);
      axios.post('http://localhost:3002/upload/image',formData).then((t)=>{
        setFile(t.data.convertedList.at(-1));
        setValue('imgUrls',[t.data.convertedList.at(-1)])
        
      })
    }
    return (<div className="addPosts">
        <form onSubmit={handleSubmit(handleRegister)}>
            <div className="elementGroup">
                <label>Title</label> <br/>
                <input type="text" name="title" {...register("title", {required: true})}/>
                <br/>
                {errors&& errors['title'] && <label className="err">title is required</label>}
            </div>
            <div className="elementGroup">
                <label>Body</label> <br/>
                <textarea name="body" {...register("body", {required: true})}/>
                <br/>
                {errors&& errors['body'] && <label className="err">title is required</label>}
            </div>
            <br/>
            <div className="elementGroup">
                <label>Uplaod Image</label> <br/>
                <input type="file"  onChange={handleChange} />
                <input type="text" name="imgUrls"  {...register("imgUrls", {required: true})} hidden/>
                <br/>
                {errors&& errors['imgUrls'] && <label className="err">title is required</label>}
                <img src={file}  />
            </div>
            <input type="submit" value="Submit Post" />
            
        </form>
    </div>)
}

export default AddPost;