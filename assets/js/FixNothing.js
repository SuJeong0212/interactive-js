let human;
let bg;
let pipe;
let txtbox;

let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.009;

window.onload = function () {
    human = document.getElementsByClassName("human")[0];
    bg = document.getElementsByClassName("bg")[0];
    pipe = document.getElementsByClassName("pipe")[0];
    txtbox = document.getElementsByClassName("text3d")[0];

    window.addEventListener("mousemove", mouseFunc, false);

    function mouseFunc(e) {
        x = (e.clientX - window.innerWidth / 2);
        y = (e.clientY - window.innerHeight / 2);
    }

    loop();
};

function loop() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    human.style.transform = "translate(" + (mx / 9) + "px," + (my / 9) + "px)";
    bg.style.transform = "translate(" + -(mx / 8) + "px," + -(my / 8) + "px)";
    pipe.style.transform = "translate(" + (mx / 4) + "px," + (my / 3) + "px)";

    //3d 텍스트 모션
    //rotate3d 속성
    txtbox.style.transform = "translate3d(" + -(mx / 2) + "px," + -(my / 2) + "px,0) rotate3d(0,1,0," + -mx / 50 + "deg)";
    window.requestAnimationFrame(loop);
}