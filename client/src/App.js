import "./App.css";
import Palette from "./components/Palette";
import { useEffect, useState } from "react";
import { init, subscript } from "./sockedApi";

function App() {
  const [activeColor, setActiveColor] = useState("#282c34");
  useEffect(() => {
    init();

    subscript((color) => {
      setActiveColor(color);
    });
  }, []);
  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <Palette activeColor={activeColor} />
    </div>
  );
}

export default App;
