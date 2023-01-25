//sumTwoSmallestNums ([19,5,42,2,77])  7
//sumTwoSmallestNums ([10,343445353,3453445,3453545353453])   3453455
//sumTwoSmallestNums ([12,9,6,-11])  0
//sumTwoSmallestNums ([879,953,694,-847,342,221,-91,-723,791,-5871])  -5791
//sumTwoSmallestNums ([3683,2902,3951,-475,1617,-2385,])  4519

function sumTwoSmallestNumbers(numbers) {  
    const a = numbers.filter(v => v < numbers.sort( (a, b) => a - b )[2]);
    const b = a.reduce( (acc, n) => acc + n);
    return b
};
const arr = ([19,5,42,2,77])
const result = sumTwoSmallestNumbers(arr)
console.log(result)

