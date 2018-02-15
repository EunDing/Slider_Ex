/*
오늘 배울 것 

1. 제이쿼리를 사용한 이미지 슬라이드
2. 플러그인
3. API, Callback, method

*/

//1. 제이쿼리를 사용한 이미지 슬라이드
//html문서가 제대로 로딩이 되었으면 실행해라

//버튼을 누르면 -200px 이동하는 기능
//1. 변수와 css 사용
//var $slidePos = 0; 
//$(document).ready(function(){
//    $('.next').on('click',function(){
//        $slidePos = $slidePos - 200; 
//        $('.slider').css('left',$slidePos);  
//    });
//});

//2. 변수 생략
//$(document).ready(function(){
//    $('.next').on('click',function(){
//   
//        $('.slider').css('left','-=200px');  //원래 자리에서 200만큼 뺀 내용으로 이동. '$num-=200;' 와 같은 느낌
//    });
//});

//3. animate 사용
//$(document).ready(function(){
//    
//    $('.next').on('click',function(){
//   
//        $('.slider').animate({ 'left' : '-=200'},300); //0.3초마다 왼쪽으로 이동해라
//    });
//    
//    $('.prev').on('click',function(){
//        $('.slider').animate({ 'left' : '+=200px'},300);
//    });
//});

//4 유지,보수 용이하게 변경 (attr, data-*)
//화면에 아이템 갯수,크기 유동적으로 바꾸기

/*공간을 줄이기 위한 방법
1. css 전체 넓이 줄인다 (1000 -> 800)
2. css 디스플레이 될 개수만큼 나눈다. ( 800/5 )
*/

//슬라이드 옵션 (전역변수)
var $container = 1000; 
var $display = 5; 
var $item = $container/$display;
var $count = $('.item').length;
var $slidebox = $item * $count; 

//옵션에 따른 결과
function init(){
    $('.container').css('width',$container);
    $('.slider').css('width',$slidebox);
    $('.item').css('width',$item);
};

//버튼 누를 때 기능
function moveSlider(){
        var check = $(this).attr('class'); 
        //자신의 속성을 가져온다는 뜻. 만약에 ('class','test')이면 클래스가 test로 바뀐다는 뜻.
        //class를 'data-btn'으로 변경할 수도 있다.
        console.log(check) //=>버튼에 따라 next, prev가 뜸.
        
        if( check == 'next'){ //'data-btn'을 쓴 경우 '1'로 변경할 수 있다.
            $('.slider').animate({'left' : '-='+$item+'px'},300,sliderEnd);
        }else {
            $('.slider').animate({'left' : '+='+$item+'px'},300,sliderEnd);
        }
}

//첫번째와 마지막 슬라이드에서 더이상 가지 않게 튕기게 구현되는 기능
function sliderEnd(){
    var end = $('.slider').position().left;
    console.log(end);
    slideboxend = -($slidebox - $container);
    
    if ( end < slideboxend ){
        $('.slider').animate({ left : slideboxend },300);
//        $('.next').off('click'); //if문에 부합하면 next 클릭이 안된다.

    } else if ( end > 0 ) {
        $('.slider').animate({ left : 0 },300);
//         $('.prev').off('click'); //if문에 부합하면 prev 클릭이 안된다.
    }
}

//이벤트 시작
$(document).ready(function(){
    init(); //옵션별 세팅
    //컨트롤 이벤트 준비
    $('.next').on('click',moveSlider);
    $('.prev').on('click',moveSlider);
});




















