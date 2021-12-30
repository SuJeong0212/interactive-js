window.onload = function(){
    var num = document.querySelector(".num");
    var button = document.querySelector(".startBtn");
    var okBtn = document.querySelector(".okBtn");

    button.addEventListener("click", function(){
        interval();
    });

    var timer;

    function interval(){
        clearInterval(timer);

        var secNum = 0;
        timer = setInterval(function(){
            secNum ++;
            num.innerHTML = secNum;
        },1000);
    }
}