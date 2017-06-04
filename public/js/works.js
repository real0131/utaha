/*AJAX start*/
//var xhr = XMLHttpRequest();
var id =1;
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

/*AJAX end*/

/*event start*/


var body = document.body;
var dialog = document.getElementById('dialog-container');
var cancel_button = document.getElementById('dialog-cancel');

function showDialog(element) {
    try{
        //TODO: Need refactoring
        title = element.querySelector('.card-title').innerHTML;
        description = element.querySelector('.card-description').innerHTML;
        img = element.querySelector('.card-image > img').src;

        dialog.querySelector('.dialog-title').innerHTML = title;
        dialog.querySelector('.dialog-description').innerHTML = description;
        dialog.querySelector('.dialog-image > img').src = img;
        //TODO:xhr
        dialog.style.display = 'block';
        body.style.overflow = 'hidden';
        dialog.style.overflow = 'scroll';
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
/* function end */