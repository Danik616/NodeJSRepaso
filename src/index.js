import httpServer from "#Config/http.js"
import '#Config/env.js'
import connectDB from "#Config/db.js"

const bootstrap= async ()=>{
    // Se pone la palabra reservada await para hacer una promesa de que si no se ejecuta la base de datos no se 
    // ejecutara el listen
    await connectDB(process.env.MONGODB_URL)

    httpServer.listen(process.env.PORT, () =>{
        console.log(`Servidor escuchando en el puerto ${process.env.PORT}`)
    })
}

bootstrap()