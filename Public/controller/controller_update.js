const bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: false })

const db = require("../../BD/bd")
var userid;

let control_Update= class Control{

    static  requetteUpdate =(req ,res)=>{
      //recevoir les donnees de la bd les faires afficher avant la modification 
      console.log(req.params)
        userid=req.params.userid;
        console.log(userid)
        let sql =`SELECT * FROM carracteristique where id =${userid}`
        db.query( sql,(err,data_result)=>{
            if (err) {
              console.log("ERREUR", err); 
              // res.send('bonjour')
            } else {
             
              res.render('../views/update', { user:data_result[0]});
              console.log("donnee recupere", data_result);
             
              // res.redirect("data");
            }
          })
       

    }
    static  requetteUpdateId =( req,res)=>{
      
      // var id = req.params.id;
      var Nom = req.body.Nom;
      var Prenom = req.body.Prenom;
      var Age = req.body.Age;
      var Fonction = req.body.Fonction;
    

	var Update= "UPDATE `carracteristique` set  `Nom`=?, `Prenom`=? , `Age`=?, `Fonction`=? where `id`=userid"


	db.query(Update,[id,Nom,Prenom,Age,Fonction],function(error,rows, data){

		if(error)
		{
			console.log(error)
		}
		else
		{
      res.redirect('/');
      console.log('ok',rows)
      // res.json({"ResponseCode":"1","ResponseMessage":"Data Updated Successfully","data":rows});
		
		}

	});

}
}





module.exports=control_Update;



