export const save = (shapes, connections, backTrack) => {
  localStorage.setItem(
    "Saved",
    JSON.stringify({
      shapes: shapes,
      connections: connections,
      backTrack: backTrack,
    })
  );
};
