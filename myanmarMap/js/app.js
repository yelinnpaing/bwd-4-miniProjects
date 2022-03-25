let currentPlace = document.querySelector(".current-place");
let allPath = document.querySelectorAll(".map path");

allPath.forEach( x =>{
    x.addEventListener("mouseover",_ =>{
        currentPlace.innerText = (x.getAttribute("title"));
    })
})


// allPath.forEach(currentPath=>{
//     currentPath.addEventListener("mouseover",_=>{
//         allPath.forEach(c=>c.classList.remove("active"));
//         currentPath.classList.add("active");
//         currentPlace.innerText = currentPath.getAttribute("name");
//     });
// })

// document.querySelector("[name='Yangon']").classList.add("active");
// currentPlace.innerText = "Yangon";