const musicDownload=require("../util/musicDownload");
const { Search } = require("../util/youtubeApi");
const musicSearch=require("../util/openai");
exports.getprompt=(req,res,next)=>{

    
        res.render("youtube/youtube",{
            oldInput:null,
            error:null,
            videoUrl:null,
            video:null
        });
    
}

exports.postprompt=async (req,res,next)=>{
  
        let description=req.body.description;
        let videoUrl
    try{
            const filter=`Your are Chatgpt , user has feels like this "${description}"  and want a modern song(available in youtube) describe his feelings: 

            song name and author only:`;
        let response=await musicSearch(filter);
        const video=await Search(response);
        const link=await musicDownload(video.id.videoId);
        console.log(link)
        videoUrl="https://www.youtube.com/watch?v="+video.id.videoId;
        console.log(videoUrl);
        return   res.render("youtube/youtube",{
            oldInput:null,
            error:null,
            videoUrl:videoUrl,
            mp3:link,
            video:{
                title:response,
                description:video.snippet.description,
                image:video.snippet.thumbnails.medium,

            }
        });
        
    }catch(err){
        console.log(err);
        return   res.render("youtube/youtube",{
            oldInput:{description:description},
            error:"Error:Please try again",
            videoUrl:null,
            video:null
                
        });
    }
    
    
}