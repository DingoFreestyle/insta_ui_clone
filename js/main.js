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

// $(document).ready(function () {
//     $('h1').css({'color': 'pink'});
//     $('#typo .inner').css({
//         'text-decoration': 'underline',
//         'border-bottom': '5px solid black',
//         'opacity': 0.5,
//         'transform': 'rotate(45deg)'});
// })

// CSS 스타일 적용 >>>>>> """ $(html요소).메소드css나 js같은거('매개변수1','매개변수2'); """


////////////////// 마우스 반응 ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼

// $(document).ready(function () {
//     $('#logo').on('mouseover', function () {   ///////  ".on"을 사용해서 작동! 을 표헌 / - mouseover > 커서가 올라왔을 때,
//         $('#logo').css({'transform': 'scale(0.8)'});
//     $('#logo').on('mouseout', function () {   ///////  - mouseout > 커서가 나왔을 때,
//         $('#logo').css({'transform': 'scale(1)'});
//         });
//     });
// })
///////////////////////////////////////////////////
///// 윗 내용을 아래처럼 줄일 수도 있으니 참고///////////

// $(document).ready(function () {
//     $('#logo').mouseover(function () {
//         $('#logo').css({'transform': 'scale(0.8)'});
//     })
//     .mouseout(function () {
//         $('#logo').css({'transform': 'scale(1)'});
//         });
// })

///////////////////////////////////////////////////
///////////////////////////////////////////////////

// 이 외 이벤트의 종류는???
//  keydown - 요소에 초첨이 맞춰진 상태에서 키보드 눌렸을 때
//  keyup - 요소에 초첨이 맞춰진 상태에서 키보드 뗄 때
//  focus - 요소에 포커스가 맞았을 때 (포커스 있는 요소 한정)
//  blur - 요소에 포커스에서 떨어졌을 때 (포커스 있는 요소 한정)
//  change - 입력 내용 변경시 (textarea, input, select 등등)
//  resize - 크기 변경시
//  scroll - 스크롤 시
//  click - 클릭시

///////////////////////////////////////////////////
/////////////////애니메이션 메소드///////////////////
// 선택자.animate({속성:값, 속성:값}, 시간, 이징, ㅎ
$(function () {
    $('#typo.inner').click(function () {
        $(this).css
    })
});