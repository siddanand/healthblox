import CustomCircle from "../ui/customCircle";
import CustomRect from "../ui/customRect";

export default function ShapeContainer(props) {
  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <CustomRect
        value={{
          color: "lightgreen",
          onDragStart: () => {
            props.value.dragShape.current = "greenRect";
          },
        }}
      />
      <CustomRect
        value={{
          color: "red",
          onDragStart: () => {
            props.value.dragShape.current = "redRect";
          },
        }}
      />
      <CustomCircle
        value={{
          onDragStart: () => (props.value.dragShape.current = "circle"),
        }}
      />
    </div>
  );
}
