
////外部套件
import NavBar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Activity from "./components/Activity/Activity";
import Policy from "./components/Policy/Policy";

import "./assets/App.css";

import "./assets/all.scss";
import "./assets/index.css";

function App() {


  return (
    <div classNameName="App">
      <NavBar />
      <Main />
      <Activity />
      <Policy/>
    </div>
  );
}

export default App;
