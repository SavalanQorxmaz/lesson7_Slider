
const imageFrame = document.getElementById("frame-image");
console.log(imageFrame.childElementCount)

// for(let i = 0; i < imageFrame.children.length; i++){
//     imageFrame.children[i].style.left = `${i * 600}px`
// }
// imageFrame.children[0].style.display = "block"


const leftPositionArray = []
const imgArray = []

const imgleftArray = []
const imgRightArray = []

for(let i = 0; i < imageFrame.childElementCount; i++){

   imgArray[i] = imageFrame.children[i];

    }
    imgArray[1].style.width = "100%"

    let currentPosition = 1;
    let previousPosition = 0;
    let nextPosition = 2;
    imgArray[currentPosition].style.width = `100%`



document.addEventListener("keyup",(e) => {
  
    if(e.key == "ArrowRight"){

        for(let i=0;i<imgArray.length;i++){
            imgArray[i].style.left = `auto`
            imgArray[i].style.right = `0px`
           
        }
        
        for(let i=2;i<imgArray.length;i++){
            imgArray[i].style.left = `auto`
            imgArray[i].style.right = `0px`
            imgArray[i].style.width = `0%`
        }
        
      
        imgArray[0].style.right = `100%`
        imgArray[0].style.left = `auto`
        imgArray[0].style.width = `0%`
        imgArray[1].style.right = `0%`
        imgArray[1].style.left = `auto`
        imgArray[1].style.width = `100%`
        imgArray[1].style.transition = `1s`

        imgArray.push(imgArray.shift())
       
    }
    if(e.key == "ArrowLeft"){
 
        imgArray.unshift(imgArray.pop())
    
    
        
        for(let i=0;i<imgArray.length;i++){
            imgArray[i].style.left = `0px`
            imgArray[i].style.right = `auto`
           
        }
      
        imgArray[0].style.left = `0%`
        imgArray[0].style.right = `auto`
        imgArray[0].style.width = `0%`
     
       
  
    for(let i=2;i<imgArray.length;i++){
        imgArray[i].style.left = `100%`
        imgArray[i].style.right = `auto`
        imgArray[i].style.width = `0%`
    }
    imgArray[1].style.left = `0%`
    imgArray[1].style.right = `auto`
    imgArray[1].style.width = `100%`
    imgArray[1].style.transition = `1s`
 
    
   
     
    }
})


