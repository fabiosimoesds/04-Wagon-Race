// TODO: write your code here
// const playerOneList = document.querySelectorAll('#player1-race td');
// const playerTwoList = document.querySelectorAll('#player2-race td');

// let countOne = 0;
// let countTwo = 0;
// document.addEventListener('keyup', (event) => {
//   const code = event.code;
//   if (code === 'KeyQ') {
//     playerOneList[countOne].classList.toggle('active');
//     playerOneList[countOne + 1].classList.toggle('active');
//     countOne += 1;
//     if (countOne === 11) {
//       playerOneList[countOne].classList.toggle('active');
//       playerOneList[countOne].classList.toggle('finish');
//       playerOneList[countOne].classList.add('final1');
//       window.location.reload();
//     }
//   } else if (code === 'KeyP') {
//     playerTwoList[countTwo].classList.toggle('active');
//     playerTwoList[countTwo + 1].classList.toggle('active');
//     countTwo += 1;
//     if (countTwo === 11) {
//       playerTwoList[countTwo].classList.toggle('active');
//       playerTwoList[countTwo].classList.toggle('finish');
//       playerTwoList[countTwo].classList.add('final2');
//       window.location.reload();
//     }
//   }
// });

let countOne = 0;
let countTwo = 0;

const activeMove = (id) => {
  const activeCell = document.querySelector(`${id} .active`);
  activeCell.classList.toggle('active');
  activeCell.nextElementSibling.classList.toggle('active');
};

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyQ') {
    activeMove('#player1-race');
    countOne += 1;
  } else if (event.code === 'KeyP') {
    activeMove('#player2-race');
    countTwo += 1;
  }
  if (countOne === 11) {
    alert('Red Wagon is the Winner');
    window.location.reload();
  } else if (countTwo === 11) {
    alert('Yellow Wagon is the Winner');
    window.location.reload();
  }
});
