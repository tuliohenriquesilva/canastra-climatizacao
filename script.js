
const header = document.getElementById('header')

window.addEventListener('scroll', ()=>{
if(window.scrollY > 100){
header.classList.add('active')
}else{
header.classList.remove('active')
}
})

const cards = document.querySelectorAll('.card')

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity = 1
entry.target.style.transform = 'translateY(0)'
}
})
})

cards.forEach(card=>{
card.style.opacity = 0
card.style.transform = 'translateY(50px)'
card.style.transition = '.8s'
observer.observe(card)
})
