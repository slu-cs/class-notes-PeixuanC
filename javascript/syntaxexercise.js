//Print the sum of the squares of the integers from 1 through 10.
//Print the first Fibonacci number that is greater than 1000.
//Print the number of integers from 1 through 100 that are divisible by 3 or 5 but not both.
//Print the smallest integer that is divisible by all the integers from 1 through 10.
let x=0;
let z=0;

while (x<11){
  let y=x
  let z=y**2
x--;
}
console.log(z);

let x=0
let z=1
let y=0
while(x<1000){
  y=z;
  z+=y;
  x++
}
console.log(y);
