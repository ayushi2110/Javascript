let count = [
  { user_id: 1, post: "hello" },
  { user_id: 2, post: "hello2" },
  { user_id: 1, post: "hello3" },
  { user_id: 3, post: "hello4" },
  { user_id: 3, post: "hello5" },
  { user_id: 1, post: "hello6" },
];

//let find count of post ==

function countVal(val) {
  let items = val.reduce((acc, item) => {
    let { user_id } = item;
    if (!acc[user_id]) {
      acc[user_id] = { user_id, post_count: 1 };
    } else {
      acc[user_id].post_count += 1;
    }
    return acc;
  }, []);
  return Object.values(items);
}

// console.log(countVal(count));

// [
//   { user_id: 1, post_count: 3 },
//   { user_id: 2, post_count: 1 },
//   { user_id: 3, post_count: 2 }
// ]

//==================================================

//find the averge of rating

let findAvg = [
  { id: 1, name: "xyz", rating: 8 },
  { id: 2, name: "xyz", rating: 0 },
  { id: 3, name: "xyz", rating: 3 },
  { id: 4, name: "xyz", rating: 4 },
];

function avg(item) {
  let count = 0;
  let value = item.reduce((accmu, val) => {
    if (val.rating > 0) {
      count++;
      accmu += val.rating;
    }
    return accmu;
  }, 0);
  let final = value / count;
  return final;
}
// console.log(avg(findAvg));

//==================================================

//Remove duplicate Array of Object

let books = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

let blank = {};
let arrBlank = [];
for (book of books) {
  if (!blank[book.title]) {
    blank[book.title] = true;
    arrBlank.push(book);
  }
}
console.log(arrBlank);
