const imgArray = [
    '../assets/Club/2.png',
    '../assets/Club/3.jpg',
    '../assets/Club/4.jpg',
    '../assets/Club/5.png',
    '../assets/Club/6.jpg',
    '../assets/Club/7.jpg',
    '../assets/Club/8.jpg',
    '../assets/Club/9.jpg',
    '../assets/Club/10.jpg',
    '../assets/Club/11.jpeg',
    '../assets/Club/12.jpg',
    '../assets/Club/1.jpg'
]

const img = document.getElementById('slide')
let i = 0

const slideShow = () => {
    img.src = imgArray[i]
    i = (i < imgArray.length - 1) ? i + 1 : 0
}

const interval = () => {
    setInterval(slideShow, 2000)
}