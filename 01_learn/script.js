var tl1 = gsap.timeline();

tl1.from("h2", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.6
});

tl1.from("h4", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
});

tl1.from("h1", {
    y: 20,
    opacity: 0,
    scale: 0.2,
    duration: 0.5,
})