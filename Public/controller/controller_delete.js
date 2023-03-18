const bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: false })

const db = require("../../BD/bd")

let control_Delete= class Control{

    static  requetteDElete =(req ,res)=>{
      // supprimer les donnees de la BD
      console.log(req.params)
      var id = request.params.id; 
        console.log(userid)
        let sql =`DELETE * FROM carracteristique WHERE id = "${id}"
        `;
        db.query( sql,(rows,err)=>{
            if (err) {
              console.log("ERREUR", err); 
             
            } else {
             
             res.redirect("/")
             
          
            }
          })
      
       
    }}
    module.exports= control_Delete ;