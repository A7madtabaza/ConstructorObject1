
// Create a constructor function called Car that accepts the following parameters:
// o brand (string)
// o model (string)
// o year (number)
// Inside the constructor, define a method called  
// getDetails that returns a string in
// the following format:

// &quot;Brand: [brand], Model: [model], Year: [year]&quot;
// function car(brand, model,year) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
//     this.getDetails=function() {
//       return`brand :${this.brand}  model${this.model}  year${this.year}`
//      }
// }
// let Info = new car("BMW", "X5", 2009);
// console.log(Info);
// console.log(Info.getDetails());
// // Create three instances of the Car object
// //  with different values for brand, model,
// // and year.
//         let car1 = new car('toyota','corola',2020);
//         let car2 = new car("toyota", " model 3",2021);
//          let car3 = new car("fored", " mosting", 2021);
//         console.log("car1:", car1);
//         console.log("car2:",car2);
//         console.log("car3", car3);
// console.log(car1.getDetails());
// console.log(car2.getDetails());
// console.log(car3.getDetails());

// : Create a function called objectToArray that accept an object and 
// return an array of the keys and values in this object
// Example: objectToArray({firstName:"Moh",age:24})
// => ["firstName","Moh","age",24]

// function objectToArray(firstName, age) {




// }
 

// let person = {
//         firstName:"ahmad",
//         age:"24",
//      };

//       console.log("Object Keys:", Object.keys(person)); 
//   console.log("Object Values:", Object.values(person)); 
// ----------------------------------------------------------------------------------------------------------------
// Q1: Using the variable personsCreate a function called firstName that accept an object
// and return all the first name of the person insides
// Example: firstName(persons) =>&gt;
// [&#39;John&#39;, &#39;Alex&#39;, &#39;Alice&#39;, &#39;Thor&#39;,
// &#39;Soso&#39;]

// function person(firstName, lastname) {
//   this. firstName= firstName;
//   this.lastname = lastname;
// }

// let person1 = new person("Ahmad", "jamal");
// let person2 = new person("christen", "read");

// function gitfirstname(obj) {
//   return obj.firstName;
// }

// console.log(gitfirstname(person1));
// console.log(gitfirstname(person2));
// ----------------------------------------------------------------
// Q3: Create a function called objectToArray that accept an object and return an array of the keys and values in this object
// Example: objectToArray({firstName:"Moh",age:24})
// => ["firstName","Moh","age",24]

// function objectToArray(obj,firstName,age) {
//     this.firstName=firstName;
//     this,age=age;
//   let arr = [];
//   for (let i in obj) {
//     for (let j in obj[i]) {
//       arr.push(obj[i][j]);
//     }
//   }
//   return arr;
// }
// let person1 = new objectToArray("Ahmad", 26);
// console.log(objectToArray.person1);
function objectToArray(obj) {
  let arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(obj[key]); // إضافة قيم الخصائص إلى المصفوفة
    }
  }
  return arr;
}

// كائن يحتوي على خصائص
let person1 = {
  firstName: "Ahmad",
  age: 26
};

// استدعاء الدالة لتحويل الكائن إلى مصفوفة
let result = objectToArray(person1);

console.log(result);
// الناتج: ["Ahmad", 26]