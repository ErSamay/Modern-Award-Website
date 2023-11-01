function locomotiveanim(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotiveanim();
gsap.to(".nav-part-1  svg" , {
    transform : "translateY(-100%)",
    scrollTrigger : {
        trigger : ".page1",
        scroller : ".main" , 
    
        start : "top 0%" , 
        end : "top -5%",
        scrub : true
    }
   
})
gsap.to(".nav-part-2  .links" , {
    transform : "translateY(-100%)",
    opacity:0,
    scrollTrigger : {
        trigger : ".page1",
        scroller : ".main" , 
      
        start : "top 0%" , 
        end : "top -5%",
        scrub : true
    }
   
})



const text =document.querySelector("#text p") 

text.innerHTML=text.innerText.split("").map(
    (char,i)=> 
    `<span style="transform:rotate(${i*6.2}deg)">${char}</span>`
).join("")

gsap.from("h1" ,{
    y:500,
    opacity:0,
    delay : 0.6,
    duration : 0.9,
    stagger:0.3,
})

gsap.from(".anim #cir" ,{
    scale: 0.9,
    opacity:0,
    delay : 1.4,
    duration : 0.9,
  
})

// var s1 = document.querySelector(".img img");
// var s2 = document.querySelector("#cir");
// s1.addEventListener("mouseenter" , function() {
//     gsap.to(s2 , {
//         scale : 1 , 
//         opacity : 1
//     })
// } )

// s1.addEventListener("mouseleave" , function() {
//     gsap.to(s2 , {
//         scale : 0 , 
//         opacity : 0
//     })
// } )

// s1.addEventListener("mousemove" , function(dets) {
//     gsap.to(s2 , {
//        left : dets.x - 300,
//        top : dets.y - 200,
//     })
// } )

window.addEventListener("mousemove" , function(dets){
    gsap.to("#cursor" , {
        left : dets.x,
        top : dets.y
    })
})
document.querySelector("#child1").addEventListener("mouseenter" , function(){
    gsap.to("#cursor" , {
        transform: 'translate(-50% , -50%) scale(1)',
        backgroundColor :"black",
        opacity:0.6

    })

})
document.querySelector("#child1").addEventListener("mouseleave" , function(){
    gsap.to("#cursor" , {
        transform: 'translate(-50% , -50%) scale(0)',
        backgroundColor :"black",
        opacity:1

    })

})
document.querySelector("#child2").addEventListener("mouseenter" , function(){
    gsap.to("#cursor" , {
        transform: 'translate(-50% , -50%) scale(1)',
        backgroundColor :"black",
        opacity:0.6

    })

})
document.querySelector("#child2").addEventListener("mouseleave" , function(){
    gsap.to("#cursor" , {
        transform: 'translate(-50% , -50%) scale(0)',
        backgroundColor :"black",
        opacity:1

    })

})
document.querySelector("#child3").addEventListener("mouseenter" , function(){
    gsap.to("#cursor" , {
        transform: 'translate(-50% , -50%) scale(1)',
        backgroundColor :"black",
        opacity:0.6

    })

})
document.querySelector("#child3").addEventListener("mouseleave" , function(){
    gsap.to("#cursor" , {
        transform: 'translate(-50% , -50%) scale(0)',
        backgroundColor :"black",
        opacity:1

    })

})
document.querySelector("#child4").addEventListener("mouseenter" , function(){
    gsap.to("#cursor" , {
        transform: 'translate(-50% , -50%) scale(1)',
        backgroundColor :"black",
        opacity:0.6

    })

})
document.querySelector("#child4").addEventListener("mouseleave" , function(){
    gsap.to("#cursor" , {
        transform: 'translate(-50% , -50%) scale(0)',
        backgroundColor :"black",
        opacity:1

    })

})