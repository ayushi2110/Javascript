//zigzag

function zigzag(str, numRows) {
  if (numRows === 1) return str;

  let fillRow = new Array(numRows).fill("");
  let step = 1;
  let index = 0;

  for (let char of str) {
    fillRow[index] += char;
    if (index === 0) step = 1;
    else if (index === numRows - 1) step = -1;
    index += step;
  }
}
zigzag("PAYPALISHIRING", 3);
