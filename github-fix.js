(function(){
  'use strict';

  function ready(fn){
    if(document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function(){
    document.documentElement.classList.remove('loading-site','no-js');
    document.documentElement.classList.add('js');

    // Render static rating stars from data-stars.
    document.querySelectorAll('.rating[data-stars]').forEach(function(box){
      var stars = parseFloat(box.getAttribute('data-stars') || '0');
      var full = Math.floor(stars);
      var half = stars - full >= 0.5;
      var html = '';
      for(var i=1;i<=5;i++){
        html += '<span style="color:#f7b500;font-size:14px;line-height:1" aria-hidden="true">' + (i <= full ? '★' : (i === full + 1 && half ? '★' : '☆')) + '</span>';
      }
      box.innerHTML = html;
      box.setAttribute('aria-label', stars + ' sao');
    });

    // Static download fallback: keep same UI but avoid broken external API/download calls on GitHub.
    document.querySelectorAll('.modradar-download-container[data-static-download="true"]').forEach(function(container){
      var btn = container.querySelector('.modradar-download-button');
      var list = container.querySelector('.modradar-download-list-container');
      var originalUrl = container.getAttribute('data-original-url') || 'https://tairoblox.com/grow-a-garden/';
      if(!btn || !list) return;
      btn.addEventListener('click', function(){
        list.innerHTML = '<div class="github-download-note"><strong>Bản GitHub Pages là trang tĩnh.</strong><br>Để tránh lỗi CORS/API và giữ repo sạch, nút tải được chuyển về trang gốc TaiRoblox.<br><a rel="nofollow noopener" href="'+ originalUrl +'">Mở trang tải gốc</a></div>';
        btn.style.display = 'none';
      });
    });

    // Disable static comment forms cleanly.
    document.querySelectorAll('form[data-static-disabled="true"], #wpdcom form').forEach(function(form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        alert('Bản GitHub Pages tĩnh không hỗ trợ gửi bình luận.');
      });
    });

    // Simple mobile menu fallback for Flatsome trigger.
    var menuBtn = document.querySelector('[data-open="#main-menu"], .nav-icon a');
    if(menuBtn){
      menuBtn.addEventListener('click', function(e){
        e.preventDefault();
        var existing = document.querySelector('.github-mobile-menu');
        if(existing){ existing.remove(); return; }
        var source = document.querySelector('.header-nav-main');
        if(!source) return;
        var panel = document.createElement('div');
        panel.className = 'github-mobile-menu';
        panel.style.cssText = 'position:fixed;inset:0 auto 0 0;width:300px;max-width:88vw;background:#fff;z-index:9999;box-shadow:8px 0 30px rgba(0,0,0,.18);padding:18px;overflow:auto';
        panel.innerHTML = '<button type="button" style="float:right;border:0;background:#335fff;color:white;border-radius:8px;padding:6px 10px">Đóng</button><div style="clear:both"></div>';
        var cloned = source.cloneNode(true);
        cloned.querySelectorAll('ul,li').forEach(function(el){ el.style.display='block'; el.style.margin='8px 0'; });
        cloned.querySelectorAll('a').forEach(function(a){ a.style.color='#222'; a.style.display='block'; a.style.padding='8px 0'; });
        panel.appendChild(cloned);
        panel.querySelector('button').addEventListener('click', function(){ panel.remove(); });
        document.body.appendChild(panel);
      });
    }
  });
})();