import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [ image, setImage ] = useState("");

  const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setImage(res.data.data[0].url);
  };

  return (
    <div className="App">
      <h1>Generate Image using OpenAI </h1>
      <input
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter the image prompt to generate image..."
      />
      <button onClick={generateImage}>Generate an Image</button>
      { image.length > 0 ? <img src={image} alt={prompt}/> : <></> }
    </div>
  );
}

export default App;
