const links=[...document.querySelectorAll('.sidebar nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
const mobileMenu=document.querySelector('.mobile-more');
const mobilePanel=document.querySelector('.mobile-panel');
const mobileClose=document.querySelector('.mobile-close');

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){
    links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));
    document.querySelectorAll('.mobile-nav a').forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));
  }
}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>observer.observe(s));

function closeMobileMenu(){
  mobilePanel?.classList.remove('open');
  document.body.classList.remove('menu-open');
}
mobileMenu?.addEventListener('click',()=>mobilePanel?.classList.toggle('open'));
mobileClose?.addEventListener('click',closeMobileMenu);
document.querySelectorAll('.mobile-panel a').forEach(a=>a.addEventListener('click',closeMobileMenu));

document.getElementById('year').textContent=new Date().getFullYear();

// Project accordion interaction
const projects=[...document.querySelectorAll('.project')];
projects.forEach(project=>{
  const toggle=()=>{
    const willOpen=!project.classList.contains('open');
    projects.forEach(p=>{p.classList.remove('open');p.setAttribute('aria-expanded','false')});
    if(willOpen){project.classList.add('open');project.setAttribute('aria-expanded','true')}
  };
  project.addEventListener('click',toggle);
  project.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle()}});
});

// Dashboard image lightbox
const modal=document.querySelector('.dashboard-modal');
const modalImg=modal?.querySelector('img');
const modalTitle=modal?.querySelector('h3');
const modalDesc=modal?.querySelector('p');
const modalLabel=modal?.querySelector('.modal-copy span');
const closeModal=()=>{modal?.classList.remove('open');modal?.setAttribute('aria-hidden','true');document.body.classList.remove('menu-open');if(modalImg) modalImg.src='';};
document.querySelectorAll('.dashboard-card').forEach(card=>card.addEventListener('click',()=>{
  if(!modal) return;
  modalImg.src=card.dataset.image;
  modalImg.alt=card.querySelector('img')?.alt || card.dataset.title;
  modalTitle.textContent=card.dataset.title;
  modalDesc.textContent=card.dataset.description;
  modalLabel.textContent='SELECTED DASHBOARD';
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('menu-open');
}));
modal?.querySelector('.modal-close')?.addEventListener('click',closeModal);
modal?.addEventListener('click',e=>{if(e.target===modal) closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal?.classList.contains('open')) closeModal()});
