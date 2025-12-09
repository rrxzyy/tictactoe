function calculateWinner(board) {
  const winningCondition = [
    // by row
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // by cols
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // by cross
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < winningCondition.length; i++) {
    const [a, b, c] = winningCondition[i];

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
}

// Return the winning line indices (e.g. [0,1,2]) or null when there's no winner
export function getWinningLine(board) {
  const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCondition.length; i++) {
    const [a, b, c] = winningCondition[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return winningCondition[i];
    }
  }

  return null;
}

export default calculateWinner;