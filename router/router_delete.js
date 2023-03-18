const express =require('express')
const router = express.Router()
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const db = require("../BD/bd")
// tres important le urlencoded si non le bodyparser ne pourra pas recuperer les donnees du formulaires tranquilement


const controller_update =require("../Public/controller/controller_update");

// routes

router.get('/delete/:id', (req,res)=>{
    console.log(req.params)
    var id = request.body.id; 
      console.log(userid)
      let sql =`DELETE * FROM carracteristique WHERE id = "${id}"
      `;
      db.query( sql,(rows,err)=>{
          if (err) {
            console.log("ERREUR", err); 
            console.log(rows)
           
          } else {
           
           res.redirect("/")
           
        
          }
        })
    
})

//  router.post('/update',urlencodedParser,controller_update.requetteUpdateId )
// recuper le formulaire avec le router post et non get
module.exports =router;