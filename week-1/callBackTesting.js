function Sum(num1, num2, fnToCall) {
  var ans = num1 + num2;
  fnToCall(ans);
}
function display(result) {
  console.log(result);
}

Sum(1, 2, display);
