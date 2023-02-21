const express=require("express");
const router=express.Router();
const axios=require("axios")


router.get("/",(req,res,next)=>{
    
    res.render("youtube/youtube",{
        oldInput:null,
        error:null
    });
})
router.post("/",async (req,res,next)=>{
    let musicName=req.body.musicName;
    if(musicName.indexOf("http")>-1 ||musicName.indexOf(".com")>-1||musicName.indexOf("wwww.youtube")>-1){
        res.render("youtube/youtube",{
            oldInput:{musicName:musicName},
            error:"bad music name"
        });
    }
     musicName+=" lyrics";


    const response=await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+musicName+"&key=AIzaSyBFYvy18_rgbpcfoJNpNLvWzdtXMnlPK50");
    const videoId=response.data.items[0].id.videoId;
    // const {url}=req.body;
    // const videoId=url.split("/watch?v=")[1].split("&")[0];
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