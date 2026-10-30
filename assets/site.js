const btn=document.querySelector('.menu-btn'), nav=document.querySelector('.navlinks');
if(btn){btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open'))})}
const filterButtons=[...document.querySelectorAll('[data-filter]')], cards=[...document.querySelectorAll('.project-card')];
const search=document.querySelector('#projectSearch');
function applyFilters(){
  const active=document.querySelector('[data-filter].active')?.dataset.filter||'all';
  const q=(search?.value||'').toLowerCase().trim();
  cards.forEach(c=>{
    const okTheme=active==='all'||c.dataset.theme===active;
    const okQ=!q||c.innerText.toLowerCase().includes(q);
    c.style.display=okTheme&&okQ?'flex':'none';
  })
}
filterButtons.forEach(b=>b.addEventListener('click',()=>{filterButtons.forEach(x=>x.classList.remove('active'));b.classList.add('active');applyFilters()}));
if(search) search.addEventListener('input',applyFilters);
