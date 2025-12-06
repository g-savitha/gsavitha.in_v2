import { Sandpack } from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";

export default function Sandbox() {
  return (
    <div className="w-full my-8 border border-black rounded-none comic-box bg-white overflow-hidden">
      <Sandpack
        template="react"
        theme={atomDark}
        options={{
          showLineNumbers: true,
          showInlineErrors: true,
          editorHeight: 500,
          showTabs: true
        }}
        files={{
          "/App.js": `import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      padding: "40px", 
      fontFamily: "system-ui, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#1e1e1e",
      height: "100vh",
      color: "white"
    }}>
      <h1 style={{ 
        background: "linear-gradient(to right, #e879f9, #22d3ee)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize: "3rem",
        marginBottom: "2rem"
      }}>
        Hello, Savitha!
      </h1>
      
      <div style={{
        background: "rgba(255,255,255,0.1)",
        padding: "2rem",
        borderRadius: "1rem",
        backdropFilter: "blur(10px)",
        textAlign: "center"
      }}>
        <p style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Count: {count}
        </p>
        <button 
          onClick={() => setCount(c => c + 1)}
          style={{
             background: "#8b5cf6", 
             color: "white", 
             border: "none", 
             padding: "12px 24px", 
             borderRadius: "99px",
             fontSize: "1rem",
             fontWeight: "bold",
             cursor: "pointer",
             boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.5)"
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}`
        }}
      />
    </div>
  );
}
