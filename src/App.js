import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const configuration = new Configuration({ apiKey: process.env.OPEN_API_KEY });
  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: "Say this is a test",
      n: 1,
      size: "1024x1024",
    });
    console.log(res);
  };

  return (
    <div className="App">
      <button onClick={generateImage}>Generate an Image</button>
    </div>
  );
}

export default App;
