function playGame() {
  // SET VARIABLES FOR PLAYER 1
  let random1 = Math.ceil(Math.random() * 5);
  const player1 = document.querySelector("#img1");

  player1.setAttribute("src", "images/card" + random1 + ".jpg");

  // SET VARIABLES FOR PLAYER 2
  let random2 = Math.ceil(Math.random() * 5);
  const player2 = document.querySelector("#img2");

  player2.setAttribute("src", "images/card" + random2 + ".jpg");

  // WIN CONDITIONS
  const result = document.querySelector("#results");

  if (random1 > random2) {
    result.textContent = "Player 1 Wins!";
  } else if (random1 == random2) {
    result.textContent = "Draw";
  } else {
    result.textContent = "Player 2 Wins!";
  }
}
