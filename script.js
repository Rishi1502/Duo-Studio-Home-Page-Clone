function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init();

var crsr = document.querySelector(".cursor")
var main = document.querySelector("#main")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + 10 + "px"
    crsr.style.top = dets.y + 10 + "px"
})


var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: "#main",
        start: "top 35%",
        end: "top 0",
        scrub: 2
    }
})

tl.to(".page1 h1", {
    x:-200,
}, "anim")

tl.to(".page1 h2", {
    x:200
}, "anim")
tl.to(".page1 video", {
    width: "90%",
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: "#main",
        start: "top -120%",
        end: "top -130",
        scrub: 6
    }
})

tl2.to("#main", {
    backgroundColor: "#fff",
    
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: "#main",
        start: "top -530%",
        end: "top -550",
        scrub: 4
    }
})

tl3.to("#main", {
    backgroundColor: "#0F0D0D",
})

var boxes = document.querySelectorAll(".box-text")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        // var att = elem.getAttribute("data-image")
        // crsr.style.width = "300px"
        // crsr.style.height = "250px"
        // crsr.style.borderRadius = "0"
        // crsr.style.backgroundImage = 'url(${att})'
        elem.style.backgroundColor = "#EDBFFF"
    })
    elem.addEventListener("mouseleave", function(){
        // crsr.style.width = "20px"
        // crsr.style.height = "20px"
        // crsr.style.borderRadius = "50%"
        elem.style.backgroundColor = ""

    })
var circle = document.querySelector(".circle")
circle.addEventListener("mouseenter", function(){
    crsr.style.width = "40px"
    crsr.style.height = "40px"
})
circle.addEventListener("mouseleave", function(){
    crsr.style.width = "20px"
    crsr.style.height = "20px"
})
    
})