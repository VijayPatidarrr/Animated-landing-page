

var tl=gsap.timeline();

gsap.set(".a",{opacity:0,y:10})
gsap.set("#right img",{scale:0})

tl.from("#left",{

    width:0,
    ease:"expo.out",
    duration:1
    
   
   })

   tl.from("#right",{
   
    width:0,
    ease:"expo.out",
    duration:1
    
   
   })

 tl.to(".a",{
    opacity:1,
    y:0,
    stagger:.1
 })

 
 tl.to("#right img",{
    scale:1.2,
    stagger:.1,
    ease:"expo.out",
    duration:2
    
 })