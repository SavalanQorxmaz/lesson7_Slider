import findSrc  from "./script";


console.log(findSrc)


const image = document.getElementById("image");
image.setAttribute("src", `/assets/img/${findSrc[3]}.jpg`)

