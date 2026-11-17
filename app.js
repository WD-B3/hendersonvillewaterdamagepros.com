(function(){
var b=document.querySelector(".burger"),m=document.getElementById("mobilemenu");
if(b&&m){b.addEventListener("click",function(){var o=m.classList.toggle("open");b.setAttribute("aria-expanded",o?"true":"false");b.setAttribute("aria-label",o?"Close menu":"Open menu");});}
var f=document.querySelector(".callfab"),ft=document.querySelector("footer.site");
if(f&&ft&&"IntersectionObserver" in window){new IntersectionObserver(function(e){f.classList.toggle("hide",e[0].isIntersecting);}).observe(ft);}
})();
