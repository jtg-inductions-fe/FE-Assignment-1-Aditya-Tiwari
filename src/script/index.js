import '../styles/main.scss';

// Mobile Navigation Toggle Script

// Select the hamburger menu icon element
const hamburgerIcon = document.querySelector('.icon-hamburger');

// Select the container for navigation links
const navlinksContainer = document.querySelector('.navlinks__container');

// Select the container that holds action buttons (e.g., login/signup)
const navbarButtonContainer = document.querySelector(
    '.navbar__button-container',
);

/**
 * Event Listener: Toggle Navigation Drawer
 *
 * When the hamburger icon is clicked:
 * - Toggle the visibility of the navigation links container
 * - Toggle the visibility of the button container
 *
 * This is done by adding/removing the respective "active" CSS classes.
 */

hamburgerIcon.addEventListener('click', () => {
    navlinksContainer.classList.toggle(
        'navbar__navigation-drawer-navlinks--active',
    );
    navbarButtonContainer.classList.toggle(
        'navbar__navigation-drawer-button-container--active',
    );
});
