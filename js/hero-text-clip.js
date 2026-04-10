/**
 * Hero Text Clip Effect
 * Captures video frames to canvas, applies blue-tone filter,
 * then uses as background-clip:text on hero text elements.
 * Result: text color changes with video, in blue tones (navy~blue~sky~white).
 */
(function () {
  const video = document.querySelector('.hero-video-bg video');
  if (!video) return;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  let rafId = null;
  let isActive = false;

  function updateSize() {
    canvas.width = 960;  // half res for performance
    canvas.height = 540;
  }
  updateSize();

  function applyBlueFilter(imageData) {
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Convert to luminance
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;

      // Map luminance to blue tone gradient:
      // dark (lum 0)   -> navy   #0a1450  (10, 20, 80)
      // mid  (lum 128) -> blue   #2050c0  (32, 80, 192)
      // high (lum 200) -> sky    #60a0f0  (96, 160, 240)
      // max  (lum 255) -> white  #ffffff  (255, 255, 255)
      const t = lum / 255;

      let nr, ng, nb;
      if (t < 0.4) {
        // navy to blue
        const s = t / 0.4;
        nr = 10 + s * 22;
        ng = 20 + s * 60;
        nb = 80 + s * 112;
      } else if (t < 0.75) {
        // blue to sky
        const s = (t - 0.4) / 0.35;
        nr = 32 + s * 64;
        ng = 80 + s * 80;
        nb = 192 + s * 48;
      } else {
        // sky to white
        const s = (t - 0.75) / 0.25;
        nr = 96 + s * 159;
        ng = 160 + s * 95;
        nb = 240 + s * 15;
      }

      data[i] = nr;
      data[i + 1] = ng;
      data[i + 2] = nb;
    }
    return imageData;
  }

  function render() {
    if (!isActive) return;

    if (video.readyState >= 2) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      applyBlueFilter(imageData);
      ctx.putImageData(imageData, 0, 0);

      const dataUrl = canvas.toDataURL('image/jpeg', 0.6);

      // Apply as background to all hero text elements
      const texts = document.querySelectorAll('.hero-fixed-overlay .hero-main-title, .hero-fixed-overlay .hero-sub-en, .hero-fixed-overlay .hero-sub-kr');
      texts.forEach(el => {
        el.style.backgroundImage = `url(${dataUrl})`;
        el.style.backgroundSize = 'cover';
        el.style.backgroundPosition = 'center';
        el.style.webkitBackgroundClip = 'text';
        el.style.backgroundClip = 'text';
        el.style.webkitTextFillColor = 'transparent';
        el.style.color = 'transparent';
      });
    }

    rafId = requestAnimationFrame(render);
  }

  // Start/stop based on hero visibility
  const observer = new MutationObserver(() => {
    const overlay = document.getElementById('heroOverlay');
    const visible = overlay && overlay.style.display !== 'none';

    if (visible && !isActive) {
      isActive = true;
      render();
    } else if (!visible && isActive) {
      isActive = false;
      if (rafId) cancelAnimationFrame(rafId);
    }
  });

  // Observe the overlay display changes
  const overlay = document.getElementById('heroOverlay');
  if (overlay) {
    observer.observe(overlay, { attributes: true, attributeFilter: ['style'] });

    // Check initial state
    if (overlay.style.display !== 'none') {
      isActive = true;
      video.addEventListener('canplay', () => render(), { once: true });
      if (video.readyState >= 2) render();
    }
  }
})();
