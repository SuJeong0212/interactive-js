let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.01;

let _imgArr;
let _bird;

window.onload = function(){
    _imgArr = document.getElementsByTagName("img");
    // _bird = document.getElementsByTagName("div")[0];
    _bird = document.querySelector(".vod");
    window.addEventListener("mousemove", mouseFunc, false);

    function mouseFunc(e){
        x = (e.clientX - window.innerWidth / 2);
        y = (e.clientY - window.innerHeight / 2);
    }
    loop();
}

function loop(){
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    _imgArr[0].style.transform = "translate(" + (mx/6) + "px," + (my/6) + "px)";
    _imgArr[1].style.transform = "translate(" + -(mx/4) + "px," + -(my/4) + "px)";
    _imgArr[2].style.transform = "translate(" + -(mx/2) + "px," + -(my/2) + "px)";
    _imgArr[3].style.transform = "translate(" + (mx/9) + "px," + (my/9) + "px)";

    _bird.style.transform = "translate(" + -(mx/7) + "px," + -(my/7) + "px)";

    window.requestAnimationFrame(loop);
}