var btn_show_cover_content = document.getElementById('btn-show-cover-content');

function onClick(id) {
    switch(id){
        case "show-cover-content":
            var pattern = /animation?/g;
            if (!pattern.test(btn_show_cover_content.className.toString())){
                addClass(btn_show_cover_content,'animation');
            }else{
                removeClass(btn_show_cover_content,'animation');
                addClass(btn_show_cover_content,'ToDefault');
                btn_show_cover_content.addEventListener('animationend',
                    function(){removeClass(btn_show_cover_content,'ToDefault');});
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