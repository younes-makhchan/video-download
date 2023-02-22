const express=require("express");
const router=express.Router();
const { getYoutube ,postYoutube} = require("../controllers/youtube");


router.get("/",getYoutube)
router.post("/",postYoutube)


module.exports=router;