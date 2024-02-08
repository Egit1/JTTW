
const showIcon = document.querySelector('.showIcons');
const socialLinks = document.querySelector('.social_Links');
const barIcon = document.querySelector('.fa-bars');
const wrapper = document.querySelector('.Links_list');

showIcon.onclick = ()=> {
    socialLinks.classList.toggle('openIcon')
}

function menuBar() {
    barIcon.classList.toggle('fa-times');
    wrapper.classList.toggle('open');
}



window.addEventListener('load', function () {
    var revealItem = document.querySelectorAll('.reveal');

    for(var i = 0; i < revealItem.length; i++) {
        
        windowHeight = window.innerWidth;
        revealPoint = 150;
        Top = revealItem[i].getBoundingClientRect().top;

        if(Top = windowHeight - revealPoint) {
            revealItem[i].classList.add('active');
        }

        else {
            revealItem[i].classList.remove('active')
        }
    }
})