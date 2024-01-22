import { Stage, Layer, Arrow, Rect, Text, Circle, Group } from "react-konva";
import { Html } from "react-konva-utils";
import { useEffect, useRef, useState } from "react";
import ActionContainer from "../ui/actionContainer";
import { viewSaved } from "../helpers/viewSaved";
import { undo } from "../helpers/undo";
import { save } from "../helpers/save";
import { onResultDrop } from "../helpers/onResultDrop";
import { onEquationDrop } from "../helpers/onEquationDrop";
import { onDrop } from "../helpers/onDrop";
import { onInputText } from "../helpers/onInputText";
import { evaluteEquation } from "../helpers/evaluteEquation";

export default function CanvasContainer(props) {
  let count = 0;
  const stageRef = useRef();
  const [shapes, setShapes] = useState([]);
  const [connections, setConnections] = useState([]);
  const [fromConnection, setFromConnection] = useState(null);
  const [backTrack, setBackTrack] = useState([]);

  useEffect(() => {
    evaluteEquation(shapes, count, setShapes);
  }, [connections]);

  return (
    <div>
      <ActionContainer
        value={{
          undo: () =>
            undo(shapes, setConnections, setShapes, connections, backTrack),
          reset: () => {
            setShapes([]);
            setConnections([]);
            setFromConnection(null);
            setBackTrack([]);
          },
          save: () => save(shapes, connections, backTrack),
          viewSaved: () =>
            viewSaved(
              backTrack,
              connections,
              shapes,
              setConnections,
              setShapes,
              setBackTrack
            ),
        }}
      />
      <div
        style={{ marginTop: "30px" }}
        onDrop={(e) =>
          onDrop(
            e,
            shapes,
            setShapes,
            setBackTrack,
            backTrack,
            stageRef,
            props.value.dragShape
          )
        }
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ border: "1px solid grey" }}
          ref={stageRef}
        >
          <Layer>
            {shapes.map((shape, index) => {
              if (shape.shape == "circle") {
                return (
                  <Group x={shape.x - 80} y={shape.y} key={shape.id}>
                    <Html>
                      <input
                        type="text"
                        defaultValue={shape.value}
                        style={{ width: "30%" }}
                        onChange={(e) => {
                          let re = new RegExp(/^[+\-*/\s]*$/);
                          if (re.test(e.target.value)) {
                            onInputText(
                              e.target.value,
                              index,
                              shapes,
                              setShapes,
                              () => evaluteEquation(shapes, count, setShapes)
                            );
                          } else {
                            e.target.value = "";
                          }
                        }}
                      />
                    </Html>
                    <Circle
                      onClick={() =>
                        onEquationDrop(
                          shape,
                          index,
                          connections,
                          fromConnection,
                          backTrack,
                          setBackTrack,
                          setConnections,
                          shapes,
                          setShapes,
                          setFromConnection
                        )
                      }
                      x={75}
                      y={7}
                      radius={40}
                      fill={fromConnection == shape ? "blue" : "lightblue"}
                    />
                  </Group>
                );
              } else if (shape.shape == "redRect") {
                return (
                  <Group x={shape.x - 50} y={shape.y} key={shape.id}>
                    <Rect
                      onClick={() =>
                        onResultDrop(
                          shape,
                          index,
                          shapes,
                          connections,
                          fromConnection,
                          setFromConnection,
                          setShapes,
                          setConnections,
                          backTrack,
                          setBackTrack
                        )
                      }
                      cornerRadius={10}
                      y={-40}
                      width={150}
                      height={100}
                      fill="red"
                    />
                    <Text
                      x={50}
                      text={shape.value}
                      align="center"
                      fontSize={17}
                    />
                  </Group>
                );
              } else if (shape.shape == "greenRect") {
                return (
                  <Group x={shape.x - 50} y={shape.y} key={shape.id}>
                    <Html>
                      <input
                        defaultValue={shape.value}
                        type="number"
                        style={{ width: "50%" }}
                        onChange={(e) =>
                          onInputText(
                            e.target.value,
                            index,
                            shapes,
                            setShapes,
                            () => evaluteEquation(shapes, count, setShapes)
                          )
                        }
                      />
                    </Html>
                    <Rect
                      onClick={() =>
                        onEquationDrop(
                          shape,
                          index,
                          connections,
                          fromConnection,
                          backTrack,
                          setBackTrack,
                          setConnections,
                          shapes,
                          setShapes,
                          setFromConnection
                        )
                      }
                      y={-40}
                      cornerRadius={10}
                      width={150}
                      height={100}
                      fill={fromConnection == shape ? "green" : "lightgreen"}
                    />
                  </Group>
                );
              }
            })}

            {connections.map((con) => {
              const from = shapes.find((s) => s.id === con.from.id);
              const to = shapes.find((s) => s.id === con.to.id);

              return (
                <Arrow
                  key={con.id}
                  points={[from.x, from.y, to.x, to.y]}
                  stroke="black"
                />
              );
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}
