//1. JavaScript arrays have a filter method that works like this:


//Try it out, and then write your own filter function, which would be called like this instead:

const numbers = [1, 2, 3, 4, 5];
//const odds = filter(numbers, x => x%2 > 0);
const filter=function(array,transform){
  const copy=[];
  for( const element of array){
    if(transform(elementelement)){
      copy.push(element);
    }

  }
  return copy;
};


const odds2 = filter(numbers, x => x%2 > 0);


const num=[4,2,5,1,3];

const sort=function(array,)



console.log(odds2);
