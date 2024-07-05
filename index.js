const express = require("express");
const app = express();
const port = 3000;

let numbers = [1, 2, 3, 4, 5];

let strings = ["hello", "world", "javascript", "node"];

// numbers/multiply
function multiplyNumber(numbers, multiplier) {
  return numbers.map((number) => number * multiplier);
}

app.get("/numbers/multiply", (req, res) => {
  let multiplier = parseFloat(req.query.multiplier);
  let result = multiplyNumber(numbers, multiplier);
  res.json({ result: result });
});

// strings/concat
function concatStrings(strings, suffix) {
  return strings.map((string) => string + suffix);
}
app.get("/strings/concat", (req, res) => {
  let suffix = req.query.suffix;
  let result = concatStrings(strings, suffix);
  console.log(result);
  res.json({ result: result });
});

// numbers/remove-odds
function removeOddNumbers(numbers) {
  let oddNum = numbers.filter((number) => number % 2 === 0);
  return oddNum;
}
app.get("/numbers/remove-odds", (req, res) => {
  let result = removeOddNumbers(numbers);
  res.json({ result: result });
});

// strings/join
function joinStrings(strings) {
  return strings.join(" ");
}
app.get("/strings/join", (req, res) => {
  let result = joinStrings(strings);
  res.json({ result: result });
});

// numbers/double
function doubleNumbers(numbers) {
  let doubleNum = numbers.map((number) => number * 2);
  return doubleNum;
}
app.get("/numbers/double", (req, res) => {
  let result = doubleNumbers(numbers);
  console.log(result)
  res.json({ result: result });
});

app.listen(port, () => {
  console.log(`istening on port ${port}`);
});
