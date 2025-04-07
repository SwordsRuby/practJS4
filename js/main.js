function visible(el) {
    el.childNodes[1].lastElementChild.classList.toggle('rotate');

    el.childNodes[3].classList.toggle('none');
}

function tabindexSelect(el, img) {
    const tabButton = document.querySelectorAll('.dashboard-button');
    for (let index = 0; index < tabButton.length; index++) {
        tabButton[index].classList.remove('dashboard-button-active');
    }

    el.classList.toggle('dashboard-button-active');

    const tabImg = document.querySelector('.dashboard-img');
    tabImg.src = img;
}

function themeSwap(el) {
    document.body.classList.toggle('light-theme');

    el.firstElementChild.classList.toggle('theme-toggle-active');

    const img = document.querySelectorAll('.reverse');
    console.log(img);

    for (let index = 0; index < img.length; index++) {
        img[index].classList.toggle('img-reverse');
    }
}