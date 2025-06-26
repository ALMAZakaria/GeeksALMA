function allTruthy(...args){
  return args.every(Boolean)
}

console.log(allTruthy(true, true, true));          // true
console.log(allTruthy(true, false, true));         // false
console.log(allTruthy(5, 4, 3, 2, 1, 0));          // false (because 0 is falsy)
console.log(allTruthy('hello', 1, {}, []));        // true (all truthy)
console.log(allTruthy(null, 'non-empty'));         // false (null is falsy)
