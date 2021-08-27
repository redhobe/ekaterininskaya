//svg and pregnancy test animation
const personsSectionPos = document.querySelector('.persons-section').offsetTop;
const circle = document.querySelector('#eWphIkgmK262');
const pregTest = document.querySelector('.persons-section__preg-test');
let classSet = false;

document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > personsSectionPos && !classSet) {
        circle.setAttribute('data-active', '');
        pregTest.classList.add('animate');
        classSet = true;
    } else if (document.documentElement.scrollTop < personsSectionPos - document.querySelector('.persons-section__circle').offsetHeight && classSet) {
        circle.removeAttribute('data-active')
        pregTest.classList.remove('animate');
        classSet = false;
    }
})

//slider config
document.addEventListener('DOMContentLoaded', function() {
    new Splide('.splide', {
        perPage: 4,
        perMove: 1,
        focus: 1,
        width: 1350,
        pagination: false,
        type: 'loop',
        'arrowPath': 'M27.19 20L8.86 38.33 10.53 40l18.33-18.33L30.53 20l-1.67-1.67L10.53 0 8.86 1.67 27.19 20z',
        breakpoints: {
            1366: {
                width: 1100,
            },
            1200: {
                width: 800,
                perPage: 3,
            },
            780: {
                arrows: false,
                pagination: true,
                width: '100%',
                perPage: 1,
            },
        },
    }).mount();
});