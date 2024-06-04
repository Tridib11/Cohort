function Sum(num1, num2, fnToCall) {
  ans = num1 + num2;
  fnToCall(ans);
}

function result(ans) {
  console.log(ans);
}

Sum(1, 2, result);
