//objects and array syntax

//Object literal
const point ={x:1 ,y:2};
console.log(point);


//Accessing porperties
console.log(point.x);

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
console.log(circle);

//array
const languages=['HTML','CSS','JS']
console.log(languages);

//accessing length and elements;
for(let i=0;i<languages.length;i++){
  console.log(langusges[i]);
}

//changeing elements
languages[2]='JavaScript';

//adding elements
languages.push('MongoDB');

//iterating over elements
for(const lang of languages){
  console.log(lang);
}
