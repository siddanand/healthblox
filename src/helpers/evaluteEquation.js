export const evaluteEquation = (shapes, count, setShapes) => {
  let b = [];
  shapes.map((item, index) => {
    if (item.from == undefined) {
      b.push(index);
    }
  });

  b.map((item) => {
    let expression = `${shapes[item].value}`;
    findNextLink(shapes[item], expression, shapes, count, setShapes);
  });
};

const findNextLink = (element, expression, shapes, count, setShapes) => {
  let index = shapes.findIndex((item) => item?.from == element.id);
  if (shapes[index]) {
    if (shapes[index].shape != "redRect") {
      count++;
      expression = `${expression}${shapes[index]?.value}`;
      if (count % 2 == 0 && shapes[index]?.value) {
        expression = eval(expression);
      }
    }
    if (shapes[index].shape == "redRect") {
      shapes[index]["value"] = expression;
      setShapes([...shapes]);
      return;
    } else {
      findNextLink(shapes[index], expression, shapes, count, setShapes);
    }
  } else {
    return;
  }
};
