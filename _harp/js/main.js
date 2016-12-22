(function () {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => $(`[data-js="${selector}"]`);

  //////////////////
  // OVERLAY MENU //
  //////////////////

  const toggleBtn = $$('site-nav-toggle');
  const toggleBtnText = $$('site-nav-toggle-text');
  const toggleBtnIcon = $$('site-nav-toggle-icon');
  const navId = toggleBtn.getAttribute('aria-controls');
  const nav = $(`#${navId}`);

  /**
   * Hydrate the menu on page load.
   */
  const navDehydratedClass = 'site-nav__overlay--dehydrated';
  const toggleDehydratedClass = 'site-nav__toggle--dehydrated';

  // Hide menu overlay.
  nav.classList.remove(navDehydratedClass);
  nav.setAttribute('aria-hidden', true);

  // Show toggle button.
  toggleBtn.classList.remove(toggleDehydratedClass);

  /**
   * Create event handlers for toggling menu state.
   */
  const toggleMenuVisibility = () => {
    const navActiveClass = 'site-nav__overlay--active';
    const toggleBtnActiveClass = 'site-nav__toggle--active';
    const toggleBtnIconActiveClass = 'site-nav__toggle-icon--active';

    const isActiveBeforeClick = nav.classList.contains(navActiveClass);

    nav.classList.toggle(navActiveClass);
    nav.setAttribute('aria-hidden',isActiveBeforeClick);

    toggleBtn.classList.toggle(toggleBtnActiveClass);
    toggleBtn.setAttribute('aria-pressed', !isActiveBeforeClick);

    toggleBtnIcon.classList.toggle(toggleBtnIconActiveClass);

    // Update the text of the button.
    const inactiveBtnText = 'Menu';
    const activeBtnText = 'Close';

    if (isActiveBeforeClick) {
      // Now it is inactive.
      toggleBtnText.textContent = inactiveBtnText;
    } else {
      toggleBtnText.textContent = activeBtnText;
    }
  };

  /**
   * Bind event handler to click activity.
   * TODO: Toggle on media query breakpoints also.
   */
  toggleBtn.addEventListener('click', toggleMenuVisibility);
})();
