const app = require('express')()

const swat_router = require('./swat_router')
const king_router = require('./king_router')

app.use('/swat',swat_router)
app.use('/king',king_router)

app.get('/',(req,res)=>{
    res.send("<a href = \"swat\">Swat</a><br/><a href = \"king\">King</a>");
})

app.listen(2,()=>{
    console.log("server started at port 2");
})