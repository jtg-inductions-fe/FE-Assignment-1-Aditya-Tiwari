import '../styles/main.scss';

let hamburgerIcon = document.querySelector('.icon-hamburger');
let navigationDrawer = document.querySelector('.navigation-drawer');
let navigationDrawerNavlinksContainer = document.querySelector(
    '.navigation-drawer__navlinks-container',
);
let closeNavigationDrawerButton = document.querySelector(
    '.navigation-drawer__close-icon',
);

function closeNavigationDrawer(ele) {
    ele.addEventListener('click', () => {
        navigationDrawer.style.display = 'none';
        hamburgerIcon.style.visibility = 'visible';
    });
}

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.style.visibility = 'hidden';
    navigationDrawer.style.display = 'flex';
    navigationDrawer.style.flexDirection = 'column';
});

closeNavigationDrawer(navigationDrawer);
closeNavigationDrawer(closeNavigationDrawerButton);

navigationDrawerNavlinksContainer.addEventListener('click', (e) => {
    e.stopPropagation();
});
