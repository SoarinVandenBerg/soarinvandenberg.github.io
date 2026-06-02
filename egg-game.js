//This game was made by hank green! I didnt make the code for this, just stole it from his site :)

var eggGame = { active: false, sprites: [], clicks: 0, animId: null };

  function startEasterEggGame() {
    if (eggGame.active) return;
    eggGame.active = true;
    eggGame.clicks = 0;
    eggGame.sprites = [];
    var src = 'clickygame.png';
    for (var i = 0; i < 30; i++) spawnGameSprite(src);
    eggGame.animId = requestAnimationFrame(tickGame);
  }

  function spawnGameSprite(src) {
    var img = document.createElement('img');
    img.src = src;
    img.className = 'game-sprite';
    var w = 100 + Math.floor(Math.random() * 201);
    img.style.width = w + 'px';
    img.style.height = 'auto';

    var x = Math.random() * (window.innerWidth - w);
    var y = Math.random() * (window.innerHeight - w);
    var angle = Math.random() * Math.PI * 2;
    var speed = 0.3 + Math.random() * 0.5;

    var rotSpeed = (Math.random() - 0.5) * 1.2; 
    var sprite = {
      el: img, x: x, y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      w: w, rot: Math.random() * 360, rotSpeed: rotSpeed
    };

    img.style.left = x + 'px';
    img.style.top = y + 'px';

    img.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      clickGameSprite(sprite);
    });

    document.body.appendChild(img);
    eggGame.sprites.push(sprite);
  }

  function clickGameSprite(sprite) {
    sprite.el.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    sprite.el.style.transform = 'rotate(' + sprite.rot + 'deg) scale(0)';
    sprite.el.style.opacity = '0';
    setTimeout(function() { sprite.el.remove(); }, 300);

    var idx = eggGame.sprites.indexOf(sprite);
    if (idx >= 0) eggGame.sprites.splice(idx, 1);

    eggGame.clicks++;

    // Every 2 clicks, spawn 1 new one (if sprites remain)
    if (eggGame.clicks % 2 === 0 && eggGame.sprites.length > 0) {
      spawnGameSprite('clickygame.png');
    }

    // Win condition
    if (eggGame.sprites.length === 0) {
      eggGame.active = false;
      cancelAnimationFrame(eggGame.animId);
      localStorage.setItem("egg5_found", "true");
      popup.style.display = "flex";
    }
  }

  function tickGame() {
    if (!eggGame.active) return;
    var vw = window.innerWidth;
    var vh = window.innerHeight;

    for (var i = 0; i < eggGame.sprites.length; i++) {
      var s = eggGame.sprites[i];
      s.x += s.vx;
      s.y += s.vy;

      // Bounce off edges
      if (s.x <= 0) { s.x = 0; s.vx = Math.abs(s.vx); }
      if (s.x >= vw - s.w) { s.x = vw - s.w; s.vx = -Math.abs(s.vx); }
      if (s.y <= 0) { s.y = 0; s.vy = Math.abs(s.vy); }
      if (s.y >= vh - s.w) { s.y = vh - s.w; s.vy = -Math.abs(s.vy); }

      s.rot += s.rotSpeed;
      s.el.style.left = s.x + 'px';
      s.el.style.top = s.y + 'px';
      s.el.style.transform = 'rotate(' + s.rot + 'deg)';
    }

    eggGame.animId = requestAnimationFrame(tickGame);
  }
