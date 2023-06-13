import mongoose from "mongoose";

export const connectDB= async ()=>{
        mongoose.connect('mongodb+srv://luisparedescrv:luis2909@prueba01.2ugfugf.mongodb.net/?retryWrites=true&w=majority',
        { useNewUrlParser:true, useUnifiedTopology:true })
        .then(()=> console.log('Conectado a Mongo'))
        .catch((err)=> console.error(err))
}