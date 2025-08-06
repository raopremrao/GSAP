var main = document.querySelector('#main')
var cursor = document.querySelector('#cursor')

var imageDiv = document.querySelector("#image")


main.addEventListener('mousemove', (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration:0.6,
        ease: "back.out(4)"
    })
})

imageDiv.addEventListener('mouseenter', () => {
    cursor.innerHTML = "view more"
    gsap.to(cursor, {
        scale: 2,
        backgroundColor: "#ffffff8a"
    })
    
})

imageDiv.addEventListener('mouseleave', () => {
    cursor.innerHTML = ""

    gsap.to(cursor, {
        scale:1,
        backgroundColor: "#fff"
    
    })
    
})