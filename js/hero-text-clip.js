/**
 * Hero Text Clip — pixel-level video color in text
 *
 * Every frame: capture video → blue-tone remap → background-clip:text
 * Each pixel of text independently reflects video color beneath it.
 */
(function () {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  canvas.width = 480;
  canvas.height = 270;

  let running = false;
  let rafId = null;

  function blueRemap(d) {
    for (let i = 0; i < d.length; i += 4) {
      const lum = 0.299 * d[i] + 0.587 * d[i+1] + 0.114 * d[i+2];
      const t = lum / 255;
      if (t < 0.35) {
        const s = t / 0.35;
        d[i] = 12 + s*15; d[i+1] = 24 + s*30; d[i+2] = 80 + s*60;
      } else if (t < 0.65) {
        const s = (t - 0.35) / 0.3;
        d[i] = 27 + s*40; d[i+1] = 54 + s*60; d[i+2] = 140 + s*40;
      } else if (t < 0.85) {
        const s = (t - 0.65) / 0.2;
        d[i] = 67 + s*80; d[i+1] = 114 + s*70; d[i+2] = 180 + s*40;
      } else {
        const s = (t - 0.85) / 0.15;
        d[i] = 147 + s*73; d[i+1] = 184 + s*51; d[i+2] = 220 + s*35;
      }
    }
  }

  function tick() {
    if (!running) return;
    const video = document.querySelector('.hero-fullscreen video');
    if (!video || video.readyState < 2) {
      rafId = requestAnimationFrame(tick);
      return;
    }

    ctx.drawImage(video, 0, 0, 480, 270);
    const img = ctx.getImageData(0, 0, 480, 270);
    blueRemap(img.data);
    ctx.putImageData(img, 0, 0);
    const url = canvas.toDataURL('image/jpeg', 0.5);

    document.querySelectorAll('.hero-fullscreen .hero-main-title,.hero-fullscreen .hero-sub-en,.hero-fullscreen .hero-sub-kr')
      .forEach(el => {
        el.style.backgroundImage = 'url(' + url + ')';
        el.style.backgroundSize = '100vw 100vh';
        el.style.backgroundPosition = 'center';
        el.style.backgroundAttachment = 'fixed';
        el.style.webkitBackgroundClip = 'text';
        el.style.backgroundClip = 'text';
        el.style.webkitTextFillColor = 'transparent';
        el.style.color = 'transparent';
      });

    rafId = requestAnimationFrame(tick);
  }

  // Expose start/stop globally so Reveal.js events can call them
  window._heroClipStart = function () {
    if (running) return;
    running = true;
    tick();
  };
  window._heroClipStop = function () {
    running = false;
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    // Reset text to fallback color
    document.querySelectorAll('.hero-fullscreen .hero-main-title,.hero-fullscreen .hero-sub-en,.hero-fullscreen .hero-sub-kr')
      .forEach(el => {
        el.style.backgroundImage = '';
        el.style.webkitBackgroundClip = '';
        el.style.backgroundClip = '';
        el.style.webkitTextFillColor = '';
        el.style.color = '';
      });
  };
})();
