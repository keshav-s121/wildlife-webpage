var nextbtn = document.querySelector('.next'),
 prevbtn = document.querySelector('.prev'),
 caro = document.querySelector('.caro'),
 list = document.querySelector('.list'),
  itam = document.querySelectorAll('.itam'),
  runtime = document.querySelector('.timerun')

  let timerun = 3000
  let  timeautonext = 7000

  nextbtn.onclick = function(){
    showslider('next')
  }
  
  prevbtn.onclick = function(){
    showslider('prev')

  }

let runtimeout

let runnextauto = setTimeout(() => {
    nextbtn.click()
}, timeautonext)

function resettimeanimation(){
    runtime.style.animation = 'none'
     runtime.offsetheight
      runtime.style.animation = null 
       runtime.style.animation = 'runtime 7s linear 1 forwards'


}

  function showslider(type){
    let sliderItamDom =list.querySelectorAll('.caro .list .itam')
    if(type === 'next'){
        list.appendChild(sliderItamDom[0])
        caro.classList.add('next')
    }
    else{
         list.prepend(sliderItamDom[sliderItamDom.length-1])
        caro.classList.add('prev')
    }
  
clearTimeout(runtimeout)

runtimeout = setTimeout( () => {
    caro.classList.remove('next')
     caro.classList.remove('prev')
}, timeautonext)

 clearTimeout(runnextauto)

    runnextauto = setTimeout(() => {
        nextbtn.click()
    }, timeautonext)
resettimeanimation()
  }
 resettimeanimation()

 
const subscribeButtons = document.querySelectorAll(".btn button:nth-child(2)");
const loginPage = document.getElementById("loginPage");
const loginBtn = document.getElementById("loginBtn");


subscribeButtons.forEach(button => {
    button.addEventListener("click", function(){
        loginPage.style.display = "flex";
    });
});

loginBtn.addEventListener("click", function(){
    loginPage.style.display = "none";
});