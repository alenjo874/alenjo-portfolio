import logo from "./logo.svg";
import "./App.css";
import PagesContainer from "./components/Pages/PagesContainer";
import Home from "./components/Pages/Home/Home";
import NavBarConatiner from "./components/Header/NavBarContainer"

function App() {
  return (
    <div className="App">
      <Home />
      <NavBarConatiner />
      <PagesContainer />
    </div>
  );
}

export default App;
