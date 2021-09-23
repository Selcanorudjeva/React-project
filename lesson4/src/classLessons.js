// ES5 class systems
// var infoFunc = function(){
//   console.log("Success");
// }


// ES6 class systems
// var infoFunc = () =>{
//   console.log("Success");
// }

// var infoData = new infoFunc();

// console.log(infoData);

// class infoData{
//   infoTime(){
//     console.log("Time Now");
//   }
// }

// var infoClass = infoData;
// console.log(infoClass);



class infoData{
    constructor(name,year){
        this.addName = name;
        this.addYear = year;
    }
    // calculateAge(){
    //   return new Date.getFullYear() - this.addYear;
    // }
  
  
    sayHi(item){
      return `${item},Hello ${this.addName}`;
    }
    sayYear(){
      return `${this.addYear}`;
    }
  }
  
  
  
  class schoolData extends infoData{
    constructor(name,year,subject){
    super(name,year);
      this.subject = subject;
    }
    schoolName(){
   return this.subject;
    }
  }
  
  
  // var myData = new infoData("Hasan", 1997);
  var myData = new schoolData("Hasan", 1997,"Math");
  // var mySchool = new schoolData("HightSchool");
  
  console.log(myData.sayHi("Hey"));
  console.log(myData.sayYear());
  console.log(myData.schoolName("Hey"));