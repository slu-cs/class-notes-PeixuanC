//objects and array syntax

//Object literal
const point ={x:1 ,y:2};
console.log(point);


//Accessing porperties
consle.log(point.x);

//changing porperties
point.x=3

//nested object literal
const circle={
  center:point,
  radius:4
};

//accessing subproperties
console.log(circle.center.x);

//undefiend subproperties
console.log(circle.color);
circle.color='blue';
consle.console.log(circle);
