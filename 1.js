// /**
//  * Swaps the head and tail of the specified array:
//  * the head (first half) of array move to the end, the tail (last half) move to the start.
//  * The middle element (if exists) leave on the same position. *
//  *
//  * @param {array} arr - The input array.
//  * @return {array} - The swapped array.
//  *
//  * @example
//  *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
//  *    \----/   \----/
//  *     head     tail
//  *
//  *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
//  *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
//  *   swapHeadAndTail([ 1 ]) => [ 1 ]
//  *   swapHeadAndTail([]) => []
//  *
//  */
// function swapHeadAndTail(arr) {
//   let arrNew = [];
//   if (arr.length % 2 !== 0) {
//     const arr1 = arr.slice(0, Math.floor(arr.length / 2));
//     const arr2 = arr.slice(Math.ceil(arr.length / 2));
//     arrNew = arr2.concat(arr[Math.floor(arr.length / 2)], arr1);
//   } else {
//     const arr1 = arr.slice(0, Math.floor(arr.length / 2));
//     const arr2 = arr.slice(Math.ceil(arr.length / 2));
//     arrNew = arr2.concat(arr1);
//   }
//   return arrNew;
// }

// console.log(swapHeadAndTail([1, 2]));
// console.log(swapHeadAndTail([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(swapHeadAndTail([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(swapHeadAndTail([1]));
// console.log(swapHeadAndTail([]));
