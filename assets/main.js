// Demos agroturismos G&G — interacciones
(function(){
  var burger=document.querySelector('.burger');
  var menu=document.querySelector('.menu');
  if(burger&&menu){
    burger.addEventListener('click',function(){menu.classList.toggle('open');});
    menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open');});});
  }
  var nav=document.querySelector('header.nav');
  function onScroll(){if(!nav)return;nav.style.boxShadow=window.scrollY>20?'0 8px 30px -18px rgba(0,0,0,.35)':'none';}
  window.addEventListener('scroll',onScroll);onScroll();
  var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});},{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el);});
  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
  var form=document.getElementById('bookForm');
  if(form){
    var wa=form.getAttribute('data-wa');var nombre=form.getAttribute('data-name')||'el alojamiento';
    form.addEventListener('submit',function(ev){
      ev.preventDefault();var d=new FormData(form);
      var msg='Hola, quiero consultar disponibilidad en '+nombre+':%0A%0A'+
        '%E2%80%A2 Nombre: '+(d.get('nombre')||'')+'%0A'+
        '%E2%80%A2 Entrada: '+(d.get('entrada')||'')+'%0A'+
        '%E2%80%A2 Salida: '+(d.get('salida')||'')+'%0A'+
        '%E2%80%A2 Personas: '+(d.get('personas')||'')+'%0A'+
        '%E2%80%A2 Comentarios: '+(d.get('msg')||'-');
      window.open('https://wa.me/'+wa+'?text='+msg,'_blank');
    });
  }
})();
