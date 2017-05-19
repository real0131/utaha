var body = document.getElementsByName('body');
var btn_show_cover_content = document.getElementById('btn-show-cover-content');
var carousel_content_main = document.getElementById('carousel-content-main');

function onClick(id) {
    switch(id){
        case "show-cover-content":
            var pattern = /animation?/g;
            if (!pattern.test(btn_show_cover_content.className.toString())){
                removeClass(carousel_content_main,['show']);
                addClass(btn_show_cover_content,['animation']);
                addClass(carousel_content_main,['hide-anim']);
                setTimeout(function () {
                    addClass(carousel_content_main,['hide']);
                },500);
            }else{
                removeClass(btn_show_cover_content,['animation']);
                removeClass(carousel_content_main,['hide-anim']);
                removeClass(carousel_content_main,['hide']);
                addClass(btn_show_cover_content,['ToDefault']);
                btn_show_cover_content.addEventListener('animationend',
                    function () { removeClass(btn_show_cover_content,['ToDefault']); });
                addClass(carousel_content_main,['show-anim','show']);
                carousel_content_main.addEventListener('animationend',
                    function () {
                        removeClass(carousel_content_main,['show-anim']);
                });
            }
            break;
    }
}

function addClass(element, classNames) {
    for(i=0;i<classNames.length;i++) {
        element.className += " " + classNames[i];
    }
}

function removeClass(element, classNames) {
    for(i=0;i<classNames.length;i++) {
        element.classList.remove(classNames[i]);
    }
}

function anyLog(from, msg) {
    console.log('this log is from : '+ from.toString() + '  |  msg is : '+msg.toString());
}

function ScrollEvent() {
    body.addEventListener('scroll');
}