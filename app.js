
const imgArray = ['images/concierto1.jpg','images/concierto2.jpg','images/concierto3.jpg' ,'images/concierto4.jpg','images/concierto5.jpg','images/concierto6.jpg' ,'images/concierto7.jpg']

imgContainer = document.querySelector(".carrosuel__container")
const img = document.querySelector('.slide')

let i = 0
imgContainer.style.height = "70vh"
imgContainer.style.width = "60vw"
img.style.height = "100%"
img.style.width= "100%"
img.style.objectFit = "cover"

const slideShow = () =>{
    img.src=imgArray[i]
    i++
    console.log(i)

    if(i == imgArray.length){
        i = 0
    }
    //i = (i < imgArray.length - 1) ? i + 1 : 0;
};

const interval = () =>{
    setInterval(slideShow, 3000)
};

window.onload = interval();


