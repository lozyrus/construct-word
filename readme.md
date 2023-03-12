# Check if a word can be constructed from another word
This program determines whether the first word in each element of array can be constructed using the letters from the second word. If the first word can be constructed from the second word, it outputs "YES". Otherwise, it outputs "NO".

## Input Format
Given a string array and each array's element contains two words separated by a space. Each word will contain at most 100 characters and only English lowercase letters.

## Output Format
For each array's element, output "YES" if the first word can be constructed from the second word. Otherwise, output "NO".


## Example
Input

```
["hello eellloh", "aa ab", "aaa aba", "abcd daabbcc", "abcd aefgh"]
```
Output

```
YES
NO
NO
YES
NO
```

> In the first element, the word "hello" can be constructed using the letters from the word "eellloh". Therefore, the output is "YES". In the second element, the word "aa" cannot be constructed using the letters from the word "ab". Therefore, the output is "NO".

## Implementation

Consider each word might contain 100 characters. Nested loop `O(n2)` is not an efficient way for to search for elements in an array or a string if the array or string is large. try to use Binary Search to reduce the step if the second word having many repeart characters or both words are having 100 characters.

## How to start

```
npm install && npm start
```

## Run Test

```
npm run test
```