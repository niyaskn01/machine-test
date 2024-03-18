const express=require('express')
require('dotenv').config()
const cors=require('cors');
const app=express()
const db=require('./config/connect')
const authRouter=require('./routes/authRoutes')
const menuRouter=require('./routes/menuRoutes')
const usersRouter=require('./routes/userRoutes')

app.use(cors())
app.use(express.json()) 
db()

//routes
app.use('/api/auth',authRouter)
app.use('/api/menu',menuRouter)
app.use('/api/users',usersRouter)

const port=process.env.port

app.listen(port,()=>console.log('server is running at',port))
