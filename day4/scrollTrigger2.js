//section1
const ani1 = gsap.timeline();
ani1
  .to("#section1 .parallax__item__img", {
    rotation: 720,
    scale: 0,
    borderRadius: 200,
  })
  .to("#section1 .parallax__item__img", {
    rotation: 0,
    scale: 1,
    borderRadius: 2,
  });
ScrollTrigger.create({
  animation: ani1,
  trigger: "#section1",
  start: "top top ",
  end: "+=2000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});
//section2
const ani2 = gsap.timeline();
ani2
  .from("#section2 .i1", {
    y: -100,
    autoAlpha: 0, // opacity와 동일한 개념 투명도를 나타냄
    borderRadius: 200,
  })
  .from("#section2 .i2", {
    y: 100,
    autoAlpha: 0, // opacity와 동일한 개념 투명도를 나타냄
    borderRadius: 200,
  })
  .from("#section2 .i3", {
    y: -100,
    autoAlpha: 0, // opacity와 동일한 개념 투명도를 나타냄
    borderRadius: 200,
  });
ScrollTrigger.create({
  animation: ani2,
  trigger: "#section2",
  start: "top top ",
  end: "+=2000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});
//section3
const ani3 = gsap.timeline();
ani3.from("#section3 .parallax__item__img", {
  y: -100,
  ease: "back.out(4)",
  autoAlpha: 0,
  stagger: {
    amount: 3,
    from: "random",
  },
});
ScrollTrigger.create({
  animation: ani3,
  trigger: "#section3",
  start: "top top",
  end: "+=3000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});
//section4
const ani4 = gsap.timeline();
ani4.from("#section4 .parallax__item__img", {
  autoAlpha: 0,
  scale: 20,
});
ScrollTrigger.create({
  animation: ani4,
  trigger: "#section4",
  start: "top top",
  end: "+=2000",
  scrub: true,
  pin: true,
});
//section5
const ani5 = gsap.timeline();
ani5
  .to("#section5 .t1", { xPercent: 500 })
  .to("#section5 .t2", { xPercent: -500 }, "<")
  .to("#section5 .t3", { xPercent: 500 }, "<")
  .to("#section5 .t4", { xPercent: -500 }, "<");
ScrollTrigger.create({
  animation: ani5,
  trigger: "#section5",
  start: "top top",
  end: "+=1000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});
//section6
const ani6 = gsap.timeline();
ani6
  .to("#section6 .parallax__item__text", {
    scale: 60,
    autoAlpha: 1,
  })
  .to("#section6 .parallax__item__text", {
    autoAlpha: 0,
  });
ScrollTrigger.create({
  animation: ani6,
  trigger: "#section6",
  start: "top top",
  end: "+=3000",
  scrub: true,
  pin: true,
});
//section7
const ani7 = gsap.timeline();
ani7.from("#section7 .parallax__item__text", {
  yPercent: 100,
  autoAlpha: 0,
  stagger: {
    amount: 10,
  },
});
ScrollTrigger.create({
  animation: ani7,
  trigger: "#section7",
  scrub: true,
  pin: true,
});
//section8
const ani8 = gsap.timeline();
ani8
  .from("#section8 .t1", { xPercent: 500 })
  .from("#section8 .t2", { xPercent: -500 })
  .from("#section8 .t3", { xPercent: 500 })
  .from("#section8 .i1", { rotation: 360, scale: 3, xPercent: 1500 });
ScrollTrigger.create({
  animation: ani8,
  trigger: "#section8",
  start: "top top",
  end: "+=3000",
  scrub: true,
  pin: true,
});
//section9
const ani9 = gsap.timeline();
ani9
  .to("#section9 .parallax__item__img", { scale: 13 })
  .to("#section9 .parallax__item__img", { autoAlpha: 0 });
ScrollTrigger.create({
  animation: ani9,
  trigger: "#section9",
  start: "top top",
  end: "+=2000",
  scrub: true,
  pin: true,
});
