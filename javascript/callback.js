//syntax for callback


//this fumction uses another function
//to transform an array
const map=function(array,transform){
  const copy=[];
  for( const element of array){
    copy.push(transform(element));
  }
  return copy;
};

//this function can be used as the transform
const square =function(x){
  return x**2;
};

//we willk use this as the origional array
const numbers = [1, 2, 3, 4, 5];

//don=ing the transformation
console.log(map(numbers,square));

console.log(numbers);

//define other tranform with different arrow Function
console.log(map(numbers,x=>**2));
console.log(map(numbers,x=>x+1));

//using the array map mnethod
console.log(numbers.map(x=>x**2));
console.log(numbers.map(x=>x+2));
