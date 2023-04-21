import httpServer from "#Config/http.js"
import '#Config/env.js'
import connectDB from "#Config/db.js"

const bootstrap= ()=>{
    connectDB()

    httpServer.listen(process.env.PORT, () =>{
        console.log(`Servidor escuchando en el puerto ${process.env.PORT}`)
    })
}

bootstrap()