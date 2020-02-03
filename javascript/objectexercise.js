

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



const Sp20=function(){
  [];
};

Sp20.push(cs364);
Sp20.push(cs332);
Sp20.push(cs250);
Sp20.push(ma280);
Sp20.push(ma230);
Sp20.push(sta113);

for(let i=0;i<sp20.length;i++){
  console.log(sp20[i]);
};

Sp20.prototype.max = function(){
  let ret=0;
  for(let i=0;i<sp20.length;i++){
    if(sp20[i].number>ret){
      let ret=sp20[i].number;
    }

  }return ret;

};
console.log(Sp20.max());
