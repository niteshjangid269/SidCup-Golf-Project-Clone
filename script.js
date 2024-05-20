// var crsr=document.querySelector("#cursor")
// crsr.addEventListener("mousemove", function(details){
//     crsr.style.left=details.x + "px"
//     crsr.style.top=details.y + "px"
// })


gsap.to("#nav",{
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -95%",
        scrub: 3
    }
})
