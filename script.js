const burger=document.getElementById("jscript");
console.log(burger)
const menu=document.querySelector(".menu")
console.log(menu)
burger.addEventListener("click",function(){
    menu.classList.toggle("show")
    burger.classList.toggle("animate")
})