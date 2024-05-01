export function customFilterUnique(array, callback) {
  const uniqueElements = [];
  const uniqueKeys = new Set();
  array.forEach((item) => {
    const key = callback(item);
    if (!uniqueKeys.has(key)) {
      uniqueKeys.add(key);
      uniqueElements.push(item);
    }
  });
  return uniqueElements;
}

const objects = [
  { id: 1, name: "Red" },
  { id: 2, name: "Green" },
  { id: 3, name: "Yellow" },
  { id: 4, name: "Red" },
  { id: 5, name: "Blue" },
];

export function filterByName(object) {
  return object.name;
}

const uniqueObjects = customFilterUnique(objects, filterByName);
