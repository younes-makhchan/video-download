const musicDownload=require("../util/musicDownload");
const { Search } = require("../util/youtubeApi");
exports.getYoutube=(req,res,next)=>{

    
        res.render("youtube/youtube",{
            oldInput:null,
            error:null,
            urlDownload:null,
        });
    
}

exports.postYoutube=async (req,res,next)=>{
  
        let musicName=req.body.musicName;
        if(musicName.indexOf("http")>-1 ||musicName.indexOf(".com")>-1||musicName.indexOf("wwww.youtube")>-1){
          return   res.render("youtube/youtube",{
                oldInput:{musicName:musicName},
                error:`Invalid Input!\n Input Exemple :Another love `,
                    
            });
        }
        const query=musicName + "lyrics";

    try{
        
          const videoId=await Search(query);
          let link=await musicDownload(videoId);
          res.set({
            'Location':"/"
          })
          res.redirect(link);

        // const {url}=req.body;
        // const videoId=url.split("/watch?v=")[1].split("&")[0];
      
    }catch(err){
        console.log(err);
        return   res.render("youtube/youtube",{
            oldInput:{musicName:musicName},
            error:"Error:talk with the developer",
                
        });
    }
    
    
}