/**
 * Hero Text Clip — pixel-level video-to-text color mapping
 *
 * Captures video to offscreen canvas every frame, applies blue-tone
 * color remap, converts to data URL, sets as background-image on
 * text elements with background-clip:text. Each pixel of the text
 * independently reflects the video color beneath it.
 */
(function () {
  const offscreen = document.createElement('canvas');
  const octx = offscreen.getContext('2d', { willReadFrequently: true });
  offscreen.width = 480;
  offscreen.height = 270;

  let isActive = false;
  let rafId = null;

  function blueRemap(data) {
    for (let i = 0; i < data.length; i += 4) {
      const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      const t = lum / 255;

      if (t < 0.35) {
        // dark → navy (#0c1850)
        const s = t / 0.35;
        data[i]     = 12 + s * 15;
        data[i + 1] = 24 + s * 30;
        data[i + 2] = 80 + s * 60;
      } else if (t < 0.65) {
        // mid → blue (#2050b0)
        const s = (t - 0.35) / 0.3;
        data[i]     = 27 + s * 40;
        data[i + 1] = 54 + s * 60;
        data[i + 2] = 140 + s * 40;
      } else if (t < 0.85) {
        // bright → sky blue (#5090e0)
        const s = (t - 0.65) / 0.2;
        data[i]     = 67 + s * 80;
        data[i + 1] = 114 + s * 70;
        data[i + 2] = 180 + s * 40;
      } else {
        // very bright → near white (#c0d8ff)
        const s = (t - 0.85) / 0.15;
        data[i]     = 147 + s * 73;
        data[i + 1] = 184 + s * 51;
        data[i + 2] = 220 + s * 35;
      }
    }
  }

  function render() {
    if (!isActive) return;

    const video = document.querySelector('.hero-fullscreen video');
    if (!video || video.readyState < 2) {
      rafId = requestAnimationFrame(render);
      return;
    }

    octx.drawImage(video, 0, 0, offscreen.width, offscreen.height);
    const imageData = octx.getImageData(0, 0, offscreen.width, offscreen.height);
    blueRemap(imageData.data);
    octx.putImageData(imageData, 0, 0);

    const url = offscreen.toDataURL('image/jpeg', 0.5);

    const els = document.querySelectorAll(
      '.hero-fullscreen .hero-main-title,' +
      '.hero-fullscreen .hero-sub-en,' +
      '.hero-fullscreen .hero-sub-kr'
    );

    els.forEach(el => {
      el.classList.add('hero-clip-active');
      el.style.backgroundImage = `url(${url})`;
    });

    rafId = requestAnimationFrame(render);
  }

  function start() {
    if (isActive) return;
    isActive = true;
    render();
  }

  function stop() {
    isActive = false;
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  }

  // Watch hero visibility
  const check = () => {
    const el = document.getElementById('heroFullscreen');
    if (!el) return;
    const visible = el.style.display !== 'none';
    if (visible) start(); else stop();
  };

  // Poll every 500ms (simpler than MutationObserver for style changes)
  setInterval(check, 500);

  // Also run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', check);
  } else {
    check();
  }
})();
