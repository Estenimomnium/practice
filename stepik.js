// function testStr(str, n) {
//   return str.charAt(n-1);
// }

// result = testStr("Ithardlycousinmealways", 19);
// console.log(result);

function testArray(a, b) {
  let massiv1 = 0;

  for (i = 0; i < a.length; i++) {
    massiv1 += a[i];
  }

  let massiv2 = 0;

  for (i = 0; i < b.length; i++) {
    massiv2 += b[i];
  }

  return massiv1 + massiv2;
}

result = testArray([8,1,1,7,4,0] , [5,8,5,4,8]);
alert(result);