console.log('using javaScript now');

const sun = document.getElementById('sun');
const moon = document.getElementById("moon");

const sunStyle = sun.style;

document.addEventListener("keydown",(ev)=>{
    Anim()
})
// moon.classList.toggle('move');
var forward = true;
function Anim(){
    if(forward){
        moon.style.filter ='brightness(300%) blur(3PX)';
        moon.style.transform = 'translate3d(100px,-100px,0px)';
        moon.style.boxShadow = 'inset 25px 25px 50px rgb(0, 0, 0)';
        sunStyle.filter = 'brightness(200%)';
        sunStyle.boxShadow =`
        inset 2px 2px 5px rgba(0, 255, 89, 0.866),
        inset 5px -5px 5px 5px rgba(101, 220, 90, 0.278),
        inset -2px 2px 5px rgba(10, 119, 66, 0.211),
        inset -2px -2px 5px rgba(255, 255, 0, 0.407),
        -2px -2px 5px rgba(255, 255, 0, 0.407),
        -2px 2px 5px rgba(10, 119, 66, 0.211),
        5px -5px 5px 5px rgba(101, 220, 90, 0.278),
        2px 2px 50px rgba(0, 254, 89, 0.866),
        -2px -2px 50px rgba(34, 232, 103, 0.866),
        -2px -2px 100px rgb(79, 224, 130),
        12px 12px 5000px rgba(149, 238, 180, 0.821)
        `;
        
        // document.body.style.filter = 'invert(12%) ';
        document.body.style.backgroundColor ='rgb(9, 22, 27)';
        forward = false;
    }
    else{
        // document.body.style.filter = 'invert(5%) ';
        moon.style.filter ='brightness(5%) blur(10PX)';
        moon.style.transform = 'translate3d(-0px,0px,0px)';
        sunStyle.filter = 'brightness(100%)';
        document.body.style.background="url('starsblend.png')";
        forward = true;

    }
}   

