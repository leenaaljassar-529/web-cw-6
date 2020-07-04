// question 1
var ex = ["ex1", "ex2", "ex3"];
ex.forEach(logger);
function logger(x) {
  console.log(x);
}
// function logger(x) {
//   let examples = ["ex1", "ex2", "ex3"];

//   for (let counter = 0; counter < examples.length; counter++) {
//     console.log(examples);
//   }
// }

// let example = ["ex1", "ex2", "ex3"];

// console.log(example.filter(logger));

// function logger(y) {
//   console.log(example);
// }

// let examples = ["ex1", "ex2", "ex3"];
// examples.forEach(logger);

// function logger(x) {
//   console.log(x);
// }

// let hottestday = ["1", "2", "3", "4", "5", "6", "7"];

// for (x of hottestday) {
//   if (x > 5) {
//     console.log(x);
//   }
// }

// question 2
let degree = [47, 48, 49, 57];

console.log(degree.filter(myfunction));
function myfunction(x) {
  return x > 48;
}

//  question 3

let books = [
  {
    name: "book 1",
    ID: 1,
  },
  {
    name: "book 2",
    ID: 2,
  },
  {
    name: "book 3",
    ID: 3,
  },
  {
    name: "book 4",
    ID: 4,
  },
];

// function

let result = getbooksbyId(books, 7);
if (result == 1) {
  console.log("found");
} else {
  console.log("not found");
}
function getbooksbyId(books, ID) {
  for (i of books) {
    if (i.ID == ID) {
      return 1;
    }
  }
}
// التمرين الثاني
let cart = [];
shopping(cart);
function shopping(cart) {
  let start = parseInt(prompt("السلعة: اضغط 'انتهيت' عندما تنتهي"));
  if (start != "انتهيت") {
    let start = parseInt(prompt("السلعة: اضغط 'انتهيت' عندما تنتهي"));
    let price = prompt("السعر");
    let quantity = prompt("الكمية");
  }
}

// repeat above

console.log("-------------");
console.log("الفاتورة");
console.log("-------------");
console.log(quantity + start + price + "KD");

console.log("-------------");
console.log("final price:");

//
//
let shop = [];
let items = prompt("السلعة: اضغط 'انتهيت' عندما تنتهي");
