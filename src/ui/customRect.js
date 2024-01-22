export default function CustomRect(props) {
  return (
    <div
      style={{
        borderRadius: "10px",
        padding: "20px 20px 40px 40px",
        width: "100px",
        background: props.value.color,
      }}
      draggable="true"
      onDragStart={props.value.onDragStart}
    ></div>
  );
}
