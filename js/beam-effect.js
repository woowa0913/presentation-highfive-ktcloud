/**
 * Mouse Light Trail Effect
 * Faithfully reproduced from knolskape.com/ai-labs
 * 80 trails, spring physics, HSL color cycling, additive blending
 */
(function () {
  /* ── Canvas setup ── */
  const canvasEl = document.createElement('canvas');
  canvasEl.id = 'beam-canvas';
  canvasEl.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9998;';
  document.body.appendChild(canvasEl);

  var ctx;
  var oscillator;
  var hueValue = 0;
  var cursor = { x: 0, y: 0 };
  var trails = [];

  var config = {
    friction: 0.5,
    trails: 80,
    size: 50,
    dampening: 0.025,
    tension: 0.99,
  };

  /* ── Node (point in trail chain) ── */
  function Node() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
  }

  /* ── Oscillator (cycles hue over time) ── */
  function Oscillator(opts) {
    this.phase = opts.phase || 0;
    this.offset = opts.offset || 0;
    this.frequency = opts.frequency || 0.001;
    this.amplitude = opts.amplitude || 1;
  }

  Oscillator.prototype.update = function () {
    this.phase += this.frequency;
    hueValue = this.offset + Math.sin(this.phase) * this.amplitude;
    return hueValue;
  };

  /* ── Trail (chain of nodes with spring physics) ── */
  function Trail(opts) {
    this.spring = opts.spring + 0.1 * Math.random() - 0.05;
    this.friction = config.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (var i = 0; i < config.size; i++) {
      var node = new Node();
      node.x = cursor.x;
      node.y = cursor.y;
      this.nodes.push(node);
    }
  }

  Trail.prototype.update = function () {
    var spring = this.spring;
    var head = this.nodes[0];

    head.vx += (cursor.x - head.x) * spring;
    head.vy += (cursor.y - head.y) * spring;

    for (var i = 0, len = this.nodes.length; i < len; i++) {
      var node = this.nodes[i];

      if (i > 0) {
        var prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * config.dampening;
        node.vy += prev.vy * config.dampening;
      }

      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;

      spring *= config.tension;
    }
  };

  Trail.prototype.draw = function () {
    var nodes = this.nodes;
    var x = nodes[0].x;
    var y = nodes[0].y;

    ctx.beginPath();
    ctx.moveTo(x, y);

    for (var i = 1, len = nodes.length - 2; i < len; i++) {
      var a = nodes[i];
      var b = nodes[i + 1];
      x = 0.5 * (a.x + b.x);
      y = 0.5 * (a.y + b.y);
      ctx.quadraticCurveTo(a.x, a.y, x, y);
    }

    var a = nodes[i];
    var b = nodes[i + 1];
    ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
    ctx.stroke();
    ctx.closePath();
  };

  /* ── Resize ── */
  function resize() {
    canvasEl.width = window.innerWidth - 20;
    canvasEl.height = window.innerHeight;
  }

  /* ── Render loop ── */
  function render() {
    if (ctx.running) {
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = 'hsla(' + Math.round(oscillator.update()) + ',100%,50%,0.025)';
      ctx.lineWidth = 10;

      for (var i = 0; i < config.trails; i++) {
        trails[i].update();
        trails[i].draw();
      }

      ctx.frame++;
      window.requestAnimationFrame(render);
    }
  }

  /* ── Mouse handler (first move triggers init) ── */
  function onFirstInteraction(e) {
    document.removeEventListener('mousemove', onFirstInteraction);
    document.removeEventListener('touchstart', onFirstInteraction);

    document.addEventListener('mousemove', function (ev) {
      cursor.x = ev.clientX;
      cursor.y = ev.clientY;
    });

    document.addEventListener('touchmove', function (ev) {
      if (ev.touches.length === 1) {
        cursor.x = ev.touches[0].pageX;
        cursor.y = ev.touches[0].pageY;
      }
    });

    // Set initial cursor position
    if (e.touches) {
      cursor.x = e.touches[0].pageX;
      cursor.y = e.touches[0].pageY;
    } else {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    }

    // Create trails
    trails = [];
    for (var i = 0; i < config.trails; i++) {
      trails.push(new Trail({ spring: 0.45 + (i / config.trails) * 0.025 }));
    }

    render();
  }

  /* ── Init ── */
  ctx = canvasEl.getContext('2d');
  ctx.running = true;
  ctx.frame = 1;

  oscillator = new Oscillator({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });

  document.addEventListener('mousemove', onFirstInteraction);
  document.addEventListener('touchstart', onFirstInteraction);

  window.addEventListener('resize', resize);
  window.addEventListener('focus', function () {
    if (!ctx.running) {
      ctx.running = true;
      render();
    }
  });
  window.addEventListener('blur', function () {
    ctx.running = true;
  });

  resize();
})();
