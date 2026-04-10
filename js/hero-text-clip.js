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
      // 반전: 밝은 배경(lum 높음) → 진한 남색, 어두운 배경(lum 낮음) → 흰색
      const t = 1.0 - (lum / 255);
      // t=0(원래 밝음→지금0) = 진한남색, t=1(원래 어두움→지금1) = 흰색
      if (t < 0.3) {
        // 진한 남색 #0a1460 → #102080
        const s = t / 0.3;
        d[i] = 10 + s*6;    d[i+1] = 20 + s*12;  d[i+2] = 96 + s*32;
      } else if (t < 0.55) {
        // 블루 #102080 → #2050c0
        const s = (t - 0.3) / 0.25;
        d[i] = 16 + s*16;   d[i+1] = 32 + s*48;  d[i+2] = 128 + s*64;
      } else if (t < 0.8) {
        // 하늘색 #2050c0 → #70b0f0
        const s = (t - 0.55) / 0.25;
        d[i] = 32 + s*80;   d[i+1] = 80 + s*96;  d[i+2] = 192 + s*48;
      } else {
        // 흰색 #70b0f0 → #e8f0ff
        const s = (t - 0.8) / 0.2;
        d[i] = 112 + s*120;  d[i+1] = 176 + s*64; d[i+2] = 240 + s*15;
      }
      d[i+3] = 255;
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
