export const undo = (
  shapes,
  setConnections,
  setShapes,
  connections,
  backTrack
) => {
  let a = backTrack.pop();
  if (a) {
    if (a.type == "shape") {
      shapes.pop();
      setShapes([...shapes]);
    } else if (a.type == "connection") {
      let b = connections.pop();
      let index = shapes.findIndex((item) => item.id == b.to.id);
      shapes[index].from = undefined;
      setShapes([...shapes]);
      setConnections([...connections]);
    }
  }
};
