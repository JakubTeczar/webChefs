const statisticsValues = document.querySelectorAll(".stat b");
const stat = document.querySelector(".stat");
const firstCard = document.querySelector(".first_card");
const hiddenCard = document.querySelector(".hidden_card");
const cards = document.querySelectorAll(".card");
const hamburgerBtn = document.querySelector(".hamburger_btn");
const menu = document.querySelector(".menu");
let runAnimation = true;



const displayValues =()=>{
    let interval = 4000;
    statisticsValues.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          if(valueDisplay.dataset.percentage){
            valueDisplay.textContent = "+"+startValue+"%";
          }else{
            valueDisplay.textContent = startValue;
          }
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
      });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
window.addEventListener("scroll", function() {
    if(isInViewport(stat) && runAnimation){
        displayValues();
        runAnimation = false;
    }
});
if(isInViewport(stat) && runAnimation){
    setTimeout(()=>{
        displayValues();
        runAnimation = false;
    },600)
}
let changeClass = true;
let firsClick = true;
hamburgerBtn.addEventListener("click", function() {
    if(firsClick){
        menu.classList.remove("hidden");
        firsClick=false;
    }else{
        menu.classList.toggle("hidden");
    }
    menu.classList.remove("dmd:hidden");
});

function adjustCards(viewSize) {
    if (viewSize.matches) { 
        changeClass = false;
        cards.forEach((el)=>{
            el.classList.remove("hidden");
        });
        firstCard.parentElement.classList.remove("bg-desktop-background");
        hiddenCard.classList.add("hidden");
        console.log("dupa");
    } else {
        changeClass = true;
        firstCard.addEventListener("mouseenter", function() {
            if(changeClass){
                cards.forEach((el)=>{
                    el.classList.add("hidden");
                });
                firstCard.parentElement.classList.add("bg-desktop-background");
                hiddenCard.classList.remove("hidden");
            }
        });
        firstCard.parentElement.addEventListener("mouseleave", function() {
            if(changeClass){
            cards.forEach((el)=>{
                el.classList.remove("hidden");
            });
            firstCard.parentElement.classList.remove("bg-desktop-background");
            hiddenCard.classList.add("hidden");
            }
        });
    }
  }

  const desktopSize = window.matchMedia("(max-width: 1280px)");
  const mobileSize = window.matchMedia("(max-width: 767px)");

  mobileSize.addEventListener("change", function() {
    if(!mobileSize.matches){
        menu.classList.add("dmd:hidden");
        menu.classList.remove("hidden");
        firsClick= true;
    }
  });

  adjustCards(desktopSize);
  desktopSize.addEventListener("change", function() {
    adjustCards(desktopSize);
  });
