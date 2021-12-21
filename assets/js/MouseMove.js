window.onload = function(){
    let h1 = document.getElementsByTagName("h1")[0];
    window.addEventListener("mousemove",mouseFunc,false);

function mouseFunc(e){
    h1.innerHTML = " x: " + e.clientX + " y: " + e.clientY;
    // console.log(e.clientX);
}
}