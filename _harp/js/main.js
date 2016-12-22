(function () {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => $(`[data-js="${selector}"]`);

  //////////////////
  // OVERLAY MENU //
  //////////////////

  const toggleNavBtn = $$('site-nav-toggle');
  const navId = toggleNavBtn.getAttribute('aria-controls');
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
  toggleNavBtn.classList.remove(toggleDehydratedClass);

  /**
   * Create event handlers for toggling menu state.
   */
  const toggleMenuVisibility = () => {
    const navActiveClass = 'site-nav__overlay--active';
    const toggleBtnActiveClass = 'site-nav__toggle--active';

    const isActiveBeforeClick = nav.classList.contains(navActiveClass);

    nav.classList.toggle(navActiveClass);
    nav.setAttribute('aria-hidden',isActiveBeforeClick);

    toggleNavBtn.classList.toggle(toggleBtnActiveClass);
    toggleNavBtn.setAttribute('aria-pressed', !isActiveBeforeClick);
  };

  /**
   * Bind event handler to click activity.
   * TODO: Toggle on media query breakpoints also.
   */
  toggleNavBtn.addEventListener('click', toggleMenuVisibility);
})();
