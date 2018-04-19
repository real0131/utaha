/*AJAX start*/
//var xhr = XMLHttpRequest();
var url = "/works/content/";
/*
xhr.onload = function () {
    if(xhr.status == 200){
        loadToPage(xhr.responseText);
    }
};

xhr.open('GET','/works/'+id,true);

function loadToPage(html) {
    console.log(html);
}*/

function AJAX(req,element) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",url + req,true);
    xhttp.onload = function (ev) {
        element.innerHTML = this.responseText;
    };
    xhttp.send();
}

function getContent(id,element) {
    AJAX(id,element);
}

/*AJAX end*/

/*event start*/


var body = document.body;
var main = document.querySelector('main');
var dialog = document.getElementById('dialog-container');
var cancel_button = document.getElementById('dialog-cancel');
var header_btn_back = document.querySelector('.header-btn-back');

function showDialog(element) {
    try{
        //TODO: Need refactoring
        var title = element.querySelector('.card-title').innerHTML;
        var description = element.querySelector('.card-description').innerHTML;
        var img = element.querySelector('.card-image > img').src;
        addClass(header_btn_back,['show']);
        dialog.querySelector('.dialog-title').innerHTML = title;
        dialog.querySelector('.dialog-description').innerHTML = description;
        dialog.querySelector('.dialog-image > img').src = img;
        //TODO:xhr
        getContent(Number(element.querySelector('.card-id').innerHTML),dialog.querySelector('.dialog-content'));
        dialog.style.display = 'block';
        body.style.overflow = 'hidden';
        cancel_button.addEventListener('click',function () {
            removeDialog(dialog);
        });
    }catch(err) {
        console.error(err.message);
    }
}


function removeDialog() {
        dialog.scrollTop = 0;
        dialog.style.display = 'none';
        body.style.overflow = 'visible';
        removeClass(header_btn_back,['show']);
        cancel_button.removeEventListener('click', function () {
        });
}

/*event end*/

/* function start */
function $(element) {
    try{
        var result = document.querySelector(element);
    }catch(err) {
        console.error(err.message);
    }
    return result;
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
/* function end */