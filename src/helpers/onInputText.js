export const onInputText = (e, index, shapes, setShapes, evaluteEquation) => {
  let selectedValue = shapes[index];
  selectedValue = {
    ...selectedValue,
    value: e,
  };
  shapes[index] = selectedValue;
  setShapes([...shapes]);
  evaluteEquation();
};
