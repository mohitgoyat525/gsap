
gsap.fromTo(
  "#box-one",
  {
    x: -window.innerWidth,
    backgroundColor: "white",
    rotate: 360,
    borderRadius: 12,
  },
  {
    x: window.innerWidth,
    duration: 3,
    repeat: -1,
    ease: "linear",
    backgroundColor: "red",
    rotate: 360,
    borderRadius: 999,
  }
);

gsap.from("#box-two", {
  x: 1140,
  backgroundColor: "white",
  rotate: 360,
  borderRadius: 12,
  scrollTrigger: {
    trigger: "#box-two",
    start: "top center", 
    end: "bottom top",
    scrub: 1,
    markers: true,
  },
});


 gsap.registerPlugin(ScrollTrigger);

 gsap.fromTo(
   "#text",
   {
     x: -window.innerWidth,
   },
   {
     x: window.innerWidth,
     color: "black",
     scrollTrigger: {
       trigger: "#text",
       start: "top center",
       end: "bottom top",
       pin: true,
       scrub: true,
       markers: true,
     },
   }
 );
