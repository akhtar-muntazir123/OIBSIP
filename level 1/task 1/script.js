console.log('hello')
const menuBtn=document.querySelector(".menu-btn");
const navigation=document.querySelector(".nav");
menuBtn.addEventListener('click',()=>
{
    menuBtn.classList.toggle("active")
    navigation.classList.toggle("active")
})
//javascript for image slider
const btns=document.querySelectorAll('.nav-btn')
const slides =document.querySelectorAll('.img-slider')
const contents =document.querySelectorAll('.content')


var slidernav=function(manual){
    btns.forEach((btn)=>{
        btn.classList.remove('active')
    })
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
    contents.forEach((content)=>{
        content.classList.remove('active')
    })
    btns[manual].classList.add("active")
    slides[manual].classList.add("active")
    contents[manual].classList.add("active")
}


btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>
    {
        slidernav(i);
    })

})
// set timeout function
