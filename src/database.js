import mongoose from "mongoose";

export function connect() {
    mongoose.connect('mongodb://mymongodb/graphql-course', {
        useNewUrlParser: true,
        useUnifiedTopology: true
     })   
    .then(() => console.log("La base de datos esta conectada!"))
    .catch(err => console.log(err));
}