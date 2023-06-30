$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['메인','유산소','무산소','기록','헬스장 찾기'],
        verticalCentered: false,
        scrollingSpeed: 1000,
        navigation: true,
        slideNavigation: true,
        continuousVertical: false,
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 0.975)',

        onLeave: function(){
            jQuery('.section [data-aos]').removeClass("aos-animate");
        },
        onSlideLeave: function(){
            jQuery('.slide [data-aos]').removeClass("aos-animate");
        },
        afterSlideLoad: function(){
            jQuery('.slide.active [data-aos]').addClass("aos-animate");
        },
        afterLoad: function(){
            jQuery('.section.active [data-aos]').addClass("aos-animate");
        //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
        }
    });
}); 

AOS.init();     // AOS 애니메이션

// 명언 랜덤 호출
const output = document.getElementById('quote');    
const strArray = ['운동은 사람의 몸과 감정과 정신력의 창조적 변화를 위한 약이다.', 
'운동하라. 잘 먹어라. 인내하라. 당신의 몸은 보답할 것이다.', 
'운동해야 한다. 그렇지 않으면, 어느 순간 당신은 고장 날 것이다.', 
'자신의 몸에 만족하는 순간 더 이상의 발전은 없다.',
'지금은 이 운동이 힘들지만, 언젠가는 워밍업이 될 것이다.'];

const randomStr = strArray[Math.floor(Math.random() * strArray.length)];
output.innerHTML = randomStr;

// 이미지맵 하이라이트
$.fn.maphilight.defaults = {
    fill: true,  //이미지맵 링크에 마우스가 올라오면 색을 넣을 건지 여부
    fillColor: 'ff0000',  // 색상지정
    fillOpacity: 0.5,  // 투명도 지정 0~1
    stroke: false,    // border를 넣을건지 여부 false로 설정하면 이하 옵션 무시됨
    strokeColor: 'ffffff',  //border 색상
    strokeOpacity: 1,  //border 투명도
    strokeWidth: 1  //border 폭
}
$('img[usemap]').maphilight(); // 위에 설정값 넣고 맵하이라이트 적용해줘야 적용됐다.;

$('.business .tab li').hover(function(){
    let i = $(this).index();
    $('.business map area').eq(i).mouseover();
}, function(){
    $('.business map area').mouseout();
});

// 이미지맵 툴팁
$(document).ready(function(){
    $("area").mouseover(function(){  
        let text = $(this).attr('title');  
        $('#tooltip').text(text);
        $('#tooltip').css('font-style', 'italic')
    });
    $("area").mouseleave(()=>{
        $("#tooltip").text('운동하고 싶은 부위를 클릭하세요!');
        $('#tooltip').css('font-style', '')
    });
});

// 유산소 섹션
$(".hov-anim").mouseover(function() {
    $(this).attr("src", $(this).data("animated"))
    }),
    $(".hov-anim").mouseout(function() {
    $(this).attr("src", $(this).data("static"))
    });

// To do list
var toDoArr = ["러닝머신 5km", "벤치 프레스 100kg 20회 3세트"];
let inputBox = document.getElementById('form3');  // 할 일 입력창
let addToDo = document.getElementById('addToDo');      // 버튼
let toDoList = document.getElementById('toDoList');    // 할 일 리스트창

addToDo.addEventListener('click', ()=>{
    
    if (!inputBox.value)
        alert("내용을 입력해 주세요!");
    else {
        toDoArr.push(inputBox.value);
        inputBox.value = '';
        toDoList.innerHTML ="";
        for (let i=0; i<toDoArr.length; i++) {
            let todo = toDoArr[i];
            let HTMLcode = '<li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2" class="toDoList-item"><div class="d-flex align-items-center" sytle="margin-left:10px"><input class="form-check-input me-2" type="checkbox" value="" aria-label="...">'+ todo +'</div><a href="#!" data-mdb-toggle="tooltip" title="Remove item"><i class="fas fa-times text-white">X</i></a></li>'
            toDoList.innerHTML += HTMLcode;
        }
    }
});


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent"); // tabcontent가 배열이 된다
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // 모두 사라지게 만든다
    }
    tablinks = document.getElementsByClassName("tablinks"); //tablinks가 배열이 된다
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");  //active를 다 지운다. active는 실행상태
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click(); //click 이벤트 발생