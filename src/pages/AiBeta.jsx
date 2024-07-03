import React ,{useState}from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai';

function AiBeta() {

    // const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GENERATIVE_API_KEY);
const genAI = new GoogleGenerativeAI("AIzaSyDHyV_5EcAlB51OabPqVuKIB05rxYk6Iho");


const [text, setText] = useState('')

async function run() {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  
    const prompt = "A chicken related recipe"
  
    const result = await model.generateContent(prompt);
    const response =  result.response;
    const text = response.text();
    // console.log(text);
    setText(text)
  }
  
//   run();

  return (
    <div className='h-screen'>{text}</div>
  )
}

export default AiBeta