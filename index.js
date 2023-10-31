
const shoes = document.querySelectorAll('.one')
const shoes1 = document.querySelectorAll('.two')
const mensClothes = document.querySelectorAll('.three')
const womenSlippers = document.querySelectorAll('.four')
const womenSlippers1 = document.querySelectorAll('.five')
const womensClothes2 = document.querySelectorAll('.six')
const images = [
    "images/kris-gerhard-0BKZfcamvGg-unsplash1.jpg",
    "images/huyen-nguy-IjzhMi4Cw3w-unsplash1.jpg",
    "images/joseph-barrientos-4qSb_FWhHKs-unsplash1.jpg",
    "images/martin-katler-Y4fKN-RlMV4-unsplash1.jpg",
    "images/camila-damasio-mWYhrOiAgmA-unsplash1.jpg",
    "images/domino-164_6wVEHfI-unsplash1.jpg"
    
]
const Mensclothes = [
    "images/alex-haigh-fEt6Wd4t4j0-unsplash1.jpg",
    "images/keagan-henman-Won79_9oUEk-unsplash1.jpg",
    "images/parker-burchfield-tvG4WvjgsEY-unsplash.jpg",
    "images/sincerely-media-9ShY-Tq70Mc-unsplash1.jpg" ,
    "images/sonny-mauricio-KPl_OqjMxNY-unsplash1.jpg"
]
const WomenSlippers = [
    "images/photo_2023-10-21_04-11-47.jpg" ,
    "images/photo_2023-10-21_04-13-20.jpg",
    "images/photo_2023-10-21_04-13-27.jpg",
    "images/photo_2023-10-21_04-13-351.jpg",
    "images/photo_2023-10-21_04-13-42.jpg",
    "images/photo_2023-10-21_04-13-51.jpg",
    "images/photo_2023-10-21_04-13-561.jpg",
]
const womensClothes = [
    "images/yasu-shots-_y6hMz1pJC0-unsplash1.jpg",
    "images/artem-beliaikin-UdQt3FT6rxM-unsplash (1)1.jpg",
    "images/artem-beliaikin-GLg0z5z8EQU-unsplash1.jpg",
    "images/micheile-henderson-FpPcoOAk5PI-unsplash1.jpg" ,
    "images/marcus-loke-xXJ6utyoSw0-unsplash1.jpg" 
]
// }

function randomImage(){
    allImages = [
        "images/yasu-shots-_y6hMz1pJC0-unsplash1.jpg",
        "images/artem-beliaikin-UdQt3FT6rxM-unsplash (1)1.jpg",
        "images/artem-beliaikin-GLg0z5z8EQU-unsplash1.jpg",
        "images/micheile-henderson-FpPcoOAk5PI-unsplash1.jpg" ,
        "images/marcus-loke-xXJ6utyoSw0-unsplash1.jpg", 
        "images/photo_2023-10-21_04-11-47.jpg" ,
        "images/photo_2023-10-21_04-13-20.jpg",
        "images/photo_2023-10-21_04-13-27.jpg",
        "images/photo_2023-10-21_04-13-351.jpg",
        "images/photo_2023-10-21_04-13-42.jpg",
        "images/photo_2023-10-21_04-13-51.jpg",
        "images/photo_2023-10-21_04-13-561.jpg",
        "images/alex-haigh-fEt6Wd4t4j0-unsplash1.jpg",
        "images/keagan-henman-Won79_9oUEk-unsplash1.jpg",
        "images/parker-burchfield-tvG4WvjgsEY-unsplash.jpg",
        "images/sincerely-media-9ShY-Tq70Mc-unsplash1.jpg" ,
        "images/sonny-mauricio-KPl_OqjMxNY-unsplash1.jpg",
        "images/kris-gerhard-0BKZfcamvGg-unsplash1.jpg",
        "images/huyen-nguy-IjzhMi4Cw3w-unsplash1.jpg",
        "images/joseph-barrientos-4qSb_FWhHKs-unsplash1.jpg",
        "images/martin-katler-Y4fKN-RlMV4-unsplash1.jpg",
        "images/camila-damasio-mWYhrOiAgmA-unsplash1.jpg",
        "images/domino-164_6wVEHfI-unsplash1.jpg"
    ]
    const deal = document.querySelector('.deal-img')
    const randomIndex = Math.floor(Math.random() *  allImages.length);
    deal.src = allImages[randomIndex]
}
randomImage()
setInterval(randomImage, 3000);
function firstRow(){
    shoes.forEach(shoe =>{
        shoe.addEventListener('click', function (){
            const img = document.querySelector('.first-row')
            let index = Math.floor(Math.random() * images.length)
            img.src= images[index]
        })
    })

}
firstRow()

