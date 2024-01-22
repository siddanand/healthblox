export const onResultDrop = (
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
) => {
  if (fromConnection != null && shapes[index].from == undefined) {
    if (fromConnection.shape == "greenRect") {
      setBackTrack([
        ...backTrack,
        { type: "connection", id: connections.length },
      ]);
      const newConnection = {
        from: fromConnection,
        to: shape,
        id: connections.length,
      };
      setConnections([...connections, newConnection]);
      const newShape = {
        ...shape,
        from: fromConnection.id,
      };
      shapes[index] = newShape;
      setShapes([...shapes]);
    }
    setFromConnection(null);
  }
};
