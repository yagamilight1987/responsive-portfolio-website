window.addEventListener('DOMContentLoaded', () => {
  const themeSelectorButton = document.querySelector('.theme-selector');

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    themeSelectorButton.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    themeSelectorButton.setAttribute('data-theme', 'light');
  }

  themeSelectorButton.addEventListener('click', () => {
    const hasDarkClass = document.documentElement.classList.contains('dark');
    if (!hasDarkClass) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      themeSelectorButton.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      themeSelectorButton.setAttribute('data-theme', 'light');
    }
  });

  const menu = document.getElementById('nav');
  document.getElementById('menu-btn').addEventListener('click', function () {
    menu.classList.toggle('hidden');
    document.body.setAttribute('data-menu-open', true);
  });

  document.getElementById('close-btn').addEventListener('click', () => {
    menu.classList.toggle('hidden');
    document.body.setAttribute('data-menu-open', false);
  });

  const navLinks = document.querySelectorAll('nav .nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      navLinks.forEach((el) => el.classList.remove('active'));
      this.classList.add('active');
      menu.classList.toggle('hidden');
      document.body.setAttribute('data-menu-open', false);
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.set('.timeline .line', { height: 0 });

  const descriptions = gsap.utils.toArray('.timeline .timeline-item p');
  descriptions.map((item) => gsap.set(item, { opacity: 0 }));

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.journey',
      start: 'top top',
      end: 'bottom top',
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
      markers: true,
    },
  });

  const timelineItems = document.querySelector('.timeline-items');
  const timelineItemsTop = timelineItems.getBoundingClientRect().top;

  descriptions.map((item, index) => {
    const height = item.getBoundingClientRect().top - timelineItemsTop;
    console.log(height);
    tl.to('.timeline .line', { height: `${height}px` })
      .set('.timeline .line', { height: `${height}px` })
      .to(item, { opacity: 1 });

    if (index === descriptions.length - 1) {
      tl.to('.timeline .line', { height: '100%' });
    }
  });
});
