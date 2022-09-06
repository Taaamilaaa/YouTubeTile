import { videoPath } from './videoPath.js';
import { addVideo } from './repos.js';

$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        // slidesToScroll: 3,
        speed: 1000,
        easing: 'ease',
        infinite: true,
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
            }
           
        ]
    });
});

const slider = document.querySelector('.slider');

slider.addEventListener('click', onClick);

function onClick(e) {
    const ifr = slider.querySelector('iframe');

    if (ifr && e.target.nodeName === 'IMG' ) {
        videoPath.forEach(el => {
            if (el.id === ifr.id) {
                const img = ` <img src=${el.url} width="290"  alt = "plug" id=${el.id} />`;
                ifr.parentNode.innerHTML = img;
                el.url = ifr.src;
            } 
        });
        addVideo(e.target);
    } else if (e.target.parentNode.className.includes('slider__item')) {
        addVideo(e.target);
    }
}
