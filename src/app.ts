export function binarySearch<T>(arr: T[], target: T): number {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    const mid = Math.floor((startIndex + endIndex) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      startIndex = mid + 1;
    } else {
      endIndex = mid - 1;
    }
  }
  return -1;
}

export function canBeConstructed(
  firstWord: string,
  secondWord: string
): string {
  const firstWordArr = [...firstWord];
  const secondWordArr = [...secondWord].sort(); // 0(n log(n))

  // Return false if 1st word 1 lenght > 2nd word. as each char can only use one time for constructed.
  if (firstWordArr.length > secondWordArr.length) {
    return "NO";
  }

  for (const char of firstWord) {
    const index = binarySearch<string>(secondWordArr, char);
    if (index === -1) {
      return "NO";
    }
    secondWordArr.splice(index, 1);
  }
  return "YES";
}
