const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

function lowerCaseWords(mixedArray) {
  var filterArray = mixedArray.filter((data) => typeof data === "string");
  var lowerCase = filterArray.map((v) => v.toLowerCase());
  return new Promise((resolve, reject) => {
    resolve(lowerCase);
    if (filterArray == undefined) {
      reject("filterArray undefined");
    }
  });
}

console.log(lowerCaseWords(mixedArray));
