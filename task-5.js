import { customFilterUnique } from "./task-1.js";
import { chunkArray } from "./task-2.js";
import { customShuffle } from "./task-3.js";
import { getArrayIntersection, getArrayUnion } from "./task-4.js";

function measureArrayPerformance(func, array) {
  const startTime = performance.now();
  func(array);
  const endTime = performance.now();
  return endTime - startTime;
}

const testArray = Array.from({ length: 1000 }, (_, i) => i);
const testArrayObjects = Array.from({ length: 1000 }, (_, i) => ({
  name: i.toString(),
}));
const testArrayAdditional = Array.from({ length: 1000 }, (_, i) => i * 2);

const mapFunc = (array) => array.map((x) => x * 2);
const filterFunc = (array) => array.filter((x) => x % 2 === 0);
const reduceFunc = (array) => array.reduce((acc, current) => acc + current, 0);
const customFilterUniqueFunc = (array) =>
  customFilterUnique(array, (el) => el.name);
const chunkArrayFunc = (array) => chunkArray(array, 4);
const customShuffleFunc = (array) => customShuffle(array);
const getArrayIntersectionFunc = (array) =>
  getArrayIntersection(array, testArrayAdditional);
const getArrayUnionFunc = (array) => getArrayUnion(array, testArrayAdditional);

const mapTime = measureArrayPerformance(mapFunc, testArray);
const filterTime = measureArrayPerformance(filterFunc, testArray);
const reduceTime = measureArrayPerformance(reduceFunc, testArray);
const customFilterUniqueTime = measureArrayPerformance(
  customFilterUniqueFunc,
  testArrayObjects
);
const chunkArrayTime = measureArrayPerformance(chunkArrayFunc, testArray);
const customShuffleTime = measureArrayPerformance(customShuffleFunc, testArray);
const getArrayIntersectionTime = measureArrayPerformance(
  getArrayIntersectionFunc,
  testArray
);
const getArrayUnionTime = measureArrayPerformance(getArrayUnionFunc, testArray);

console.log("map:", mapTime.toFixed(2), "ms");
console.log("filter:", filterTime.toFixed(2), "ms");
console.log("reduce:", reduceTime.toFixed(2), "ms");
console.log("customFilterUnique:", customFilterUniqueTime.toFixed(2), "ms");
console.log("chunkArray:", chunkArrayTime.toFixed(2), "ms");
console.log("customShuffle:", customShuffleTime.toFixed(2), "ms");
console.log("getArrayIntersection:", getArrayIntersectionTime.toFixed(2), "ms");
console.log("getArrayUnion:", getArrayUnionTime.toFixed(2), "ms");
