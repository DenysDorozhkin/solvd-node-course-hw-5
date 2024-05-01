export function getArrayIntersection(arrayOne, arrayTwo) {
  let intersection = [];
  for (let element of arrayOne) {
    if (arrayTwo.includes(element) && !intersection.includes(element)) {
      intersection.push(element);
    }
  }
  return intersection;
}

export function getArrayUnion(arrayOne, arrayTwo) {
  let unionSet = new Set([...arrayOne, ...arrayTwo]);
  return [...unionSet];
}
