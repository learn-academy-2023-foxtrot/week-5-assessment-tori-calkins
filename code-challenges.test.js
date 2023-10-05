// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.
describe("codedMessage", () => {
    it("returns a string with a coded message.", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
// Good Failure: ReferenceError: codedMessage is not defined
    
// Pseudo code:
// function name: codedMessage
// input: a string
// output: a string but with the the characters converted to coded message
// process: create a function, use .split to make the string into an array of each character separated so its able to be iterated through, then create a for loop to do the iterating for the array, then use conditional statements to see if the string in the array contain the characater and if it does, change the index of that character to the new character, then join it back together into a string.


const codedMessage = (string) => { //new function that takes in a string parameter
    const array = string.split("") // a new variable to turn the string into an array using split method and "" to separate each individual character in the array to its own string
        for(let i = 0; i < array.length; i++){ // for loop to iterate through the array
            if(array[i].includes("a") || array[i].includes("A")){ // conditional statement to state if the array's index includes the letter a either capitalized or not
                array[i] = 4 // change those indexes to 4
            } else if(array[i].includes("e") || array[i].includes("E")){// if index includes an e or E
                array[i] = 3// then replace it with 3
            } else if(array[i].includes("i") || array[i].includes("I")){ // if index includes a i or I
                array[i] = 1 // then replace it with 1
            } else if(array[i].includes("o") || array[i].includes("O")){ // if index includes a o or O
                array[i] = 0// replace it with 0
         }
    }
    return array.join("")// take the array and joins it back into a string
}
    // console.log(codedMessage(secretCodeWord1))
    // console.log(codedMessage(secretCodeWord2))
    // console.log(codedMessage(secretCodeWord3))
    
    

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.
describe("filteredArray", () => {
    it("returns an array of all the words containing that particular letter", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    const filterLetterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const filterLetterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    expect(filteredArray(fruitArray, filterLetterA)).toEqual(expect.arrayContaining(["Mango", "Apricot", "Peach"]))
    expect(filteredArray(fruitArray, filterLetterE)).toEqual(expect.arrayContaining(["Cherry", "Blueberry", "Peach"]))
    })
})
    // Good Failure: ReferenceError: filterArray is not defined
    
// Pseudo code:
// function name: filteredArray
// input: an array of words and a string
// output: a new array of the words that fit the condition
// process: create a function, put string and array as parameters for the function, use the .filter method to iterate through the array and see if the values contain the specific string and then return a new subset array of the true values.


const filteredArray = (array, string) => { // new function that takes in the parameters of string and array
    return array.filter((value) => value.includes(string) || value.includes(string.toUpperCase())) // filter through the array and if the value includes a string with the specific letter either capitalized or not, it'll return the array of the values that include the letter
}
// console.log(filteredArray(fruitArray, filterLetterA))
// console.log(filteredArray(fruitArray, filterLetterE))
// output: [ 'Mango', 'Apricot', 'Peach' ]
// [ 'Cherry', 'Blueberry', 'Peach' ]
    
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouseParty", () => {
    it("determines whether or not the array is a 'full house'", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
        expect(fullHouseParty(hand1)).toEqual(true)
        expect(fullHouseParty(hand2)).toEqual(false)
        expect(fullHouseParty(hand3)).toEqual(false)
        expect(fullHouseParty(hand4)).toEqual(true)
    })
})
// Good Failure: ReferenceError: fullHouseParty is not defined
    
const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: fullHouseParty
// input: an array
// output: is a boolean value
// process: create a function, then use the .sort() method to organize the array of numbers (put all the same values nect to each other), then create a conditional statement to go through the arrays indexes and if the first three or last three indexes are all the same number and the last two or first two indexes have the same number then return the boolean of true, any other case return false.
const fullHouseParty = (array) => { // new function that takes in the parameter of array
    array.sort() // uses sort method to organize the values so same values are clumped together
    if( // conditional statement
        (array[0] === array[1] && array[2] === array[4]) || (array[0] === array[2] && array[3] === array[4]) // states if the index of 0-1 is the same and 2-4 are the same OR if the indexes of 0-2 and 3-4 are the same then
    ){
        return true // return the boolean value of true
    }else{
        return false // if it doesnt match the statement above than resort to outputing false
    }
}
    // console.log(fullHouseParty(hand1))
    // console.log(fullHouseParty(hand2))
    // console.log(fullHouseParty(hand3))
    // console.log(fullHouseParty(hand4))
    