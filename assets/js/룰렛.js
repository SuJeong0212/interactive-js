window.onload = function(){
    var resetBtn = document.querySelector(".resetBtn");
    var startBtn = document.querySelector(".startBtn");
    var h1 = document.getElementsByTagName("h1")[0];
    var arrow = document.querySelector(".arrow");
    var rotateNum = 0;

    startBtn.addEventListener("click", function(){
        rotateNum = Math.round(Math.random() * 720);
        h1.innerHTML = rotateNum + "deg";
        arrow.style.transform = "rotate(" + rotateNum + "deg)";
    });

    resetBtn.addEventListener("click", function(){
        rotateNum = 0;
        h1.innerHTML = rotateNum + "deg";
        arrow.style.transform = "rotate(" + rotateNum + "deg)";
    })
}