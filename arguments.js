function add(num1, num2) {
  console.log(arguments, arguments[2]); // array like object dekhlam
  const arg = [...arguments] // array like object theke array te convert korlam
  console.log(arg)
  return num1 + num2;
}

add(3,5,3,6,9)