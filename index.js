const nav = document.querySelector('.nav'),
    navItem = nav.querySelector('.nav_list_item');

const transition = document.querySelector('.transition'),
    transitionCol = transition.querySelector('.transition_column'),
    transitionColText = transition.querySelectorAll('.transition_columns_text > span'),
    transitionElementText = transition.querySelectorAll('.transition_element > h1');

const tl = gspa.timeline({ paused: true, defaults: { ease: 'expo.inOut' } });

const initTransition = () => {
    gsap.set(transition, { display: 'none', autoAlpha: 0 });
    gsap.set(transitionCol, { y: '-101%' });
    gsap.set(transitionColText, { autoAlpha: 0, y: '-101%' });
    gsap.set(transitionElementText, { autoAlpha: 0 });
};