

//1. Create an array of objects representing the courses
// you are taking this semester. Each course should have
// a subject (e.g. 'CS') and a number (e.g. 332). Iterate through
//this array to find the largest course number in your schedule.
const Course=function(subject,number){
  this.subject=subject;
  this.number=number;

};

const cs364=new Course("CS",364);
const cs332=new Course("CS",332);
const cs250=new Course("CS",250);
const ma280=new Course("MATH",280);
const ma230=new Course("MATH",230);
const sta113=new Course("STAT",113);



const sp20=[]


sp20.push(cs364);
sp20.push(cs332);
sp20.push(cs250);
sp20.push(ma280);
sp20.push(ma230);
sp20.push(sta113);

for(let i=0;i<sp20.length;i++){
  console.log(sp20[i]);
};

//Sp20.prototype.max = function(){

//  for(let i=0;i<sp20.length;i++){
  //  if(sp20[i].number>ret){
    //  let ret=sp20[i].number;
    //}

  //}return ret;

//};
let ret=0;
for(let i=0;i<sp20.length;i++){

    if(sp20[i].number>ret){
       ret=sp20[i].number;
    }
  };
console.log(ret);


//2. Define a constructor function for Book objects. Each book should have
//a title and an array of authors. Define a shared method for books that
//lets you check whether a given author was one of the authors in this book.

const Book=function(title,author){
  this.title=title;
  this.anthor=author;

};

Book.prototype.hasAuthor
