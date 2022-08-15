var puppy = document.getElementById("puppy");
var puppyOriginalLocation = puppy.getBoundingClientRect();
var translateX = 0;
var translateY = 0;
puppy.style.transition = "0.5s";

function runPuppy() {
translateX += 10;
translateY += 4;
puppy.style.transform = "translateX("+translateX+"px) translateY("+translateY+"px)";

if (translateX + puppyOriginalLocation.width > window.innerWidth) {
    translateX = 0;
    translateY = 0;
    puppy.style.transform = "translateX("+translateX+"px) translateY("+translateY+"px)";
}
}



    // var pup = document.getElementById("puppy");
    // let pos = 0;
    // let forward = 1;
    // const id = setInterval(frame, 10);
    // function frame() {
    //   if (pos < 350 && forward == 1) {
    //     pos++;
    //     pup.style.top = pos + "px";
    //     pup.style.left = pos + "px";
    //   } else {
    //     forward = -1;
    //   }
    //   if (pos >= 0 && forward == -1) {
    //     pos--;
    //     pup.style.top = pos + "px";
    //     pup.style.left = pos + "px";
    //   } else {
    //     forward = 1;
    //   }
    // }   

  
  
//   function runPuppy() {
//     let id = null;
//     const elem = document.getElementById("puppy");   
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 2);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++; 
//         elem.style.top = pos + "px"; 
//         elem.style.left = pos + "px"; 
//       }
//     }
// }