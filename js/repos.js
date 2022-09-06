'use strict';
import { videoPath } from './videoPath.js';

function addVideo(element) {
    const id = element.id;

    if (element.parentNode.className.includes('slick-cloned')) {
        const iframe = `<iframe src=${videoPath[0].url.concat(
            '?autoplay=1'
        )} id = "1" width="290" frameborder="0" allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture" allowfullscreen=""></iframe>`;
        element.parentNode.innerHTML = iframe;
        videoPath[0].url = element.src;
    } else {
        videoPath.forEach(el => {
            if (el.id === id) {
                const iframe = `<iframe src=${el.url.concat(
                    '?autoplay=1'
                )} id = ${id} width="290" frameborder="0" allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture" allowfullscreen=""></iframe>`;
                element.parentNode.innerHTML = iframe;
                el.url = element.src;
            }
        });
    }
}

function addImg(element) {
    const id = element.id;
    videoPath.forEach(el => {
        if (el.id === id) {
            const img = ` <img src=${el.url} width="290"  alt = "plug" id=${el.id} />`;
            element.parentNode.innerHTML = img;
            el.url = element.src;
        }
    });
}

export { addVideo, addImg };
