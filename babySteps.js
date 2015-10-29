var sum = 0;
for (var j = 2; j <= process.argv.length - 1; j++) {
  sum += +process.argv[j];
}
console.log(sum);