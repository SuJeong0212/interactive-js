$(function(){
    var header = $('header');
    var sectionMainVisual = $('.section1');
    var sectionOverlap = $('.section2');
    var sectionMainTop; //섹션의 top값을 구함
    var sectionMainBottom; //섹션의 bottom값을 구함

    var winScrollTop; //스크롤바의 높이를 담을 변수를 선언
    var sectionIsMoving = false; //섹션이 이동중인지 체크하는 변수

    function setProperty(){
        winScrollTop = $(window).scrollTop(); //스크롤바의 현재 위치를 구함
        sectionMainTop = sectionMainVisual.offset().top; //섹션의 top값을 구함
        sectionMainBottom = sectionMainTop + sectionMainVisual.height(); //섹션의 bottom값을 구함
    };

    function moveSection(){
        setProperty();

        if(winScrollTop > sectionMainTop && winScrollTop < sectionMainBottom){
            
            if(!sectionIsMoving){
                sectionIsMoving = true;
                moveStartRender();
            }
            console.log('section in');
        }

        if(winScrollTop >= sectionMainBottom){
            activeCheck();
        }
    };

    moveSection();
});