Telegram.WebApp.ready();

try {
    let username = Telegram.WebApp.user;
    console.log(username);
}
catch (error) {
    console.error( 'cought: ' + error);
}

function popUp() {
    try {
        Telegram.WebApp.showAlert('Saved')
    }
    catch (error) {
        console.error( 'cought: ' + error);
    }
}




let postDate = document.querySelector('.date');
let text = document.querySelector('.textContainer')
let safeBtn = document.querySelector('.safeBtn');
let deleteBtn = document.querySelector('.deleteBtn');
let setDateBtn = document.querySelector('.setDateBtn');

setDateBtn.addEventListener('click', function() {
    if (localStorage.getItem(postDate.value) == null) {
        text.value = '';
    } else {
        text.value = localStorage.getItem(postDate.value);
    }
})


safeBtn.addEventListener('click', function() {
    localStorage.setItem(postDate.value, text.value);
})

deleteBtn.addEventListener('click', function() {
    localStorage.removeItem(postDate.value);
    text.value = '';
})


