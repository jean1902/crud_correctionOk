const express =require('express')
const router = express.Router()
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const db = require("../BD/bd")
// tres important le urlencoded si non le bodyparser ne pourra pas recuperer les donnees du formulaires tranquilement


const controller_update =require("../Public/controller/controller_update");

// routes

router.get('/update/:userid', controller_update.requetteUpdate)

 router.post('/update',urlencodedParser,controller_update.requetteUpdateId )
// recuper le formulaire avec le router post et non get
module.exports =router;