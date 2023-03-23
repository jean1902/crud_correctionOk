const bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: false })

const db = require("../../BD/bd")

let control_Index= class Control{

     static  requetteIndex =(req ,res)=>{
      
      let sql_select =
      " SELECT * FROM `carracteristique` "
      // (`Nom`, `Prenom`, `Age`, `Fonction`) VALUES (?,?,?,?)"   
      db.query( sql_select,(err,results)=>{
        if (err) {
          console.log("ERREUR", err); 
          // res.send('bonjour')
        } else {
          console.log("success", results);
          res.render('../views/index' ,{select_user:results})
         
          // res.redirect("data");
        }
      })
     }

    static  requetteInSertBd =(req ,res)=>{
        let { Nom , Prenom , Age, Fonction } = req.body; // si il  nest pas present alors affichera undifined Nom , Prenom etc....
        console.log("donnee_du formulaire" ,req.body.Nom);
        
        let sql =
          "INSERT INTO `carracteristique` (`Nom`, `Prenom`, `Age`, `Fonction`) VALUES (?,?,?,?)"; //inserer dans la BD
          db.query(sql,[ Nom,Prenom, Age, Fonction],(err, result) => {
              console.log("bonjour ");
              if (err) {
                console.log("ERREUR", err); 
                // res.send('bonjour')
              } else {
                console.log("success", result);
                // res.redirect("data");
              }


            }
          );
      
     }
    }

          
               

module.exports =control_Index ;