export function viewSaved(
  backTrack,
  connections,
  shapes,
  setConnections,
  setShapes,
  setBackTrack
) {
  let a = localStorage.getItem("Saved", {
    shapes: shapes,
    connections: connections,
    backTrack: backTrack,
  });
  if (a != undefined) {
    a = JSON.parse(a);
    setConnections([...a.connections]);
    setShapes([...a.shapes]);
    setBackTrack([...a.backTrack]);
  }
}
