// JavaScript program to implement the FizzBuzz problem
for (let i=1; i<=100; i++) {
    // Numbers that are divisible by 3 and 5
     // are always divisible by 15
     // Therefore, "FizzBuzz" is printed in place of that number
    if (i%15 == 0) {
    console.log("FizzBuzz" + " ");
    }
    // "Fizz" is printed in place of numbers
     // that are divisible by 3
    else if ((i%3) == 0) {
        console.log("Fizz" + " ");
    }
    // "Buzz" is printed in place of numbers
     // that are divisible by 5
    else if ((i%5) == 0) {
        console.log("Buzz" + " ");
    }
    // If none of the above conditions are satisfied,
     // the number is printed
    else {
        console.log(i + " ");
    }
    }