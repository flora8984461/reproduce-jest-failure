import { useEffect, useState } from "react";
import "./styles.css";

const sleep = (duration: number) => new Promise((r) => setTimeout(r, duration));

export default function App() {
  const [content, setContent] = useState("");

  useEffect(() => {
    (async () => {
      await sleep(500);
      setContent("hello world");
    })();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>{content}</div>
    </div>
  );
}
