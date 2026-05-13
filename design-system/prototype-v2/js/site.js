/* Forty Collection — site interactions */

(function () {
  'use strict';

  // Sticky nav state
  const nav = document.querySelector('.nav');
  if (nav) {
    let scrolled = false;
    const onScroll = () => {
      const isScrolled = window.scrollY > 80;
      if (isScrolled !== scrolled) {
        scrolled = isScrolled;
        nav.classList.toggle('is-scrolled', scrolled);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Lightbox gallery
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const lightbox = document.querySelector('.lightbox');
  if (galleryItems.length && lightbox) {
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCounter = lightbox.querySelector('.lightbox-counter');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    const sources = galleryItems.map(item => {
      const img = item.querySelector('img');
      return img ? (img.dataset.full || img.src) : '';
    }).filter(Boolean);

    let currentIndex = 0;

    const show = (i) => {
      currentIndex = (i + sources.length) % sources.length;
      lightboxImg.src = sources[currentIndex];
      if (lightboxCounter) {
        lightboxCounter.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(sources.length).padStart(2, '0')}`;
      }
    };

    const open = (i) => {
      show(i);
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    };

    galleryItems.forEach((item, i) => {
      item.addEventListener('click', () => open(i));
    });
    if (prevBtn) prevBtn.addEventListener('click', () => show(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => show(currentIndex + 1));
    if (closeBtn) closeBtn.addEventListener('click', close);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(currentIndex - 1);
      if (e.key === 'ArrowRight') show(currentIndex + 1);
    });
  }

  // Scroll reveal on .reveal elements
  if ('IntersectionObserver' in window) {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
      reveals.forEach(el => obs.observe(el));
    }
  }
})();
