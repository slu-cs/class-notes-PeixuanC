//Function syntax

//function definition
const avg =function(a,b){
  return (a+b) / 2;
};

//function call
 console.log(avg(5,6));

 //another definition
 const print = function(a,b){
   console.log(`a=${a},b=${b}`);
 };

 //undefined values
 const result = print(7,8);
 console.log(result);
 print(9);
 print();

 //object litersl with a method
 const rectangle={
   width:10,
   height:20,
   area:function(){
     return this.width*this.height;
   }
 };

 //method call
 console.log(rectangle.area());

 //conatructor definition
 const Rectangle = function(width, height){
   this.width=width;
   this.height=height;
 };

 //Construction objects
const small=new Rectangle(1,2);
const large=new Rectangle(10,20);

//shared method for all rectangles
Rectangle.prototype.area=function(){
  return this.width*this.height;
};


console.log(small.area());
console.log(large.area());
