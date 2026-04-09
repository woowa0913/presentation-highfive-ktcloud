/**
 * Demo Loader Plugin for Reveal.js
 * iframe lazy loading + fallback system
 */
const DemoLoader = {
  id: 'demo-loader',

  init(reveal) {
    const LOAD_TIMEOUT_MS = 5000;

    reveal.on('slidechanged', (event) => {
      handleSlideChange(event.currentSlide, event.previousSlide);
    });

    // Handle initial slide
    const currentSlide = reveal.getCurrentSlide();
    if (currentSlide) {
      loadDemos(currentSlide);
    }

    function handleSlideChange(currentSlide, previousSlide) {
      if (previousSlide) {
        unloadDemos(previousSlide);
      }
      if (currentSlide) {
        loadDemos(currentSlide);
      }
    }

    function loadDemos(slide) {
      const iframes = slide.querySelectorAll('iframe[data-src]');
      iframes.forEach((iframe) => {
        const container = iframe.closest('.demo-container');
        const loader = container?.querySelector('.demo-loader');
        const fallback = container?.querySelector('.demo-fallback');

        if (loader) loader.style.display = 'block';

        iframe.src = iframe.dataset.src;
        iframe.style.display = 'block';

        const timeout = setTimeout(() => {
          showFallback(iframe, container, loader, fallback);
        }, LOAD_TIMEOUT_MS);

        iframe.addEventListener('load', () => {
          clearTimeout(timeout);
          if (loader) loader.style.display = 'none';
        }, { once: true });

        iframe.addEventListener('error', () => {
          clearTimeout(timeout);
          showFallback(iframe, container, loader, fallback);
        }, { once: true });
      });
    }

    function unloadDemos(slide) {
      const iframes = slide.querySelectorAll('iframe[data-src]');
      iframes.forEach((iframe) => {
        iframe.removeAttribute('src');
        iframe.style.display = 'block';
        const container = iframe.closest('.demo-container');
        const fallback = container?.querySelector('.demo-fallback');
        if (fallback) fallback.style.display = 'none';
      });
    }

    function showFallback(iframe, container, loader, fallback) {
      if (loader) loader.style.display = 'none';
      if (fallback) {
        iframe.style.display = 'none';
        fallback.style.display = 'block';
      }
    }
  }
};

export default DemoLoader;
