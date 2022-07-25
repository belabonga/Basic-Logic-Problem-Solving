// RELEASE 0 - GENERATE BOARD
let row = 5; col = 4;


function generateBoard(row, col) {
    let arr = [];
    for (let i = 0; i < row; i++) {
        let inArr = [];
        for (let j = 0; j < col; j++) {
            let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let random = letter.charAt(Math.floor(Math.random() * letter.length))
            inArr.push(random)
        }
        arr.push(inArr)
    }
    return arr
}
// console.log(generateBoard(5, 4))

// RELEASE 1 - Get Block Filled with Vowels
function block(row, col) {
    let arr = generateBoard(row, col);
    let result = 0
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr[i].length - 1; j++) {
            let newArr = []
            newArr.push(arr[i][j])
            newArr.push(arr[i][j +1])
            newArr.push(arr[i+1][j])
            newArr.push(arr[i+1][j+1])

            let vowels = "AIUEO"
            let counterVowels = 0;
            for (l of newArr) {
                for (k of vowels) {
                    if (l === k) {
                        counterVowels += 1
                    }
                }
            }
            if (counterVowels === 4) {
                result += 1
            }
        }
    }
    return result;
}
console.log(generateBoard(5, 4), block(5, 4))