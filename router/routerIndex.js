const express =require('express')
const router = express.Router()
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const db = require("../BD/bd")
// tres important le urlencoded si non le bodyparser ne pourra pas recuperer les donnees du formulaires tranquilement


const controll_Index =require("../Public/controller/controllerINDEX");

// routes

router.get('/', controll_Index.requetteIndex)
router.post('/',urlencodedParser,controll_Index.requetteInSertBd )

// recuper le formulaire avec le router post et non get
module.exports =router;