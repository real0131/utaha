var btn_show_cover_content = document.getElementById('btn-show-cover-content');
var carousel_content_main = document.getElementById('carousel-content-main');

function onClick(id) {
    switch(id){
        case "show-cover-content":
            var pattern = /animation?/g;
            if (!pattern.test(btn_show_cover_content.className.toString())){
                removeClass(carousel_content_main,'show');
                addClass(btn_show_cover_content,'animation');
                addClass(carousel_content_main,'hide-anim');
                carousel_content_main.addEventListener('animationend',
                function () { addClass(carousel_content_main,'hide'); });
            }else{
                removeClass(btn_show_cover_content,'animation');
                removeClass(carousel_content_main,'hide-anim');
                removeClass(carousel_content_main,'hide');
                addClass(btn_show_cover_content,'ToDefault');
                btn_show_cover_content.addEventListener('animationend',
                    function () { removeClass(btn_show_cover_content,'ToDefault'); });
                addClass(carousel_content_main,'show-anim');
                addClass(carousel_content_main,'show');
                carousel_content_main.addEventListener('animationend',
                    function () {
                        removeClass(carousel_content_main,'show-anim');
                });
            }
            break;
    }
}

function addClass(element, className) {
    element.className += " " + className;
}

function removeClass(element, className) {
    element.classList.remove(className);
}

function anyLog(from, msg) {
    console.log('this log is from : '+ from.toString() + '  |  msg is : '+msg.toString());
}