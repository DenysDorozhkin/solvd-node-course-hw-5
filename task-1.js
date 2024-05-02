export function customFilterUnique(array, callback) {
  const countMap = new Map();
  array.forEach((item) => {
    const key = callback(item);
    countMap.set(key, (countMap.get(key) || 0) + 1);
  });
  const result = [];
  array.forEach((item) => {
    const key = callback(item);
    if (countMap.get(key) === 1) {
      result.push(item);
    }
  });
  return result;
}

const arr1 = [
  { id: 1, name: "test" },
  { id: 2, name: "foo" },
  { id: 3, boo: 3 },
  { id: 2, isAdmin: false },
];
const arr2 = [1, 2, "a", "b", 2, "b", 3];

console.log(customFilterUnique(arr1, (el) => el.id));
console.log(customFilterUnique(arr2, (el) => el));
