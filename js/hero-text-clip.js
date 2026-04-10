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
      // 쨍한 블루톤: 남색(0a1460) → 진한 블루(1030a0) → 블루(2060d0) → 진한 하늘(3080e0)
      // 투명도 없이 모든 영역에서 진한 색상 유지
      if (t < 0.3) {
        const s = t / 0.3;
        d[i] = 10 + s*6;   d[i+1] = 20 + s*16;  d[i+2] = 96 + s*64;
      } else if (t < 0.6) {
        const s = (t - 0.3) / 0.3;
        d[i] = 16 + s*16;  d[i+1] = 36 + s*60;  d[i+2] = 160 + s*48;
      } else if (t < 0.85) {
        const s = (t - 0.6) / 0.25;
        d[i] = 32 + s*16;  d[i+1] = 96 + s*32;  d[i+2] = 208 + s*16;
      } else {
        const s = (t - 0.85) / 0.15;
        d[i] = 48 + s*20;  d[i+1] = 128 + s*20; d[i+2] = 224 + s*10;
      }
      d[i+3] = 255; // 알파 항상 100% 불투명
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
