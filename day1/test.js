gsap.to("#box1", { x: 500, backgroundColor: "#9d95ff", duration: 2 });
gsap.from("#box2", { x: 500, backgroundColor: "#95ffaaff", duration: 2 });
gsap.fromTo(
  "#box3",
  { x: 1000, backgroundColor: "#95ffaaff" },
  { x: 500, backgroundColor: "#ffae95ff", duration: 2 }
);
gsap.set("#box4", { x: 500, backgroundColor: "#ff95dcff" });
gsap.to("#box5", {
  x: 500,
  backgroundColor: "#b895ffff",
  duration: 1,
  rotation: 360,
  repeat: 2,
  yoyo: true,
  scale: 1.2,
});
