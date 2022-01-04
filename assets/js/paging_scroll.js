// window.onload = function(){
//     var prevBtn = document.querySelector(".prevBtn");
//     var nextBtn = document.querySelector(".nextBtn");
//     var h1 = document.getElementsByTagName("h1")[0];
//     var bgColorArr = ["#85FFBD", "#FFFB7D", "#E0C3FC", "#00DBDE"];
//     var section = document.getElementsByTagName("section");

//     var pageNum = 0;
//     var totlaNum = section.length;

//     prevBtn.addEventListener("click", function(){
//         if(pageNum > 0){
//         pageNum --;
//         }else{
//             pageNum = totlaNum -1;
//         }
//         bgColorChange();
//     })
    
//     nextBtn.addEventListener("click", function(){
//         if(pageNum < totlaNum -1){
//             pageNum ++;
//         }else{
//             pageNum = 0;
//         }
//         bgColorChange();
//     })
    
//     function bgColorChange(){
//         h1.innerHTML = (pageNum + 1) + " 페이지 입니다.";
//         document.getElementsByTagName("body")[0].style.background = bgColorArr[pageNum];

//         window.scrollTo({
//             top:section[pageNum].offsetTop,
//             behavior:'smooth',
//         })
//     }


//     bgColorChange();
// }