const express =require('express')
const router = express.Router()
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const db = require("../BD/bd")
// tres important le urlencoded si non le bodyparser ne pourra pas recuperer les donnees du formulaires tranquilement


const controll_Delete =require("../Public/controller/controller_Delete");

// routes


router.get('/delete/:id',  controll_Delete.supprimer )

// recuper le formulaire avec le router post et non get
module.exports =router;