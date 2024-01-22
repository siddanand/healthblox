export default function CustomCircle(props) {
  return (
    <div
      style={{
        borderRadius: "50%",
        padding: "50px",
        background: "lightblue",
      }}
      draggable="true"
      onDragStart={props.value.onDragStart}
    ></div>
  );
}
