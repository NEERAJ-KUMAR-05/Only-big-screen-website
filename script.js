var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor-blur");


document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x - 10 +"px"
    crsr.style.top = dets.y - 10 +"px"
    crsrBlur.style.left = dets.x - 150 +"px"
    crsrBlur.style.top = dets.y - 150 +"px"
})
var allh4 = document.querySelectorAll("#nav h4");
allh4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    });

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "none"
        crsr.style.backgroundColor = "#95c11e"
    });
});


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        // markers:true,
        srart:"top -25%",
        end:"top -80%",
        scrub:2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    Opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:'top 70%',
        end:"top 60%",
        scrub:1
    }
})
gsap.from(".card",{
    scale:0.8,
    Opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:'top 70%',
        end:"top 60%",
        scrub:2
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 40%",
        scrub:3
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 50%",
        end:"top 40%",
        scrub:3
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 130%",
        end:"top 40%",
        scrub:1
    }
})