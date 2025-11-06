/*
ease : 애니메이션을 비선형적으로 움직이게 해주는 요소
default는 power1.out이다. 
power1, power2, power3, power4, back, bounce, 
circ, elastic, expo, sine, steps 옵션이 있다
.in, .out, .inOut으로 해당 요소의 시점을 정할 수 있다.
*/
gsap.to("#box1", { rotation: 360, duration: 4, ease: "none" });
gsap.to("#box2", { rotation: 360, duration: 4, ease: "steps(10)" });
gsap.to("#box3", { rotation: 360, duration: 4, ease: "bounce.Out" });
gsap.to("#box4", { rotation: 360, duration: 4, ease: "power1.inOut" });

/*
stagger : 애니메이션을 실행할 list를 받아서 그 안에 있는 element들에 차례로 애니메이션을 실행시켜준다
*/
gsap.to(".box1", {
  duration: 1,
  rotation: 360,
  opacity: 1,
  delay: 0.5,
  stagger: 0.1,
  ease: "sine.out",
});
document.querySelectorAll(".box1").forEach((box, index) => {
  box.addEventListener("click", () => {
    gsap.to(".box1", {
      duration: 0.5,
      opacity: 0,
      y: -100,
      stagger: {
        from: index, // stagger in from the clicked element's index
        amount: 1, // spread the entire stagger out over 1 second
      },
      ease: "back.in",
      overwrite: "auto",
      yoyo: true,
      repeat: 1,
    });
    return;
  });
});

gsap.to(".box2", {
  duration: 1,
  scale: 0.1,
  y: 40,
  ease: "power1.inOut",
  stagger: {
    grid: [5, 11],
    from: "random",
    amount: 1.5,
  },
  yoyo: true,
  repeat: 5,
});

/*
Timelines
순차적으로 애니메이션을 실행시킨다
 */
let tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
tl.to(".green", { rotation: 360 });
tl.to(".purple", { rotation: 360 });
tl.to(".orange", { rotation: 360 });

let tl2 = gsap.timeline({ repeat: -1 });
tl2.set("#loading_boll", {
  y: 50,
});
tl2.to("#loading_text", {
  y: 20,
  scaleY: 0.3,
  duration: 0.5,
  stagger: 0.5,
  ease: "bounce.out",
});
tl2.to(
  "#loading_boll",
  {
    y: 110,
    duration: 0.5,
    stagger: 0.5,
    ease: "power3.out",
  },
  "<"
);
tl2.to(
  "#loading_text",
  {
    y: 0,
    scaleY: 1,
    duration: 0.5,
    stagger: 0.5,
    ease: "bounce.in",
  },
  "<2"
);

tl2.to(
  "#loading_boll",
  {
    y: 50,
    duration: 0.5,
    stagger: 0.5,
    ease: "power3.out",
  },
  "<0.2"
);
