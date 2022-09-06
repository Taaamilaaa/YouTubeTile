"use strict"

import { addVideo } from "./repos.js";
import { videoPath } from "./videoPath.js";

const tileList = document.querySelector('.tile__list');



tileList.addEventListener('click', onClick);

function onClick(e) {
    const ifr = tileList.querySelector('iframe');

    if (ifr && e.target.nodeName !== 'UL') {
        videoPath.forEach(el => {
            if (el.id === ifr.id) {
                const img = ` <img src=${el.url} width="290"  alt = "plug" id=${el.id} />`;
                ifr.parentNode.innerHTML = img;
                el.url = ifr.src;
            }
        });
        addVideo(e.target);
    } else if (e.target.nodeName === 'IMG') {
        addVideo(e.target);
    } else if (e.target.nodeName === 'UL') {
        return;
    }
}

