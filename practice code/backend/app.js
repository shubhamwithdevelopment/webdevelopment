require('./db/mongoose')
const express=require('express')
const service =require('./router/service')
const album=require('./router/albumrouter')
const gallery=require('./router/galleryrouter')
const abouts=require('./router/aboutrouter')
const contact =require('./router/contactrouter')
const childreg=require('./router/Childreg')
const formup=require('./router/formup')
const inquiry=require('./router/inquire')
const payment=require('./router/payment')
const userRouter=require('./router/user')
const taskRouter=require('./router/task')
const suggestion=require('./router/suggestion')
const lunch=require('./router/lunch')
const signup=require('./router/signup')
const notice=require('./router/notice')
const ourteam=require('./router/ourteam')
const cors=require('cors')
const fileUpload = require('express-fileupload')

const PORT=3001
const app=express()

app.use(cors())
app.use(fileUpload())
let uploadFolder=express.static("uploads")
console.log(uploadFolder);
app.use(uploadFolder);

app.use(express.json())
app.use(service)
app.use(album)
app.use(abouts)
app.use(contact)
app.use(childreg)
app.use(formup)
app.use(inquiry)
app.use(payment)
app.use(userRouter)
app.use(taskRouter)
app.use(suggestion)
app.use(lunch)
app.use(signup)
app.use(notice)
app.use(gallery)
app.use(ourteam)

app.listen(PORT,()=>{ 
    console.log(`Server is Run at PORT:${PORT}`)
})