function secondRow(){
    shoes1.forEach(shoe1 =>{
        shoe1.addEventListener('click', function (){
            const img2 = document.querySelector('.second-row')
            let index = Math.floor(Math.random() * images.length)
            img2.src= images[index]
        })
    })
}
secondRow()
function mens(){
    mensClothes.forEach(menscloth => {
        menscloth.addEventListener('click', function () {
            const img3 = document.querySelector('.ts')
            let index = Math.floor(Math.random() * Mensclothes.length)
            img3.src= Mensclothes[index]

        })
    })
}
mens()
function womens(){
    womenSlippers.forEach(womenslip => {
        womenslip.addEventListener('click', function () {
            const img4 = document.querySelector('.ws')
            let index = Math.floor(Math.random() * WomenSlippers.length)
            img4.src= WomenSlippers[index]   

        })
    })
}
womens()
function womens1(){
    womenSlippers1.forEach(womenslip1 => {
        womenslip1.addEventListener('click', function () {
            const img5 = document.querySelector('.ws1')
            let index = Math.floor(Math.random() * WomenSlippers.length)
            img5.src= WomenSlippers[index]

        })
    })
}
womens1()

function womens2 (){
    womensClothes2.forEach(womensClothe => {
        womensClothe.addEventListener('click', function () {
            const img6 = document.querySelector('.wc2')
            let index = Math.floor(Math.random() * womensClothes.length)
            img6.src= womensClothes[index]
        
        })
    })
}
womens2()

const hrs = document.querySelector('.hrs')
const min = document.querySelector('.mins')
const sec = document.querySelector('.secs')


setInterval(()=>{

    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    var sc = date.getSeconds();
    if(hr < 10){
        hr='0'+hr;
    }
    if(mn < 10){
        mn='0'+mn;
    }
    if(sc < 10){
        sc='0'+sc;
    }
    hrs.textContent = hr;
    min.textContent = mn;
    sec.textContent = sc;
},1000)



const btnNav = document.querySelector('.btn-mobile-nav')
const header = document.querySelector('.header')
btnNav.addEventListener('click',function(){
    header.classList.toggle('nav-open')
})
const allLinks = document.querySelectorAll('a:link')
console.log(allLinks)

allLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault()
        const href = link.getAttribute('href')

        // scroll back to top
        if(href === "#") window.scrollTo({
            top:0,
            behavior : 'smooth',
        })
        if(href !== '#' && href.startsWith('#')){
          const sec =  document.querySelector(href)
          sec.scrollIntoView({behavior:'smooth'})

        }
        if(link.classList.contains('hom'))
    header.classList.toggle('nav-open')
    })
})

// sticky nav
const sectionHeroEl = document.querySelector('.section-hero')

const obs = new IntersectionObserver(function (entries) {
const ent = entries[0]
console.log(ent);

if(ent.isIntersecting === false){
document.querySelector('.header').classList.add('sticky')
} 

if(ent.isIntersecting === true){
document.querySelector('.header').classList.remove('sticky')
}
},

{
  // in the viewport
  root:null,
  threshold:0,
  rootMargin:'-80px'
})
obs.observe(sectionHeroEl);
// close mobile nav