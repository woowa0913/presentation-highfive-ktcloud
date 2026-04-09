/**
 * Mouse Light Trail Effect
 * Inspired by knolskape.com/ai-labs hero effect
 * Smooth ribbon trails that follow cursor with gradient colors
 */
(function () {
  const canvas = document.createElement('canvas');
  canvas.id = 'beam-canvas';
  canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9998;';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  /* ── Trail configuration ── */
  const TRAIL_LENGTH = 80;
  const FADE_SPEED = 0.92;

  /* Multiple ribbon trails with different offsets and colors */
  const ribbons = [
    { points: [], offset: 0,   width: 3,  color: [255, 100, 0],   opacity: 0.9  },
    { points: [], offset: 8,   width: 12, color: [255, 120, 20],  opacity: 0.4  },
    { points: [], offset: -6,  width: 2,  color: [200, 80, 255],  opacity: 0.8  },
    { points: [], offset: -12, width: 8,  color: [220, 100, 255], opacity: 0.35 },
    { points: [], offset: 4,   width: 2,  color: [255, 60, 120],  opacity: 0.6  },
    { points: [], offset: -3,  width: 2,  color: [80, 180, 255],  opacity: 0.5  },
  ];

  let mouse = { x: -9999, y: -9999 };
  let isActive = false;

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    isActive = true;
  });

  window.addEventListener('mouseleave', () => {
    isActive = false;
  });

  /* ── Perpendicular offset for ribbon spread ── */
  function getOffsetPoint(x, y, prevX, prevY, offset) {
    const dx = x - prevX;
    const dy = y - prevY;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const nx = -dy / len;
    const ny = dx / len;
    return { x: x + nx * offset, y: y + ny * offset };
  }

  /* ── Draw a single ribbon trail ── */
  function drawRibbon(ribbon) {
    const pts = ribbon.points;
    if (pts.length < 3) return;

    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);

    for (let i = 1; i < pts.length - 1; i++) {
      const xc = (pts[i].x + pts[i + 1].x) / 2;
      const yc = (pts[i].y + pts[i + 1].y) / 2;
      ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
    }

    const last = pts[pts.length - 1];
    ctx.lineTo(last.x, last.y);

    ctx.strokeStyle = `rgba(${ribbon.color[0]},${ribbon.color[1]},${ribbon.color[2]},${ribbon.opacity})`;
    ctx.lineWidth = ribbon.width;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();

    /* Glow effect */
    if (ribbon.width <= 3) {
      ctx.strokeStyle = `rgba(${ribbon.color[0]},${ribbon.color[1]},${ribbon.color[2]},${ribbon.opacity * 0.3})`;
      ctx.lineWidth = ribbon.width + 6;
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length - 1; i++) {
        const xc = (pts[i].x + pts[i + 1].x) / 2;
        const yc = (pts[i].y + pts[i + 1].y) / 2;
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
      }
      ctx.lineTo(last.x, last.y);
      ctx.stroke();
    }
  }

  /* ── Render loop ── */
  function render() {
    ctx.clearRect(0, 0, W, H);

    ribbons.forEach((ribbon) => {
      if (isActive) {
        const prev = ribbon.points.length > 0
          ? ribbon.points[ribbon.points.length - 1]
          : { x: mouse.x, y: mouse.y };

        const pt = ribbon.offset === 0
          ? { x: mouse.x, y: mouse.y }
          : getOffsetPoint(mouse.x, mouse.y, prev.x, prev.y, ribbon.offset);

        ribbon.points.push(pt);
      }

      /* Trim old points */
      while (ribbon.points.length > TRAIL_LENGTH) {
        ribbon.points.shift();
      }

      /* Fade out when inactive */
      if (!isActive && ribbon.points.length > 0) {
        ribbon.points.shift();
        if (ribbon.points.length > 0) ribbon.points.shift();
      }

      drawRibbon(ribbon);
    });

    requestAnimationFrame(render);
  }

  render();
})();
