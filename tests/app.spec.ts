import { canBeConstructed, binarySearch } from "../src/app";

test("canBeConstructed function should return correct output", () => {
  const inputs = [
    "hello eellloh",
    "aa ab",
    "aaa aba",
    "abcd daabbcc",
    "abcd aefgh",
    "hello eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeellloh"
  ];
  const expectOutputs = ["YES", "NO", "NO", "YES", "NO", "YES"];

  for (let i = 0; i < inputs.length; i++) {
    const words = inputs[i].split(" ");
    const firstWord = words[0];
    const secondWord = words[1];

    expect(canBeConstructed(firstWord, secondWord)).toBe(expectOutputs[i]);
  }
});

test("binarySearch function should return correct output", () => {
  expect(binarySearch([..."hello"], "h")).toBeTruthy;

  expect(binarySearch([..."eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeellloh"], "i"))
    .toBeFalsy;
});
