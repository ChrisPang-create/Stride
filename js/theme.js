(function () {
  const initAOS = () => {
    if (window.AOS && typeof window.AOS.init === 'function') {
      window.AOS.init({ duration: 800 });
    } else {
      document.querySelectorAll('[data-aos]').forEach((el) => {
        el.style.opacity = 1;
        el.style.transform = 'none';
      });
    }
  };

  const header = document.querySelector('.navbar');
  if (header) {
    const headerHeight = header.offsetHeight;
    const toggleHeaderState = () => {
      const scrolled = window.scrollY >= headerHeight;
      header.classList.toggle('scrolled', scrolled);
      header.classList.toggle('shadow-sm', scrolled);
      header.classList.toggle('bg-white', scrolled);
    };

    window.addEventListener('scroll', toggleHeaderState);
    toggleHeaderState();
  }

  initAOS();
})();
