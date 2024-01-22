export const onDrop = (
  e,
  shapes,
  setShapes,
  setBackTrack,
  backTrack,
  stageRef,
  dragShape
) => {
  e.preventDefault();
  stageRef.current.setPointersPositions(e);
  setShapes([
    ...shapes,
    {
      ...stageRef.current.getPointerPosition(),
      shape: dragShape.current,
      value: "",
      id: shapes.length,
      from: undefined,
    },
  ]);
  setBackTrack([...backTrack, { type: "shape", id: shapes.length }]);
};
