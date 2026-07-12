let num1 = 30;
let num2 = 15;
let result;
if (num1 > num2) 
    {
    result = num1 * 2; 
} else {
    result = num1 + num2; // sum of num1 and num2
}
console.log("Result using if-else: " + result);
let ternaryResult = (num1 > num2) ? (num1 * 2) : (num1 + num2);
console.log("Result using ternary: " + ternaryResult);
