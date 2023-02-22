const express=require("express");
const router=express.Router();
const { getprompt ,postprompt} = require("../controllers/youtube");


router.get("/",getprompt)
router.post("/",postprompt)


module.exports=router;