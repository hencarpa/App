import  express  from 'express'
import cors from 'cors'
import db from './database/db.js'
import blogRouter from './routes/routes.js'
const app = express()
app.use(cors())
app.use (express.json)
app.use('/blogs',blogRouter)
try {
    await db.authenticate()
    console.log('Conexion exitosa')
} catch (error) {
    console.log('Error ${error}')
}
app.get('/',(req,res)=>{
    res.send('Hola Mundo')
})
app.listen(8000,()=>{
console.log('Server on.......')
})