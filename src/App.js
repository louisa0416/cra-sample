import { useEffect, useState } from "react";
import axios from "axios";
////外部套件
import logo from "./assets/logo.svg";
import "./assets/App.css";
import Input from "./components/input";
import "./assets/all.scss";

function App() {
  const [text, setText] = useState("");
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    (async () => {
      // console.log(process.env.REACT_APP_PATH);
      const path = process.env.REACT_APP_PATH
      const results = await axios.get(path);
      console.log(results);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>這是一個簡單的CRA範例</h1>
        <p>
          Create React App (CRA) 和 Vite 是前端熱門的建構工具(build tool)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {text}
        <Input
          id="name"
          value={text}
          text="姓名"
          onChangeHandler={onChangeHandler}
        ></Input>
        <button type="button" className="btn btn-primary">Primary</button>
      </header>
    </div>
  );
}

export default App;
