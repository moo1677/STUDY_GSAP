/* control Method */
let nav = document.querySelector(".nav");
let tween = gsap.to(".flair", {
  duration: 2,
  x: () => nav.offsetWidth,
  xPercent: -100,
  rotation: 360,
  ease: "none",
  paused: true,
});
document.querySelector("#play").onclick = () => tween.duration(5);
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();

/* 
  Callbacks 
애니메이션이 언제 시작되는지 알아야하거나, 애니메이션이 끝날 때 JS를 실행해야하는 경우 콜백을 사용함
*/

gsap.fromTo(
  ".callBack",
  { x: -200 },
  {
    duration: 3,
    x: () => 200,
    repeat: 2,
    onComplete: () => console.log("the tween is complete"),
    onStart: () => console.log("the tween is start"),
    onUpdate: () => console.log("the tween is update"),
    onRepeat: () => console.log("the tween is repeat"),
    onReverseComplete: () => console.log("the tween is repeat complete"),
  }
);
/* 
ScrollTrigger 
*/
gsap.to(".box", {
  x: 500,
  duration: 5,
  scrollTrigger: {
    trigger: ".box",
  },
});
