export const onEquationDrop = (
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
) => {
  if (fromConnection != null) {
    if (
      fromConnection.shape != shape.shape &&
      !connections.some((el) => el.to.id === shape.id)
    ) {
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
  } else {
    //   if (
    //     !connections.some((el) => el.from.id === shape.id)
    //   )
    setFromConnection(shape);
  }
};
