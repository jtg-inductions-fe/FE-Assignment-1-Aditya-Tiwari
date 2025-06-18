// import '../styles/main.scss';

let hamburgerIcon = document.querySelector('.icon-hamburger');

let navlinksContainer = document.querySelector('.navlinks__container');

let buttonContainer = document.querySelector('.navbar__button-container');

hamburgerIcon.addEventListener('click', () => {
    // navlinksContainer.style.display = 'flex';
    // navlinksContainer.style.position = 'absolute';
    // buttonContainer.style.display="flex";
    navlinksContainer.classList.toggle(
        'navbar__navigation-drawer-navlinks--active',
    );
    buttonContainer.classList.toggle(
        'navbar__navigation-drawer-button-container--active',
    );
    // hamburgerIcon.style.display = 'none';
});
