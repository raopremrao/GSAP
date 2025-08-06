// gsap.from("#page1 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 1,
//     rotate: 360,
// })


// gsap.from("#page2 #box", {
//     scale: 0,
//     duration: 1,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%"
//     },
// });


gsap.from("#page3 #box", {
    opacity: 0,
    scale: 0,
    // duration: 1.5,
    x: 500,
    rotate: 720,
    // borderRadius: "50%",
    scrollTrigger: {
        trigger: "#page3 #box",
        markers: true,
        scroller: "body",
        start: "top 90%",
        scrub: 2,
        pin: true
    },
    borderRadius: "50%"
})

gsap.from("#page2 h2", {
    opacity: 0,
    scale: 0,
    duration: 2,
    x: -500,
    scrollTrigger: {
        trigger: "#page2 h2",
        // markers: true,
        scroller: "body",
        start: "top 70%"
    }
})




