// 33. Write a js program to remove last occurrence of a word in given string.

function removeLastOccurrence(S, W, N, M) {
  // If M is greater than N
  if (M > N) return S;

  // Iterate while i is greater than
  // or equal to 0
  for (let i = N - M; i >= 0; i--) {
    // Stores if occurrence of W has
    // been found or not
    let flag = 0;

    // Iterate over the range [0, M]
    for (let j = 0; j < M; j++) {
      // If S[j+1] is not equal to
      // W[j]
      if (S[j + i] != W[j]) {
        // Mark flag true and break
        flag = 1;
        break;
      }
    }

    // If occurrence has been found
    if (flag == 0) {
      // Delete the substring over the
      // range [i, i+M]
      for (let j = i; j < N - M; j++) S[j] = S[j + M];

      // Resize the string S
      S = S.substring(0, N - M);
      break;
    }
  }

  // Return S
  return S;
}

// Driver Code

// Input
let S = "How many colors in a rainbow";
let W = "rainbow";
let N = S.length;
let M = W.length;

console.log(removeLastOccurrence(S, W, N, M));
