//1.
var output = "";

for (var i = 1; i <= 4; i++) {
  for (var j = 1; j <= 4; j++) {
    if (i % 2 != 0) {
      output = output.concat("X");
    } else {
      output = output.concat("O");
    }
  }
  output = output.concat("\n");
}

console.log(output);

//2.
var sum = 0;
for (var y = 2; y <= 100; y + 2) {
  sum += y;
}
console.log(sum);
