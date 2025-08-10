import gsap from "gsap";

window.addEventListener("mousemove", (data) =>{
  gsap.to(".cursor", {
    x: data.x,
    y: data.y,
    scrub: 2,
    ease: "back.out(3)",
    duration: 1,

  })
})