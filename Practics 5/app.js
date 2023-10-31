const scrollBtn = document.querySelector('#scrollBtn')

scrollBtn.addEventListener('click', setScrollToOptions)

function setScrollTo(){
    window.scrollTo(0, 200)
    
}
function setScrollToOptions(){
    window.scrollTo({
        top: 500,
        left:0 ,
        behavior: 'smooth'
    })
}