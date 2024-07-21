import mongoose from "mongoose";


export default class Posts{
     model = {};
     schema;
     collectionModel;
    constructor(){
        this.model = {
           userId : Number,
           id: Number,
           title: String,
           body: String,
           imgUrls: Array
        }
        this.registerSchema();
    }

    registerSchema(){
        this.schema = new mongoose.Schema(this.model, {
            strictPopulate: false
        });
        
    }
    cretaeModel(){
       this.collectionModel = mongoose.model('posts',this.schema);
    }
    addData(data){
        return new this.collectionModel(data)
    }
}