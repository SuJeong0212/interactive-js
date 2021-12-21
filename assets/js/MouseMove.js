let cursor_item;
let h1;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.05;

window.onload = function(){
    h1 = document.getElementsByTagName("h1")[0];
    cursor_item = document.getElementsByClassName("cursor_item")[0];
    window.addEventListener("mousemove",mouseFunc,false);

function mouseFunc(e){
    x = e.clientX;
    y = e.clientY;
}

loop();
};

function loop(){
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    
    h1.innerHTML = " x: " + x + " y: " + y;
    cursor_item.style.transform = "translate(" + mx +"px," + my +"px)";
    window.requestAnimationFrame(loop);
}