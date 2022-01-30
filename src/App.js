import "./App.css";
import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";
import { useState } from "react";

function App() {
  const [move, setMove] = useState(false);

  const toggleMove = () => {
    setMove(!move);
  };
  return (
    <div className="App">
      <div className={!move ? "app-wrapper" : "app-wrapper sidebar-move"}>
        <div
          className={!move ? "overlay" : "overlay active"}
          onClick={toggleMove}
        ></div>

        <button onClick={toggleMove}>Click me</button>
        <Header />
        <Footer />
        <div className={!move ? "side-nav" : "side-nav active"}>
          <button onClick={toggleMove} className="close">
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
