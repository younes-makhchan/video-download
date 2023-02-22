require("dotenv").config();
const axios=require("axios");

const  musicDownload=async (videoId)=>{
  const apis=[{url:'https://youtube-mp3-download1.p.rapidapi.com/dl',headerHost:"youtube-mp3-download1.p.rapidapi.com"},
    {url:"https://youtube-mp36.p.rapidapi.com/dl",headerHost:"youtube-mp36.p.rapidapi.com"}]
  
  try{
    const {data}=await axios.request(getOptions(1,videoId));
    return data.link;
   

  }catch(err){
    const {data}=await axios.request(getOptions(0,videoId));
    console.log(data.YoutubeAPI);
    return data.YoutubeAPI.urlMp3;

  }
}



function getOptions(index,videoId){
  const options =[ {
    method: 'GET',
    url: 'https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess',
    params: {
      url: 'https://www.youtube.com/watch?v='+videoId,
      format: 'mp3',
      responseFormat: 'json',
      lang: 'en'
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 't-one-youtube-converter.p.rapidapi.com'
    }
  }, 
  {
    method: 'GET',
    url: "https://youtube-mp36.p.rapidapi.com/dl",
    params: {id: videoId},
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': "youtube-mp36.p.rapidapi.com"
    }
  }]
  return options[index];
}

module.exports=musicDownload;