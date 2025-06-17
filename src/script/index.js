import '../styles/main.scss';

let hamburgerIcon = document.querySelector('.icon-hamburger');

let navlinksContainer = document.querySelector('.navlinks__container');
let navigationDrawerCloseIcon = document.querySelector(
    '.navlinks__container-close-icon',
);

hamburgerIcon.addEventListener('click', () => {
    // navlinksContainer.style.display = 'flex';
    // navlinksContainer.style.position = 'absolute';
    // hamburgerIcon.style.display = 'none';

    navlinksContainer.classList.add('navbar-container-hamburger--clicked');
    navlinksContainer.classList.add('navbar-container--show');
    hamburgerIcon.classList.add('element--hide');
});

navigationDrawerCloseIcon.addEventListener('click', () => {
    // hamburgerIcon.style.display = 'flex';
    // navlinksContainer.style.position = 'static';
    // navlinksContainer.classList.remove("navbar-container-hamburger--clicked");
    // navlinksContainer.classList.add("element--hide");

    // hamburgerIcon.classList.remove("element--hide");
    // navlinksContainer.style.display = 'none';
    navlinksContainer.classList.toggle('navlinks-container--hide');
    // navlinksContainer.classList.add("navlinks-container--hide");
    // hamburgerIcon.style.display = 'flex';
});
