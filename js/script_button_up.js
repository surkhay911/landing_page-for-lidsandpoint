window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {//количество пикселей после которой появится кнопка
        document.getElementById("myBtn").style.display = "block";
        console.log('1');
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}