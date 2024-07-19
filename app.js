window.Telegram.WebApp.onEvent('webAppReady', function() {
    try {
        const user = window.Telegram.WebApp.WebAppUser;
        if (user) {
            const greetingsElement = document.querySelector('.greatings');
            if (greetingsElement) {
                greetingsElement.value = 'Hi, ' + user.username;
                window.Telegram.WebApp.MainButton.show();

                if (user.is_premium) {
                    greetingsElement.value = 'Hi, ' + user.username + '*****';
                }
            } else {
                console.error('Element with class "greatings" not found.');
            }
        } else {
            console.error('WebAppUser object not found.');
        }
    } catch (err) {
        console.error(err);
    }
});





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


