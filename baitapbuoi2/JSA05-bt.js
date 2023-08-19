var fruit = [
  ["Grape", 15],
  ["Apple", 10],
  ["Banana", 2],
];
console.log("I have 15 grapes");

var fruit = [
  { name: "Grape", number: 15 },
  { name: "Apple", number: 10 },
  { name: "Banana", number: 2 },
];

for (var i = 0; i < fruit.length; i++) {
  console.log("name:", fruit[i].name);
  console.log("number:", fruit[i].number);
}


let fruits = [
  {name: "Grape", number: 15 },
  { name: "Apple", number: 10 },
  { name: "Banana", number: 2 },
];
  
var i = 0
do {
  console.log(fruits[i].name);
  console.log(fruits[i].number);
  i++;
} while (i <fruits.length);

let fruiter = [
    { name: "Grape", number: 15 },
    { name: "Apple", number: 10 },
    { name: "Banana", number: 2 },
  ];
   var i = 0;

  while (i < fruiter.length) {
    console.log(fruiter[i].name);
  console.log(fruiter[i].number);
  i++;
  }
  


var MyDog = {
  name: "Husky",
  legs: 4,
  color: "Brown",
};
console.log(MyDog);
