let M = 4;
let N = 5;

// Function to preprocess input mat[M][N].
// This function mainly fills aux[M][N]
// such that aux[i][j] stores sum of
// elements from (0,0) to (i,j)
function solution(matrix, queries) {
  // Copy first row of mat[][] to aux[][]
  for (var i = 0; i < N; i++) queries[(0, i)] = matrix[(0, i)];

  // Do column wise sum
  for (var i = 1; i < M; i++)
    for (var j = 0; j < N; j++)
      queries[i][j] = matrix[i][j] + queries[i - 1][j];

  // Do row wise sum
  for (var i = 0; i < M; i++)
    for (var j = 1; j < N; j++) queries[i][j] += queries[i][j - 1];

  return 0;
}

// A O(1) time function to compute sum
// of submatrix between (tli, tlj) and
// (rbi, rbj) using aux[][] which is
// built by the preprocess function
function sumQuery(aux, tli, tlj, rbi, rbj) {
  // result is now sum of elements
  // between (0, 0) and (rbi, rbj)
  let res = aux[rbi][rbj];

  // Remove elements between (0, 0)
  // and (tli-1, rbj)
  if (tli > 0) res = res - aux[tli - 1][rbj];

  // Remove elements between (0, 0)
  // and (rbi, tlj-1)
  if (tlj > 0) res = res - aux[rbi][tlj - 1];

  // Add aux[tli-1][tlj-1] as elements
  // between (0, 0) and (tli-1, tlj-1)
  // are subtracted twice
  if (tli > 0 && tlj > 0) res = res + aux[tli - 1][tlj - 1];

  return res;
}

// Driver code

let mat = [
  [1, 2, 3, 4, 6],
  [5, 3, 8, 1, 2],
  [4, 6, 7, 5, 5],
  [2, 4, 8, 9, 4],
];

let aux = new Array(M, N);

preProcess(mat, aux);

let tli = 2,
  tlj = 2,
  rbi = 3,
  rbj = 4;
document.write("\nQuery1: " + sumQuery(aux, tli, tlj, rbi, rbj) + "<br>");

tli = 0;
tlj = 0;
rbi = 1;
rbj = 1;
document.write("\nQuery2: " + sumQuery(aux, tli, tlj, rbi, rbj) + "<br>");

tli = 1;
tlj = 2;
rbi = 3;
rbj = 3;
document.write("\nQuery3: " + sumQuery(aux, tli, tlj, rbi, rbj));
