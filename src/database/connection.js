import  mongoose from 'mongoose';

export const connection = async() => {
    
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/tarjeta",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("conectado de forma correcta a la  db tarjeta");
    } catch (error) {
        console.log(error)
    }
}

