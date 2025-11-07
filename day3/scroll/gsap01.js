const box1 = document.querySelector("#section1 .parallax__item__img");
const box2 = document.querySelector("#section2 .parallax__item__img");
const box3 = document.querySelector("#section3 .parallax__item__img");
const box4 = document.querySelector("#section4 .parallax__item__img");
const box5 = document.querySelector("#section5 .parallax__item__img");
const box6 = document.querySelector("#section6 .parallax__item__img");
const box7 = document.querySelector("#section7 .parallax__item__img");
const box8 = document.querySelector("#section8 .parallax__item__img");
const box9 = document.querySelector("#section9 .parallax__item__img");

gsap.to(box1, {
  duration: 2,
  x: 500,
  borderRadius: 100,
  rotation: 360,
});
gsap.to(box2, {
  duration: 2,
  x: 500,
  borderRadius: 100,
  rotation: 360,
  scrollTrigger: {
    trigger: box2, //스크롤 후 box2가 보이는 영역에 오면 움직임
  },
});
gsap.to(box3, {
  duration: 1,
  x: 500,
  borderRadius: 100,

  scrollTrigger: {
    trigger: box3,
    toggleActions: "play none none reset",
    //애니메이션의 4가지 행동을 설정함
    // 애니메이션 객체가 보일 때, 애니메이션 객체가 위로 완전히 사라졌을 때,
    // 애니메이션 객체가 화면 위쪽에서 다시 보일 때, 애니메이션 객체가 아래로 완전히 사라졌을 때
    // play, pause, resume, reset, restart, complete, reverse, none 으로 설정 가능
  },
});
gsap.to(box4, {
  duration: 1,
  x: 500,
  borderRadius: 100,

  scrollTrigger: {
    trigger: box4,
    start: "top 50%",
    end: "bottom 20%",
    toggleActions: "play complete reverse reset ",
    markers: false,
    //애니메이션의 시작점과 끝점을 설정
  },
});
gsap.to(box5, {
  duration: 1,
  x: 500,
  borderRadius: 100,

  scrollTrigger: {
    trigger: box5,
    start: "top 50%",
    end: "bottom 20%",
    scrub: 1, //스크롤 값에 따라 애니메이션이 움직이도록 설정
    markers: false,
  },
});
gsap.to(box6, {
  duration: 2,
  x: 200,
  borderRadius: 20,
  scrollTrigger: {
    trigger: box6,
    start: "top 50%",
    end: "bottom 300px",
    pin: true,
    // 객체를 화면에 고정시킬 수 있으며 end 지점까지 고정됨
    scrub: true,
    markers: true,
  },
});
gsap.to(box7, {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,

  scrollTrigger: {
    trigger: box7,
    start: "top center",
    end: "bottom top",
    scrub: true,
    markers: false,
    toggleClass: "active",
    // css요소를 추가할 수 있다
  },
});
gsap.to(box8, {
  duration: 2,
  x: 500,
  rotation: 360,
  borderRadius: 100,

  scrollTrigger: {
    trigger: box8,
    start: "top center",
    end: "bottom 30%",
    scrub: true,
    markers: false,
    // onEnter : () => {console.log("onEnter")},
    // onLeave : () => {console.log("onLeave")},
    // onEnterBack : () => {console.log("onEnterBack")},
    // onLeaveBack : () => {console.log("onLeaveBack")},
    // onUpdate : (self) => {console.log("onUpdate", self.progress.toFixed(3))},
    onToggle: (self) => {
      console.log("onToggle", self.isActive);
    },
  },
});
