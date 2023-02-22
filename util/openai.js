require("dotenv").config()
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});


module.exports=async (filter)=>{
    const openai = new OpenAIApi(configuration);

   let completion=await openai.createCompletion({
      model: "text-davinci-003",
      prompt: filter,
      max_tokens: 200,
      temperature: 0.6,
    })
    return completion.data.choices[0].text; 
      
}
