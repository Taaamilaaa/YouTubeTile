import { videoPath } from './videoPath.js';
import { addVideo, addImg } from './repos.js';

$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        speed: 1000,
        easing: 'ease',
        infinite: false,
        initialSlide: 0,
        autoplay: false,
        draggable: false,
        swipe: true,
        touchThreeshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
});

const slider = document.querySelector('.slider');

slider.addEventListener('click', onClick);

function onClick(e) {
    const ifr = slider.querySelector('iframe');

    if (ifr && e.target.nodeName === 'IMG') {
        addImg(ifr);
        addVideo(e.target);
    } else if (e.target.parentNode.className.includes('slider__item')) {
        addVideo(e.target);
    } else if (e.target.nodeName === 'BUTTON') {
        if (ifr && !ifr.parentNode.className.includes('slick-active')) {
            addImg(ifr);
        }
    }
}
