const scroll = new LocomotiveScroll({
    el: document.querySelector('.cynthia'),
    smooth: true
});

// This is  a copy from Cynthia Ugwu web site 
// this is learned from youtube 


let timeout;
var boxs = document.querySelectorAll(".box");


    function mousecir(xs, ys){

 window.addEventListener("mousemove" , (evet) =>{
    clearTimeout(timeout);

     document.querySelector("#pointer").style.transform = `translate(${evet.clientX}px , ${evet.clientY}px) scale(${ys}, ${xs})`;         
     document.querySelector("#pointer").style.display = "flex"; 

      timeout = setTimeout(() =>{
         
     document.querySelector("#pointer").style.transform = `translate(${evet.clientX}px , ${evet.clientY}px) scale(1)`;         

          
     },100);
 });

}


 function mouseadjust(){

    let xscale = 1;
    let yscale = 1;
   
    let xprev = 0;
    let yprev = 0;

 window.addEventListener("mousemove",(evet) =>{
     
    let xcurrt = evet.clientX - xprev;
    let ycurrt = evet.clientY - yprev;

    xprev = xcurrt;
    yprev = ycurrt;

    xscale = gsap.utils.clamp(0.8,1.2,xcurrt);
    yscale = gsap.utils.clamp(0.8,1.2,ycurrt);

     mousecir(xscale , yscale);
    
 })
}
 

 function fliping(){ 

  var tl = gsap.timeline();

  tl.from(".navbar", {
  
     y: 0,
    opacity: 0,
    duration:1.5,
    ease: Expo.easeInOut,

  })

  .to(".flipele",{
     
    y: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
    stagger: .2,
   })

   .from(".info",{
     
       opacity: 0,
       duration: 1.5,
   })

    
 } 

 function display_imgs(){

    let rotatepre = 0;

     boxs.forEach((elem) => { 
     elem.addEventListener("mousemove",(evet)=>{
        
          let yclint = evet.clientY - elem.getBoundingClientRect().top;
          let xclint = evet.clientX;
          let rotateval = evet.clientX - rotatepre;
          rotatepre = evet.clientX;



          gsap.to(elem.querySelector("img"),{
             
            top: yclint - 50,
            left:xclint - 100,
            opacity:1,
            ease:Power3,
            rotate: gsap.utils.clamp(-22,22,rotateval),

          })
     });    


     elem.addEventListener("mouseout", ()=>{
         
           gsap.to(elem.querySelector("img"),{
             
            opacity:0,
            duration:1.3,
             
           })
     });
    });


 }


mouseadjust();
mousecir();
fliping();
display_imgs();


