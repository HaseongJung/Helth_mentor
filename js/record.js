$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['메인'],
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


// 차트 그리기
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
// 챠트 종류를 선택
type: 'line',
// 챠트를 그릴 데이타
data: {
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
datasets: [{  
    backgroundColor: 'transparent',
    borderColor: 'red',
    data: [70, 68, 66, 68, 65, 66, 64]
}]
},
// 옵션
options: {
    legend: {
        display: false
    },
    title: {
        display: true,
        text: '체중',
        fontSize: 50,
        fontColor: 'white'
    },
    fontSize: 50
}
});

// muscleChart
var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
// 챠트 종류를 선택
type: 'line',
// 챠트를 그릴 데이타
data: {
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
datasets: [{  
    backgroundColor: 'transparent',
    borderColor: 'red',
    data: [19, 21, 24, 24, 28, 30, 31]
}]
},
// 옵션
options: {
    legend: {
        display: false
    },
    title: {
        display: true,
        text: '골격근량',
        fontSize: 50,
        fontColor: 'white'
    },
    fontSize: 50
}
});

// fatChart
var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
// 챠트 종류를 선택
type: 'line',
// 챠트를 그릴 데이타
data: {
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
datasets: [{  
    backgroundColor: 'transparent',
    borderColor: 'red',
    data: [25, 21, 23, 20, 18, 16, 17]
}]
},
// 옵션
options: {
    legend: {
        display: false
    },
    title: {
        display: true,
        text: '체지방량',
        fontSize: 50,
        fontColor: 'white'
    },
}
});

// bmiChart
var ctx = document.getElementById('myChart4').getContext('2d');
var chart = new Chart(ctx, {
// 챠트 종류를 선택
type: 'line',
// 챠트를 그릴 데이타
data: {
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
datasets: [{  
    backgroundColor: 'transparent',
    borderColor: 'red',
    data: [25, 23, 21, 23, 19, 21, 18]
}]
},
// 옵션
options: {
    legend: {
        display: false
    },
    title: {
        display: true,
        text: 'BMI',
        fontSize: 50,
        fontColor: 'white'
    },
}
});

// fatperChart
var ctx = document.getElementById('myChart5').getContext('2d');
var chart = new Chart(ctx, {
// 챠트 종류를 선택
type: 'line',
// 챠트를 그릴 데이타
data: {
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
datasets: [{  
    backgroundColor: 'transparent',
    borderColor: 'red',
    data: [20, 17, 19, 16, 15, 13, 14]
}]
},
// 옵션
options: {
    legend: {
        display: false
    },
    title: {
        display: true,
        text: '체지방률',
        fontSize: 50,
        fontColor: 'white'
    },
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