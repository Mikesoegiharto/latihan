// //bagian 1 no 2
// function arrToString (arr: string[]){
//     let str: string = ''
//     for (let i=0; i<arr.length; i++){
//         if (i === arr.length-1){
//             str += " and " + arr[i]
//         } else {
//             str += arr[i] + ' ,'
//         }
//     }
//     return str
// }
// console.log(arrToString(['apple', 'watermelon', 'pineapple']))
// //bagian 1 no 3
// function secondSmallest(nums: number[]){
//     let mySort = nums.sort((a:number, b:number)=> a-b);
//     return mySort[1]
// }
// console.log(secondSmallest([3, 7, 2, 8, 10]))
// //bagian 1 no 4
// function addItemArray(arr1: number[], arr2: number[]){
//     let result = []
//     for (let i=0; i<arr1.length; i++){
//         let res = arr1[i] + arr2[i]
//         result.push(res)
//     }
//     return result
// }
// console.log(addItemArray([1,2,3],[3,2,1]))
// //bagian 1 no 5
// function addDataArray(arr: number[], num){
//     let flag = true;
//     for (let i=0; i<arr.length; i++){
//         if(arr[i] == num) {
//             flag = false
//             return arr
//         }
//     }
//     arr.push(num)
//     return arr
// }
// //bagian 2 no 1
// function totalNumberDataType(arr: any[]){
//     let total: number = 0
//     for (let i=0; i<arr.length; i++){
//         if (typeof arr[i] == 'number'){
//             total += arr[i]
//         }
//     }
//     return total
// }
// console.log(totalNumberDataType([3, undefined, null, [], 1, true, 'a', 4, false]))
// //bagian 2 no 2
// function removeOverFlowData(arr: number[], maxSize: number){
//     let newArr = []
//     for (let i=0; i<maxSize; i++){
//         newArr.push(arr[i])
//     }
//     return newArr
// }
// console.log(removeOverFlowData([5,10,24,11,5,4,3,2,1], 5))
// //bagian 2 no 3
// function combineArray (arr1: number[], arr2: number[]){
//     return arr1.concat(arr2)
// }
// console.log(combineArray([1,2,3,4],[5,6,7,8]))
// //bagian 2 no 4
// function findDuplicateNumber(arr: number[]){
//     let duplicates = []
//     for (let i=0; i<arr.length; i++){
//         if (arr[i] === arr[i + 1] && duplicates[duplicates.length-1] != arr[i]){
//             duplicates.push(arr[i])
//         }
//     }
//     return duplicates
// }
// console.log(findDuplicateNumber([1,2,2,2,3,3,4,5,5]))
// //bagian 2 no 5
// function findDifference(num1: number[], num2: number[]){
//     let newArr: number[] = []
//     let mergeArr = [...num1, ...num2]
//     for (let i=0; i<mergeArr.length; i++){
//         let isDiff = true 
//         for (let j=0; j<mergeArr.length; j++){
//             if (mergeArr[i]=== mergeArr[j] && i !== j){
//                 isDiff = false
//                 break;
//             }
//         }
//        if (isDiff) {
//         newArr.push(mergeArr[i])
//        }
//     }
//     return newArr
// }
// console.log(findDifference([1,2,3,4,5], [3,4,5,6,7]))
// //bagian 3 no 1
// function findPrimitive(data: any[]){
//     let arr12= []
//     let mergeArr12 = [...data]
//     for (let i=0; i<data.length; i++){
//         if (typeof data[i] === 'string' || 'number' || 'bigint' ||
//              'boolean' || 'object' || 'object' || 'undefined' || 'null' || 'symbol'){
//                 arr12.push(data[i])
//              } else {
//                 console.log('salah')
//              }
//             //  return arr12;
//     }
//     return arr12;
// }
// console.log(findPrimitive([1, [], undefined, {}, "string", {}, []]));
//bagian 3 no 2
function sumDuplicate(duplicate) {
    var newDuplicate = [];
    for (var i in duplicate) {
        for (var j in duplicate) {
            if (i !== j && duplicate[i] === duplicate[j] && !newDuplicate.includes(duplicate[i])) {
                newDuplicate.push(duplicate[i]);
            }
        }
    }
    return newDuplicate;
}
console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]));
