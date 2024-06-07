import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <header className="header">
        <img src="/logo.svg" alt="Logo" className="logo" />
        <h1 className="title">Markdown Previewer</h1>
      </header>
      <div className="content">
        <textarea
          autoFocus
          id="textarea"
          className="textarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <ReactMarkdown
          children={input}
          className="markdown"
          components={{ code: Component }}
        />
      </div>
      <footer className="footer">Footer Content</footer>
    </div>
  );
}

const Component = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      children={String(children).replace(/\n$/, "")}
      style={docco}
      language={match[1]}
      PreTag="div"
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default App;
