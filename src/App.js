import "./App.css";
import ShapeContainer from "./components/shapeContainer";
import CanvasContainer from "./components/canvasContainer";
import { useRef } from "react";

function App() {
  const dragShape = useRef();
  return (
    <div className="App" style={{ padding: "20px" }}>
      HealthBlox
      <br />
      Drag and Drop the shapes to Start.
      <br />
      Click on the shapes to join two shapes, input in the input box to
      evaluate.
      <ShapeContainer value={{ dragShape }} />
      <CanvasContainer value={{ dragShape }} />
    </div>
  );
}

export default App;
