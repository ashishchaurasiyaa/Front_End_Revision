gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "130px",
    scrollTriger: {
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 3

    }
})