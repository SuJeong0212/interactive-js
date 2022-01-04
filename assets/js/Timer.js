window.onload = function(){
    var num = document.querySelector(".num");
    var button = document.querySelector(".startBtn");
    var okBtn = document.querySelector(".okBtn");
    var input = document.getElementsByTagName("input")[0];
    var sec = document.querySelector(".sec");

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
        },100);
    }

    okBtn.addEventListener("click", function(){
        interval_timer();
    });

    // var timer1;

    function interval_timer(){
        clearInterval(timer);

        value = input.value * 10000;
        secValue = value / 365 / 24 / 60 / 60;

        secNum = 0;

        timer = setInterval(function(){
            secNum ++;
            sec.innerHTML = "당신은 " + secNum + "초에 " + (secValue * secNum).toFixed(1) + "원 벌고 있습니다.";
        },1000)
    }

}