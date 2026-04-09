/**
 * Mouse Beam Effect for Reveal.js Presentation
 * Original beam effect code — orange/purple/pink/blue beams
 */
(function () {
  /* ── DOM 생성 ── */
  const canvas = document.createElement('canvas');
  canvas.id = 'beam-canvas';
  canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9998;';
  document.body.appendChild(canvas);

  const glowEl = document.createElement('div');
  glowEl.id = 'glow-overlay';
  glowEl.style.cssText = `
    position:fixed;pointer-events:none;
    width:600px;height:600px;border-radius:50%;
    background:radial-gradient(circle,
      rgba(180,50,255,0.08) 0%,
      rgba(255,80,0,0.04) 40%,
      transparent 70%);
    transform:translate(-50%,-50%);
    z-index:9999;transition:opacity 0.3s ease;
  `;
  document.body.appendChild(glowEl);

  const ctx = canvas.getContext('2d');

  /* ── 상태 ── */
  let W, H;
  let mouse = { x: -9999, y: -9999 };
  let target = { x: -9999, y: -9999 };
  let smoothed = { x: -9999, y: -9999 };
  let rafId = null;

  /* ── 빔 설정 (원본) ── */
  const BEAMS = [
    { angle: -40,  color1: 'rgba(255,100,0,0.9)',   color2: 'rgba(255,50,0,0)',   width: 6,  length: 1.6 },
    { angle: -42,  color1: 'rgba(255,120,20,0.5)',  color2: 'rgba(255,80,0,0)',   width: 18, length: 1.4 },
    { angle: 140,  color1: 'rgba(200,80,255,0.7)',  color2: 'rgba(100,0,255,0)',  width: 8,  length: 1.5 },
    { angle: 138,  color1: 'rgba(220,100,255,0.4)', color2: 'rgba(80,0,200,0)',   width: 24, length: 1.3 },
    { angle: 50,   color1: 'rgba(255,60,120,0.5)',  color2: 'rgba(200,0,80,0)',   width: 5,  length: 1.2 },
    { angle: 220,  color1: 'rgba(80,180,255,0.4)',  color2: 'rgba(0,100,255,0)',  width: 5,  length: 1.1 },
  ];

  /* ── 리사이즈 ── */
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  /* ── 마우스 추적 ── */
  window.addEventListener('mousemove', (e) => {
    target.x = e.clientX;
    target.y = e.clientY;
    glowEl.style.left = e.clientX + 'px';
    glowEl.style.top = e.clientY + 'px';
    glowEl.style.opacity = '1';
  });

  window.addEventListener('mouseleave', () => {
    glowEl.style.opacity = '0';
  });

  /* ── 빔 그리기 ── */
  function drawBeam(cx, cy, angleDeg, color1, color2, width, lengthMul) {
    const rad = (angleDeg * Math.PI) / 180;
    const reach = Math.max(W, H) * lengthMul;
    const ex = cx + Math.cos(rad) * reach;
    const ey = cy + Math.sin(rad) * reach;

    const grad = ctx.createLinearGradient(cx, cy, ex, ey);
    grad.addColorStop(0, color1);
    grad.addColorStop(1, color2);

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(ex, ey);
    ctx.strokeStyle = grad;
    ctx.lineWidth = width;
    ctx.stroke();
  }

  /* ── 렌더 루프 ── */
  function render() {
    const ease = 0.12;
    smoothed.x += (target.x - smoothed.x) * ease;
    smoothed.y += (target.y - smoothed.y) * ease;

    ctx.clearRect(0, 0, W, H);

    if (smoothed.x > -5000) {
      for (const b of BEAMS) {
        drawBeam(smoothed.x, smoothed.y, b.angle, b.color1, b.color2, b.width, b.length);
      }
    }

    rafId = requestAnimationFrame(render);
  }

  render();
})();
