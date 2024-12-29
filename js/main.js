const swiper = new Swiper('.swiper', {
    loop: true,
  
   
    pagination: {
      el: '.swiper-pagination',
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 
  });
  let image= document.getElementsByTagName('img');
 image[1] .src='images/image3.jpg';
 image[2] .src='images/image4.jpg';
 console.log(image[1].setAttribute('title',' this is image2'));


 image[2].classList.add('img');
 if(image[2].classList.contains('img')){
  
  console.log('Found')
 }
 else{
  console.log('Not Found')
 };
 
 confirm('is this was useful');

 let btn=document.getElementsByTagName('button');
 btn[1].onclick=function(){
  btn[1].style.backgroundColor="yellow";
 }
 image[1].onmouseover=function(){
  image[1].style.opacity=".5";
 
}
image[1].onmouseout=function(){
  image[1].style.opacity="1";
}
let inputs=document.getElementsByTagName("input");{
  inputs[0].onmouseover=function(){
inputs[0].style.backgroundColor="#808080";

}}

inputs[0].onmouseout=function(){
  inputs[0].style.backgroundColor="#ffffff";
  }
  let paragraph=document.getElementById ("parg");
  let img=document.querySelector("img");
  img.onclick=function(){
    img.style.filter='blur(5px)';
    paragraph.style.color="#ff0fff";
  };

