const axios=require("axios");

exports.Search=async(query)=>{
    const response=await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+query+"&key=AIzaSyBFYvy18_rgbpcfoJNpNLvWzdtXMnlPK50");
    videoId=response.data.items[0].id.videoId;
    return videoId;
}