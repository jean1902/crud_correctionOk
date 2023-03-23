
const db = require("../../BD/bd")

let requetteDelete = class {
  static supprimer = (req, res) => {
     let id = req.params.id;  //params permet de determiner id de l url
     console.log('voila le id',id)

    let DELETE = `delete from  carracteristique WHERE id = ${id}`;

    db.query(DELETE, [id], function (error, rows) {
      if (error) {
        console.log(error);
      } else {
        console.log("ok", rows);
        res.redirect("/");
      
      }
    });
  };
};

module.exports = requetteDelete;
