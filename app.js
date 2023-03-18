   const express =require("express");
   const port =3000;
    const app =express();
    const bodyParser = require("body-parser");
    const db =require("./BD/bd");
    var urlencodedParser = bodyParser.urlencoded({ extended: false })

    const routerAccueil =require("./router/routerIndex");
    const routerUpdate =require("./router/router_update");
    const routerDelete =require("./router/router_update");
   
   

app.set('views','./views');
app.set('view engine','ejs')
app.use('/Public', express.static('public'))


app.use("/",  routerAccueil)
app.use("/",  routerUpdate)
app.use("/" ,routerDelete)



app.listen( port , ()=>{
    console.log(`listening on port ${port}`)
})
