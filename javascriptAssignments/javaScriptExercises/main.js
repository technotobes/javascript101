// Create a Palindrome app in Javascript which will console.log whether a string is a palindrome or not

// let reversedWord = ""

// function palindrome(word) {
    
//     for(let index = word.length - 1; index >= 0; index--) {
//         reversedWord += word[index]
//     }

//     if (word == reversedWord) {
//         console.log("Palindrome!")
//     } else {
//         console.log("Not Palindrome..")
//     }
// }

// palindrome("mom")

// Create an app which removes duplicates from an array ***********

// let friends = ["John","Mary", "Alex", "Steve", "Mary", "John"] 

// let uniqueFriends = [...new Set(friends)];

// console.log(uniqueFriends)

// Create an app which returns true/false depending on if the item is in the array **************

// let items = ["eggs","milk","cheese"]

// function isItem(word){
//     for(let index = 0; index <= items.length; index++) {
//         if (items[index] == word) {
//             console.log("True")
//             break
//         } else {
//             console.log("False")
//             break
//         }

//     }
// }

// isItem("cow")

// Create an app which finds the largest number in an array ***************

// let numbers = [1, 5, 4, 39, 3, 300]
// let largest = 0

// function largestNumber() {
//     for (let index = 0; index <= numbers.length; index++){
//         if (numbers[index] > largest) {
//             largest = numbers[index];
//             console.log(largest)
//         }

//     }

// }

// let largestMax = Math.max(...numbers)
// console.log(largestMax)

// Create an app which finds the smallest number in an array ***************

// let numbers = [1, 5, 4, 39, 3, 300, -1, -5]
// let smallest = 0

// function smallestNumber() {
//     for (let index = 0; index <= numbers.length; index++){
//         if (numbers[index] < smallest) {
//             smallest = numbers[index];
//             console.log(smallest)
//         }

//     }

// }

// smallestNumber()

// let smallestMin = Math.min(...numbers)
// console.log(smallestMin)

// Create FizzBuzz app ***********

// function fizzBuzz(number) {
//     if (((number % 5) == 0) && ((number % 3) == 0)) {
//         console.log("Fizz Buzz")
//     } else if (((number % 5) == 0)){
//         console.log("Buzz")
//     } else if (((number % 3) == 0)){
//         console.log("Fizz")
//     } else {
//         console.log("Invalid Number")
//     }
    
// }


// Create an app which determines whether the number is even or odd. ***********

// function evenOrOdd(number) {
//     if (((number % 2) == 0)) {
//         console.log("Number is Even!")
//     } else {
//         console.log("Number is Odd!")
//     }
// }

// evenOrOdd(8)

// Take the array [3,4,56,7,8,1] and sort them in ascending and descending order.

// let arr = [3,4,56,7,8,1]

// let n = arr.length
// //ascending
// for(let i = 0; i <= n; i++) {
//     for(let j = 0; j <= n; j++) {
//         if (arr[i] < arr[j]) {
//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }

// console.log(arr)
// //descending
// for(let i = 0; i <= n; i++) {
//     for(let j = 0; j <= n; j++) {
//         if (arr[i] > arr[j]) {
//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }

// console.log(arr)


// BANK ACCOUNT

class BankAccount {
    constructor(firstName, lastName, middleName, accountType, balance){
    this.firstName = firstName
    this.lastName = lastName
    this.middleName = middleName
    this.balance = balance
    this.accountType = accountType
    }

    deposit(amount) {
        this.balance = this.balance + amount    
    }

    withdraw(amount) {
        this.balance = this.balance - amount
    }

    transfer(amount, account) {
        this.balance = this.balance - amount 
        account.balance = account.balance + amount
    }

    charge() {
        if(this.balance <= 0) {
            this.balance = this.balance - 35
        } else {
            console.log("Balance is more than $0")
        }
    }
}