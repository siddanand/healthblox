export default function ActionContainer(props) {
  return (
    <div style={{ marginTop: "20px" }}>
      <button style={{ marginRight: "10px" }} onClick={props.value.undo}>
        Undo
      </button>
      <button style={{ marginRight: "10px" }} onClick={props.value.reset}>
        Reset
      </button>
      <button style={{ marginRight: "10px" }} onClick={props.value.save}>
        Save
      </button>
      <button onClick={props.value.viewSaved}>View Last Saved</button>
    </div>
  );
}
