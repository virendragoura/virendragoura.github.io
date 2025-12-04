const nav = document.querySelector('nav')
const toggleButton = document.querySelector('#toggleButton')
const closeButton = document.querySelector('.closeButton')
const navLinks = document.querySelectorAll('.navLinks')
const realodmodal = document.querySelector('#realodmodal')
toggleButton.addEventListener('click', () => {
    nav.classList.toggle('show')
    toggleButton.classList.toggle('show')
})
closeButton.addEventListener('click', () => {
    nav.classList.remove('show')
})
navLinks.forEach((item) => {
    item.addEventListener('click', () => {
        nav.classList.remove('show')
    })
})

const accordionItem = document.querySelectorAll('.accordion-item')
const accordionImages = document.querySelectorAll('.accordionImages')

window.addEventListener('load',()=>{
    accordionImages[0].classList.remove('hide')
})



$('.testimonials').owlCarousel({
    loop: true,
    margin: 10,
    autoplaySpeed: 500,
    autoplay: true,
    responsiveClass: true,
    nav: true,
    dots: false,
    responsive: {
        300: {
            items: 1,

            autoplay: false,

        },
        420: {
            items: 1,

        },
        576: {
            items: 1,


        },

        768: {
            items: 2,


        },

        1000: {
            items: 2,



        }
    }
})

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(() => console.log("Service Worker Registered!"));
}

