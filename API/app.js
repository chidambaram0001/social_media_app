import express from 'express';
import mongoose from 'mongoose';
import Posts from './model/post.js';
const app = express();
app.use(express.json());

var posts = null;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.setHeader(`Access-Control-Allow-Headers`, `Content-Type`);
 
    next();
 });
 
app.get('/posts',(req, res)=>{
    

    posts.collectionModel.find({}).then((data)=>{
        res.json(data)
     
     })
   
})

app.delete('/deletePost/:id', (req,res)=>{
    posts.collectionModel.deleteOne({id:req.params['id']}).then((t)=>{
        res.json(t)
    })
})

app.post('/addPost',(req,res)=>{
   var newPost = new posts.collectionModel(req.body);
   newPost.save().then((t)=>{
    res.json(t);
   });
})
app.listen(3001, ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/socialmedia')
    posts = new Posts();
    posts.cretaeModel()
    console.log("service started")
})

mongoose.connection.on('connected',()=>{
    console.log('DB connected')
});