import { canBeConstructed } from "./app";

function main(inputs: string[]): void {
  for (const input of inputs) {
    const words = input.split(" ");
    const firstWord = words[0];
    const secondWord = words[1];
    console.log(canBeConstructed(firstWord, secondWord));
  }
}

const inputs = [
  "hello eellloh",
  "aa ab",
  "aaa aba",
  "abcd daabbcc",
  "abcd aefgh",
];
console.log(inputs);
main(inputs);
