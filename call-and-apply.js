function valuedata(city) {
  return this.name + " from " + city;
}

var newobj = {
  name: "ayushi",
  lastname: "khurana",
};

var newobj1 = {
  name: "Diksha",
  lastname: "Negi",
};

console.log(valuedata.call(newobj1, "Delhi"));

// Call function
// var data = valuedata.call(newobj,'Delhi'); call function are borrowing other function ,
//second arrugment like value and call directly call the function
// var data = valuedata.apply(newobj,['Delhi']); apply also borrowing function , second arrugment in array
// var data = valuedata.bind(newobj,'Delhi'); bind create a new function

// console.log(data());
