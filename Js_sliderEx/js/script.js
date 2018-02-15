// 슬라이드 
/*
    1. css animation -> 자동 슬라이드(컨트롤이 없음) X
    2. 자바스크립트로 슬라이드 구현 X
    3. 제이쿼리를 사용해서 슬라이드를 구현
    4. 플러그인을 사용해서 슬라이드를 구현
*/

// 자바스크립트 이미지슬라이드 구현 ( setInterval )
// 절차지향프로그래밍 ( 선호하는 방식이 아니다. )
// 나열하는 구조의 개발 방식
// 선택자와 기능을 분리 시킨다.
// 스네이크, 카멜
// 스네이크 변수
// 카멜 기능 함수(메소드)

// 선택자
var doc = document;
var next_btn = doc.getElementById('next');
var prev_btn = doc.getElementById('prev');
var item = doc.querySelector('.item');
var circle = doc.querySelector('.page').getElementsByTagName('div');
var slidePos = 0;
var distance = 700; // 슬라이드 이동 거리 ( 한개당 )
var nowPos = 0; // 현재 슬라이드가 있는 위치
var pageCount = 1;

// 고도화
var slideCount = item.getElementsByTagName('li').length// 슬라이드 객체 의 개수 == li 의 개수
var lastSlide = -(distance * (slideCount-1));

// 동작(이벤트)
next_btn.addEventListener('click',nextSlide);
prev_btn.addEventListener('click',prevSlide);

// 기능 (함수)
function prevSlide(){
    
    if ( pageCount > 1 ){
        
        nowPos = nowPos + distance; // 슬라이드 끝나면 있어야 할 위치
        pageCount--;

        var move = setInterval(function(){

            slidePos = slidePos + 10;

            if ( slidePos >= nowPos ) {
                clearInterval(move);  
                circle[pageCount-1].classList.add('active');
                circle[pageCount].classList.remove('active');
            }
            item.style.transform = 'translateX(' + slidePos + 'px)';
        },10);
    } else {
        var move = setInterval(function(){
            slidePos = slidePos - 20;   
            if ( slidePos <= lastSlide) {
                clearInterval(move);
                nowPos = lastSlide;
                pageCount = slideCount;
                circle[circle.length-1].classList.add('active');
                circle[0].classList.remove('active');
            }
            item.style.transform = 'translateX(' + slidePos + 'px)';
        },5);
    }
}

function nextSlide(){
    
    if ( pageCount < slideCount ) {
        
        nowPos = nowPos - distance; // 슬라이드 끝나면 있어야 할 위치
        pageCount++;

        var move = setInterval(function(){

            slidePos = slidePos - 10;

            if ( slidePos <= nowPos ) {
                clearInterval(move);  
                circle[pageCount-2].classList.remove('active');
                circle[pageCount-1].classList.add('active');
            }
            item.style.transform = 'translateX(' + slidePos + 'px)';
        },10);
    } else {
        
        var move = setInterval(function(){
            slidePos = slidePos + 20;   
            if ( slidePos >= 0) {
                clearInterval(move);
                nowPos = 0;
                pageCount = 1;
                circle[0].classList.add('active');
                circle[circle.length - 1].classList.remove('active');
            }
            item.style.transform = 'translateX(' + slidePos + 'px)';
        },5);
    }
    
//    slidePos = slidePos - 700;
//    if ( slidePos < -2800) {
//        slidePos = 0;
//    }
//    item.style.transform = 'translateX(' + slidePos + 'px)';
}


// 시작 버튼 정지 버튼
var play = doc.getElementById('play');
var pause = doc.getElementById('pause');
var auto = null;

play.addEventListener('click',function(){
    auto = setInterval(nextSlide,3000);
});

pause.addEventListener('click',function(){
    clearInterval(auto);
});
















