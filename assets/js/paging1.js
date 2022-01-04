window.onload = function(){
    var section = document.getElementsByTagName("section");
    var pageNum = 0;
    var totalNum = section.length; 

    //스크롤 이벤트
    window.addEventListener("scroll", function(event){
      var scroll = this.scrollY;

      for(var i=0; i<totalNum; i++){
        if(scroll > section[i].offsetTop - window.outerHeight/1.5  && scroll < section[i].offsetTop - window.outerHeight/1.5 + section[i].offsetHeight){
          pageNum = i;
          break;
        }
      }
      pageChangeFunc();
    });


    //페이지 변경
    function pageChangeFunc(){

      for(var i=0; i<totalNum; i++){
        section[i].classList.remove("active");
        // section[i].className = "";
      }
      section[pageNum].classList.add("active");

    }

    //페이지 로드되면 바로 실행
    pageChangeFunc();
  }
  