




const search_btn = document.querySelector("#search_btn");
const search_modal = document.querySelector("#search_modal");

function event() {
    search_btn.addEventListener("click" , search_bar);
    
}

function search_bar() {
    if(search_modal.style.bottom == "100%"){

        search_modal.style.bottom = "60px";
    }else {
        search_modal.style.bottom = "100%";

    }
}

function readURL(input) {
    const photos = document.getElementById("photos");


    if(input.files.length =! 0){

        var html = '';
        for (let i = 0; i < input.files.length; i++) {
            if (input.files[i]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                html+='<div class="img_box on">'+
                '    <img src="'+e.target.result+'" alt="">'+
                '</div>'
                photos.innerHTML = html;
                };
                reader.readAsDataURL(input.files[i]);
            }
            
        }



    }else {
        photos.innerHTML = 
        '<div class="img_box">'+
        '    <img src="./image/icon/camera.png" alt="">'+
        '</div>'
    }


  }



// var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
// var options = { //지도를 생성할 때 필요한 기본 옵션
// 	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
// 	level: 3 //지도의 레벨(확대, 축소 정도)
// };

// var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


event();



