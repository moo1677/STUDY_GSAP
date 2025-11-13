const intro = gsap.timeline();
intro
  .to(".intro__x-bar", { scale: 12, backgroundColor: "#000", autoAlpha: 0 })
  .to("#running-high-intro", { backgroundColor: "#000" }, "<")
  .to(".intro__shoe", { autoAlpha: 0 }, "<");
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
  .to(
    ".features__image-part--upper",
    { x: "-=300", y: -100, rotation: 10 },
    "<"
  )
  .to(
    ".features__image-part--insole",
    { x: "-=300", y: "+=200", rotation: 10 },
    "<"
  )
  .to(
    ".features__image-part--outsole",
    { x: "-=300", y: "+=490", rotation: 10 },
    "<"
  )
  .from(".info-card", { y: 50, autoAlpha: 0, stagger: 0.1 });
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
  .from(".detail__body--upper", { y: "+=50", autoAlpha: 0 }, "+=0.01<");
ScrollTrigger.create({
  animation: upper,
  trigger: "#feature-upper",
  start: "top-=500 top",
  anticipatePin: 1,
});
const insole = gsap.timeline();
insole
  .from("#insole", { y: "+=100", autoAlpha: 0 })
  .from(".detail__body--insole", { y: "+=50", autoAlpha: 0 }, "+=0.01<");
ScrollTrigger.create({
  animation: insole,
  trigger: "#feature-insole",
  start: "top-=500 top",
  anticipatePin: 1,
});
const outsole = gsap.timeline();
outsole
  .from("#outsole", { y: "+=100", autoAlpha: 0 })
  .from(".detail__body--outsole", { y: "+=50", autoAlpha: 0 }, "+=0.01<");
ScrollTrigger.create({
  animation: outsole,
  trigger: "#feature-outsole",
  start: "top-=500 top",
  anticipatePin: 1,
});

const weightShoes = gsap.timeline();
weightShoes
  .from(".weight__title", { y: "+=100", autoAlpha: 0 })
  .to(".weight__title", { autoAlpha: 0 })
  .from("#shoe", { autoAlpha: 0 }, "<")
  .to("#shoe", { autoAlpha: 0 })
  .from("#feather", { autoAlpha: 0 }, "-=0.3")
  .to("#feather", { rotation: "+=10", scale: 1.1, ease: "back.out" })
  .from("#grass", { y: "+=1000", autoAlpha: 0 })
  .from(".weight__text", { autoAlpha: 0 })
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
  .from(".summary__info-wrapper", { x: 100, autoAlpha: 0 })
  .from(".summary__text", { y: 100, autoAlpha: 0 }, "<");
ScrollTrigger.create({
  animation: endShoe,
  trigger: "#running-high-end",
  start: "top-=500 top",
  anticipatePin: 1,
});
