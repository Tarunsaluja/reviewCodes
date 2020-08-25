//Didn't understood the ques fully, what I got/understood coded that thing

let a1 = [
  [0, 0, 0],
  [0, 0, 0],
  [1, 1, 1],
];
let a2 = [
  [0, 1, 1],
  [1, 0, 0],
  [0, 1, 1],
];
let totalflips = 0;
let flag = 0;
let inputValue = "A";
while (totalflips < 20 || flag == 1) {
  var x = isMatrixEqual(a1, a2);
  if (x) {
    console.log("You Win");
    break;
  } else {
    whileCase(inputValue);
  }
}

//check if matrix is equal
function isMatrixEqual(a1: any, a2: any) {
  let flag = true;
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a1.length; j++) {
      if (a1[i][j] != a2[i][j]) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}

// printArr(a1, a2, totalflips)

// console.log()
//fliping the bits of the row or column of the matrix
function whileCase(inputValue: string) {
  let mayBeNumber = Number(inputValue);
  console.log(mayBeNumber);
  if (isNaN(mayBeNumber)) {
    for (let i = 0; i < a1.length; i++) {
      if (a1[i][inputValue.charCodeAt(0) - 65] == 0)
        a1[i][inputValue.charCodeAt(0) - 65] = 1;
      else {
        a1[i][inputValue.charCodeAt(0) - 65] = 0;
      }
    }
  } else {
    for (let i = 0; i < a1.length; i++) {
      if (a1[inputValue.charCodeAt(0) - 65][i] == 0)
        a1[inputValue.charCodeAt(0) - 65][i] = 1;
      else {
        a1[inputValue.charCodeAt(0) - 65][i] = 0;
      }
    }
  }
  totalflips = totalflips + 1;
  printArr(a1, a2, totalflips);
}

//print the matrix
function printArr(a1: any, a2: any, totalflips: any) {
  console.log("Your Flips: " + totalflips + " Goal: 20");
  console.log("----Board----");
  let rowAlphabet = "";
  for (let j = 0; j < a1.length; j++) {
    rowAlphabet += String.fromCharCode(j + 65) + " ";
  }

  console.log(" / " + rowAlphabet);

  for (let i = 0; i < a1.length; i++) {
    let rowVal = "";
    // console.log(a1.length)

    for (let j = 0; j < a1.length; j++) {
      rowVal += a1[i][j] + " ";
    }
    console.log(i + 1 + " " + rowVal);
  }

  console.log("----Goal----");
  console.log(" / A B C");

  for (let i = 0; i < a2.length; i++) {
    let rowVal = "";
    // console.log(a1.length)

    for (let j = 0; j < a2.length; j++) {
      rowVal += a2[i][j] + " ";
    }
    console.log(i + 1 + " " + rowVal);
  }
}
