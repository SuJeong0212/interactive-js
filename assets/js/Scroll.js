      let scrollTop = 0;
      let bar;
      let cloudWrap;
      let cloudWrap2;

      window.onload = function(){
        bar = document.getElementsByClassName("bar")[0];
        cloudWrap = document.getElementsByClassName("cloudWrap")[0]; //구름레이어1
        cloudWrap2 = document.getElementsByClassName("cloudWrap")[1]; //구름 레이어2
        //2개의 레이어를 따로 움직여봅니다.
      }

      window.addEventListener("scroll", function(e){
        scrollTop = document.documentElement.scrollTop;
        let per = Math.ceil(scrollTop / (document.body.offsetHeight - window.innerHeight) * 100);
        //window.outerHeight <- 브라우저 전체 높이(검색창 포함)
        //window.innerHeight <- 브라우저 안쪽 높이(실제 컨텐츠 영역)

        //console.log(per);
        bar.style.height = per +"%";

        cloudWrap.style.transform = "translate(0,"+ -scrollTop/8 +"px)";
        cloudWrap2.style.transform = "translate(0,"+ -scrollTop/6 +"px)";
      }, false)
