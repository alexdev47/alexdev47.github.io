Telegram.WebApp.ready();

try {
    let username = Telegram.WebApp.initData.user.username;
    let prem = Telegram.WebApp.initData.user.is_premium;
    console.log(username);
    console.log(prem);
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







const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const day = String(today.getDate()).padStart(2, '0'); 

postDate.value = `${year}-${month}-${day}`;





if (localStorage.getItem(postDate.value) == null) {
    text.value = '';
} else {
    text.value = localStorage.getItem(postDate.value);
}




postDate.addEventListener('change', function() {
    if (localStorage.getItem(postDate.value) == null) {
        text.value = '';
    } else {
        text.value = localStorage.getItem(postDate.value);
    }
})


safeBtn.addEventListener('click', function() {
    localStorage.setItem(postDate.value, text.value);

    safeBtn.style.background = '#bebebe';
    setTimeout(() => {
        safeBtn.style.background = '#E5ECE9';
      }, "100");

    
})

deleteBtn.addEventListener('click', function() {
    localStorage.removeItem(postDate.value);
    text.value = '';

    deleteBtn.style.background = '#bebebe';
    setTimeout(() => {
        deleteBtn.style.background = '#E5ECE9';
      }, "100");
})


