gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



const playReel = function(){
    const page1Content = document.querySelector(".page1-content")
const cursor = document.querySelector(".cursor")

page1Content.addEventListener("mousemove", (dets)=>{
    // cursor.style.left = dets.x +"px"
    // cursor.style.top = dets.y +"px"
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})
page1Content.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

}
playReel();

window.addEventListener('scroll', function () {
    var progressBar = document.getElementById('progressBar');
    var scrollTop = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
    var scrolled = (scrollTop / (documentHeight - windowHeight) ) * 45;
  
    progressBar.style.width = Math.min(scrolled+50, 100) + '%';
  });


  //////.............................../////////////////
//    console.log("sumit kuamr")
//    gsap.registerPlugin(ScrollTrigger);

//    window.addEventListener('DOMContentLoaded', (event) => {
      
//        window.addEventListener('scroll', function () {
//            var progressBar = document.querySelector(".line");
//            var scrollTop = window.scrollY;
//            var windowHeight = window.innerHeight;
//            var documentHeight = document.documentElement.scrollHeight;
   
//            // Calculate the scrolled percentage based on the visible height
//            var scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
   
//            // Limit the scrolled percentage to a maximum of 100%
//            var limitedScrolled = Math.min(scrolled, 100);
   
//            progressBar.style.width = limitedScrolled + '%';
//        });
   
//        // GSAP ScrollTrigger animation for the progress bar
//        gsap.to(".line", {
//            width: "100%", // Set to 100% when fully scrolled
//            scrollTrigger: {
//                trigger: ".page2", // Change to the appropriate trigger element
//                start: "top 20%", // Adjust as needed
//                end: "bottom 80%", // Adjust as needed
//                scrub: true,
//            }
//        });
//    });



// var t1 = gsap.timeline();
// t1.
// //    from(".page2-content",{
// //     opacity:0,
// //     y:30
// //    })



///////////////////...........................//////////////

function page2Animation(){
    gsap.from(".page2-content h3 span",{
        y:120,
        stagger:0.25,
        duration:1,
        ScrollTrigger:{
            trigger: ".page2",
            scroller: ".main",
            start: "top 40%",
            markers:true,
            end:"top 37%",
            scrub:2
        }
    })
}
page2Animation();

const page5 = document.querySelector(".container")
const take = document.querySelector("#take")
page5.addEventListener("mousemove", (dets)=> {
    gsap.to(take,{
        x:dets.x-50,
        y:dets.y-50
    })
})

page5.addEventListener("mouseenter", function(){
    gsap.to(take,{
        scale:1,
        opacity:1
    })
})
page5.addEventListener("mouseleave", function(){
    gsap.to(take,{
        scale:0,
        opacity:0
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var tl = gsap.timeline()
  
  tl.from(".loader h1",{
    x:100,
    opacity:0,
    duration:1,
    stagger:0.1
  })
  tl.to(".loader h1",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1
  })
  tl.to(".loader",{
    opacity:0
  })
  tl.to(".loader",{
    display:"none"
  })
  tl.from(".page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1
  })