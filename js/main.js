
// Mega menu sub menu
const haschildmenubtn = document.querySelectorAll(".has-child-menu-btn")
const haschildmenu = document.querySelectorAll(".has-child-menu")

haschildmenubtn.forEach(el => {
    el.addEventListener('click', () => {
        el.nextElementSibling.classList.toggle('has-child-menu-show')
    })
})


// mega nav toggle btn
document.querySelector('.nav-toggle-btn').addEventListener('click', () => {
    document.querySelector('.mega-menu').classList.toggle('mega-menu-show');
    document.querySelector('.header-area').classList.toggle('with-menu');
    
    document.querySelector('.menu-close-btn').classList.toggle('menu-close-btn-show');
    document.querySelector('.menu-burger-btn').classList.toggle('menu-burger-btn-hide');
})



// Toggle References 
const angle_up_btn = document.querySelector("#angle-up-btn"); 
const angle_down_btn = document.querySelector("#angle-down-btn"); 
const reference_items = document.querySelector('.references-items');

angle_down_btn.addEventListener('click', () => {
    refer_style("block", "none", "block");
})
angle_up_btn.addEventListener('click', () => {
    refer_style("none", "block", "none");
})

function refer_style  (s1, s2, s3){
    angle_up_btn.style.display=s1; 
    angle_down_btn.style.display=s2; 
    reference_items.style.display=s3;
}
