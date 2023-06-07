let arrVal = [1, 5, 7, 2, 1, 5];
for (i = 0; i < arrVal.length; i++) {
  for (j = 0; j < arrVal.length; j++) {
    if (arrVal[i] != arrVal[j]) {
      console.log(arrVal[i]);
    }
  }
}

console.log(arrVal[1]);
