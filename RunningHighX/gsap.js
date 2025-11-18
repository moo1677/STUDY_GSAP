const intro = gsap.timeline();
intro
  .to(".intro__x-bar", { scale: 12, backgroundColor: "#000", autoAlpha: 0 })
  .to("#running-high-intro", { backgroundColor: "#000" }, "<")
  .to(".intro__shoe", { autoAlpha: 0 }, "<");
ScrollTrigger.create({
  animation: intro,
  trigger: "#running-high-intro",
  start: "top top",
  end: "+=4000",
  pin: true,
  scrub: true,
  anticipatePin: 1,
  // markers: true,
  // id: "intro",
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

const features = gsap.timeline();
features
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
  animation: features,
  trigger: "#shoe-features",
  start: "center center",
  end: "+=1300",
  pin: true,
  scrub: true,
  anticipatePin: 1,
  // markers: "true",
  // id: "features",
});

const detailUpper = gsap.timeline();
detailUpper
  .from("#upper", { y: "+=100", autoAlpha: 0 })
  .from(".detail__body--upper", { y: "+=50", autoAlpha: 0 }, "+=0.01<");
ScrollTrigger.create({
  animation: detailUpper,
  trigger: "#feature-upper",
  start: "center-=200 center",
  anticipatePin: 1,
});
const detailInsole = gsap.timeline();
detailInsole
  .from("#insole", { y: "+=100", autoAlpha: 0 })
  .from(".detail__body--insole", { y: "+=50", autoAlpha: 0 }, "+=0.01<");
ScrollTrigger.create({
  animation: detailInsole,
  trigger: "#feature-insole",
  start: "center-=200 center",
  anticipatePin: 1,
});
const detailOutsole = gsap.timeline();
detailOutsole
  .from("#outsole", { y: "+=100", autoAlpha: 0 })
  .from(".detail__body--outsole", { y: "+=50", autoAlpha: 0 }, "+=0.01<");
ScrollTrigger.create({
  animation: detailOutsole,
  trigger: "#feature-outsole",
  start: "center-=200 center",
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
  start: "center center",
  end: "+=3300",
  scrub: true,
  // markers: true,
  // id: "no-pin",
});
ScrollTrigger.create({
  trigger: "#shoes-weight",
  start: "center center",
  end: "+=2500",
  pin: true,
  anticipatePin: 1,
  // markers: true,
  // id: "pin",
});

const summary = gsap.timeline();
summary
  .from("#end-shoe", { x: -10000, duration: 0.5 })
  .from(".summary__info-wrapper", { x: 100, autoAlpha: 0 })
  .from(".summary__text", { y: 100, autoAlpha: 0 }, "<");
ScrollTrigger.create({
  animation: summary,
  trigger: "#running-high-end",
  start: "center-=300 center",
  anticipatePin: 1,
  // markers: true,
  // id: "summary",
});

const purchase = gsap.timeline({
  paused: true,
  onStart: () => {
    document.body.style.overflow = "hidden";
  },
  onReverseComplete: () => {
    document.body.style.overflow = "auto";
  },
});
purchase
  .set(".buy-button", { autoAlpha: 0, cursor: "non" })
  .set("#purchase-screen", { visibility: "visible" })

  .to("#purchase-screen", {
    y: 0,
    ease: "power2.out",
  })

  .to(
    "#purchase-screen",
    {
      height: "100vh",
      duration: 0.6,
      ease: "power3.inOut",
    },
    "-=0.2"
  )
  .to(".return-button", { visibility: "visible" }, "<");

document.querySelector(".buy-button").addEventListener("click", () => {
  purchase.play();
});
document.querySelector(".return-button").addEventListener("click", () => {
  purchase.reverse();
});

const colorShoe = gsap.timeline({
  paused: true,
});

colorShoe.to("#purchase-shoe", {
  "--hue": "360deg",
  duration: 1,
  repeat: -1,
});

document.querySelector(".play-color-button").addEventListener("click", () => {
  colorShoe.play();
});
document.querySelector(".stop-color-button").addEventListener("click", () => {
  colorShoe.pause();
});

const sizeButton = document.querySelectorAll(".size__button");
sizeButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const size = Number(e.target.textContent);
    const scaleValue = size / 240;
    console.log(scaleValue);
    gsap.to("#purchase-shoe", {
      scaleX: scaleValue,
    });
  });
});
