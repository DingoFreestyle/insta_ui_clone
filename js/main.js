////////////////// 제이쿼리 세팅 및 CSS 스타일 적용 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼

// <!--    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>-->
// <!--    <script src="js/scripts.js"></script>-->
// <!--    $(document).ready(function(){ 여기에 명령을 넣으면 바디 하단에 안넣어도 됨! });-->
// <!--    ㄴ문서가 준비완료된 후 입력된 명령을 작동시키게 하는 jquery식 오더-->
//
//
//     $('h1').css({'color': 'blue'});
//     // document.getElementsByTagNameNS('h1')[0].style.color = 'blue'; < 이거 안됌
//     // << "css()" = 하나만 바꾸기 / "css({}) = 전체 적용 바꾸기"ㅁ
//     // 스크립트는 body 하단에 있어야 상단을 읽는다 / body 내부 가장 하단에 두라는 얘기

// document.getElementsByTagName('h1')[0].style.color = 'blue';

$(document).ready(function () {
    $('h1').css({'color': 'pink'});
    $('#typo .inner').css({
        'text-decoration': 'underline',
        'border-bottom': '5px solid black',
        'opacity': 0.5,
        'transform': 'rotate(45deg)'});
})

// CSS 스타일 적용 >>>>>> """ $(html요소).메소드css나 js같은거('매개변수1','매개변수2'); """





