const squares = gsap.utils.toArray(".square");

function doFlip() {
  const state = Flip.getState(squares);
  swap(squares);
  Flip.from(state, { duration: 2, ease: "power1.inOut" });
}
function swap([a, b]) {
  a.parentNode.children[0] === a
    ? a.parentNode.appendChild(a)
    : a.parentNode.appendChild(b);
}
document.querySelector(".button1").addEventListener("click", doFlip);

// let isToggled = false;

// function doTo() {
//   if (isToggled) {
//     gsap.to(squares[0], { x: 0 });
//     gsap.to(squares[1], { x: 0 });
//   } else {
//     gsap.to(squares[0], { x: "+450" });
//     gsap.to(squares[1], { x: "-450" });
//   }
//   isToggled = !isToggled;
// }
// document.querySelector(".button2").addEventListener("click", doTo);

function doTo() {
  const pos0_x = squares[0].getBoundingClientRect().x;
  const pos1_x = squares[1].getBoundingClientRect().x;
  const distanceToMove = pos1_x - pos0_x;
  let isOriginalState = gsap.getProperty(squares[0], "x") === 0;

  if (isOriginalState) {
    gsap.to(squares[0], { x: distanceToMove });
    gsap.to(squares[1], { x: -distanceToMove });
  } else {
    gsap.to(squares[0], { x: 0 });
    gsap.to(squares[1], { x: 0 });
  }
}

document.querySelector(".button2").addEventListener("click", doTo);
/* section2 */

const group = document.querySelector(".group");

document.querySelector(".button3").addEventListener("click", () => {
  const state = Flip.getState(".group, .box");
  console.log(state);
  group.classList.toggle("reorder");
  Flip.from(state, {
    absolute: true,
    duration: 0.5,
    stager: 0.1,
    ease: "power1.inOut",
  });
});

/* section3 */
