import { useState } from "react";
import "./App.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";

const markdown = "# Hi, *Pluto*!";

createRoot(document.body).render(<Markdown>{markdown}</Markdown>);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello </h1>
      <textarea placeholder="type here"></textarea>
    </>
  );
}

export default App;
