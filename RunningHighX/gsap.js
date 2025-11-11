const intro = gsap.timeline();
intro
  .to(".x-bar", { scale: 12, backgroundColor: "#000", autoAlpha: 0 })
  .to("#running-high-intro", { backgroundColor: "#000" }, "<")
  .to(".shoe", { autoAlpha: 0 }, "<");
ScrollTrigger.create({
  animation: intro,
  trigger: "#running-high-intro",
  start: "top top",
  end: "+=2000",
  pin: true,
  scrub: true,
  anticipatePin: 1,
});
const shoeVideo = document.getElementById("shoeVideo");
shoeVideo.addEventListener("loadedmetadata", () => {
  shoeVideo.pause();
});
ScrollTrigger.create({
  trigger: shoeVideo,
  start: "top center+=200",

  onToggle: (self) => {
    if (self.isActive) {
      shoeVideo.play();
    }
  },
});

const shoesDeco = gsap.timeline();
shoesDeco
  .to(".upper", { x: "-=300", y: -100, rotation: 10 }, "<")
  .to(".insole", { x: "-=300", y: "+=120", rotation: 10 }, "<")
  .to(".outsole", { x: "-=300", y: "+=350", rotation: 10 }, "<")
  .from(".shoes-info", { y: 50, autoAlpha: 0, stagger: 0.1 });
ScrollTrigger.create({
  animation: shoesDeco,
  trigger: "#shoe-features",
  start: "top top+=100",
  end: "+=1300",
  pin: true,
  scrub: true,
  anticipatePin: 1,
});

const upper = gsap.timeline();
upper
  .from("#upper", { y: "+=100", autoAlpha: 0 })
  .from(".upper-body", { y: "+=50", autoAlpha: 0 }, "+=0.2<");
ScrollTrigger.create({
  animation: upper,
  trigger: "#feature-upper",
  start: "top-=500 top",
  anticipatePin: 1,
});
const insole = gsap.timeline();
insole
  .from("#insole", { y: "+=100", autoAlpha: 0 })
  .from(".insole-body", { y: "+=50", autoAlpha: 0 }, "+=0.2<");
ScrollTrigger.create({
  animation: insole,
  trigger: "#feature-insole",
  start: "top-=500 top",
  anticipatePin: 1,
});
const outsole = gsap.timeline();
outsole
  .from("#outsole", { y: "+=100", autoAlpha: 0 })
  .from(".outsole-body", { y: "+=50", autoAlpha: 0 }, "+=0.2<");
ScrollTrigger.create({
  animation: outsole,
  trigger: "#feature-outsole",
  start: "top-=500 top",
  anticipatePin: 1,
});

const weightShoes = gsap.timeline();
weightShoes
  .from(".weight-title", { y: "+=100", autoAlpha: 0 })
  .to(".weight-title", { autoAlpha: 0 })
  .from("#shoe", { autoAlpha: 0 }, "<")
  .to("#shoe", { autoAlpha: 0 })
  .from("#feather", { autoAlpha: 0 }, "-=0.3")
  .to("#feather", { rotation: "+=10", scale: 1.1, ease: "back.out" })
  .from("#grass", { y: "+=1000", autoAlpha: 0 })
  .from(".weight-text", { autoAlpha: 0 })
  .to("#grass", { autoAlpha: 0 }, "+=1")
  .to("#feather", { autoAlpha: 0 }, "<");

ScrollTrigger.create({
  animation: weightShoes,
  trigger: "#shoes-weight",
  start: "top top",
  end: "+=3300",
  scrub: true,
});
ScrollTrigger.create({
  trigger: "#shoes-weight",
  start: "top top",
  end: "+=2500",
  pin: true,
  anticipatePin: 1,
});

const endShoe = gsap.timeline();
endShoe
  .from("#end-shoe", { x: -10000, duration: 0.5 })
  .from(".end-info", { x: 100, autoAlpha: 0 })
  .from(".end-text", { y: 100, autoAlpha: 0 }, "<");
ScrollTrigger.create({
  animation: endShoe,
  trigger: "#running-high-end",
  start: "top-=500 top",
  anticipatePin: 1,
});
