const tileList = document.querySelector('.tile__list');

const videoPath = [
    {
        id: '1',
        url: 'https://www.youtube.com/embed/OZbH5MdMRSs?autoplay=1',
    },
    {
        id: '2',
        url: 'https://www.youtube.com/embed/yJcCKuxfb2o?autoplay=1',
    },
    {
        id: '3',
        url: 'https://www.youtube.com/embed/ESITUo-WX1c?autoplay=1',
    },
    {
        id: '4',
        url: 'https://www.youtube.com/embed/LPdvfRzVoAg?autoplay=1',
    },
    {
        id: '5',
        url: 'https://www.youtube.com/embed/mX_jE18Zuyg?autoplay=1',
    },
    {
        id: '6',
        url: 'https://www.youtube.com/embed/9EZ9D7Fns9g?autoplay=1',
    },
    {
        id: '7',
        url: 'https://www.youtube.com/embed/jgLiQfXZtmo?autoplay=1',
    },
    {
        id: '8',
        url: 'https://www.youtube.com/embed/m_6IZJ5LSmY?autoplay=1',
    },
    {
        id: '9',
        url: 'https://www.youtube.com/embed/1myXPWLj2ew?autoplay=1',
    },
];

tileList.addEventListener('click', onClick);

function onClick(e) {
    const ifr = document.querySelector('iframe');

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

function addVideo(element) {
    const id = element.id;

    videoPath.forEach(el => {
        if (el.id === id) {
            const iframe = `<iframe src=${el.url.concat('?autoplay=1')} id = ${id} width="290" frameborder="0" allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture" allowfullscreen=""></iframe>`;
            element.parentNode.innerHTML = iframe;
            el.url = element.src;
        }
    });
}
