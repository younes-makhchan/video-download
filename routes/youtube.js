const express=require("express");
const router=express.Router();
const axios=require("axios")
router.get("/",(req,res,next)=>{
    res.render("youtube");
})
router.post("/mp3", (req,res,next)=>{
    const {url}=req.body;
    const videoId=url.split("/watch?v=")[1].split("&")[0];
    const options = {
        method: 'GET',
        url: 'https://youtube-mp36.p.rapidapi.com/dl',
        params: {id: videoId},
        headers: {
          'X-RapidAPI-Key': '7df89c8ba9msh8d6ee421539a58ep18d983jsn13a652c76243',
          'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
          res.redirect(response.data.link);
      }).catch(function (error) {
          console.error(error);
      });
})


module.exports=router;