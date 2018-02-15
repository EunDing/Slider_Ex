$(document).ready(function(){
    
 
$('.item').eq(0).find('.con li').each(function(index){
 //index는 파라미터일뿐 이름은 상관없다.    
    $(this).delay(index*300).animate({
        opacity:1,
        top:0
        });
    });  

    
//3.for문  
function drop(event){
    var num = event.item.index; 
    $('.item .con li').css({ opacity : 0, top:-30 });
    //이미 실행한 함수도 다시 동작하게 하는 초기화 기능
    
      //4. 반복문 중에 제이쿼리 반복문 
    //each
    $('.item').eq(num).find('.con li').each(function(index){
 //index는 파라미터일뿐 이름은 상관없다.    
    $(this).delay(index*300).animate({
        opacity:1,
        top:0
        });
    });  
    
//    for ( i=0; i<3; i++){
//       $('.item').eq(num).find('.con li').eq(i).delay(i*300).animate({
//        opacity:1,
//        top:0
//    });
//    }
}
//    
//2    
//function ani(event){
////      $('.item').eq(event.item.index).find('h4').fadeIn(300); //아이템태그의 인덱스의 h4만 fadein
//      $('.item').eq(event.item.index).find('h4').delay(500).animate({
//          opacity : 1,
//          top : 0
//      },1000);
//  }
    //delay : 0.5초 있다가 실행되는것 
    
  $(".owl-carousel").owlCarousel({
  
      items : 1,
      margin: 10,
      dots : false,
      onTranslated: drop   //슬라이드가 이동한 다음에 실행되는 함수
          
  });
    
    //Docs-Events-내가 원하는 html태그 이벤트 입력하기
    var owl = $('.owl-carousel'); //플러그인 선택자
    owl.owlCarousel();
    $('.next').on('click',function(){
        owl.trigger('next.owl.carousel', [300]);//index
    });
    
    $('.prev').on('click',function(){
        owl.trigger('prev.owl.carousel', [300]);
    });
    
    $('.page button').on('click',function(){
        var index = $(this).index(); 
        owl.trigger('to.owl.carousel',[index,300]);
    });
});

//1
//$('.owl-carousel').owlCarousel({
//    loop:true,//false이면 반복이 되지 않는다. 마지막 번호에서 더이상 가지 않는다.
//    margin:10,
//    nav:true, //내비게이션, netx,prev가 없어진다.
//    responsive:{ //반응형, 픽셀에 따라 화면에 보여지는 아이템 갯수를 조절하는 것.
//        0:{
//            items:1
//        },
//        600:{
//            items:3
//        },
//        1000:{
//            items:5
//        }
//    }
//})