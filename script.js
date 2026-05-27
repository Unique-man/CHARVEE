const courses=[
{name:'Data Analyst',duration:'4 Months',skills:'Excel, SQL, Power BI, Python',desc:'Learn to analyze and visualize business data.'},
{name:'Data Science',duration:'6 Months',skills:'Python, ML, Statistics, Visualization',desc:'Master end-to-end data science workflow.'},
{name:'Artificial Intelligence and Machine Learning',duration:'6 Months',skills:'ML, DL, NLP, Deployment',desc:'Build smart AI applications.'},
{name:'Full Stack Development',duration:'6 Months',skills:'HTML, CSS, JS, Node, React',desc:'Create complete web applications.'},
{name:'Python + Database',duration:'4 Months',skills:'Python, SQL, CRUD, APIs',desc:'Develop backend-ready programming skills.'},
{name:'Java',duration:'4 Months',skills:'Core Java, OOP, JDBC, Spring Basics',desc:'Learn industry-standard Java development.'},
{name:'Web Development',duration:'3 Months',skills:'HTML, CSS, JavaScript, Responsive UI',desc:'Design modern and responsive websites.'},
{name:'Digital Marketing',duration:'3 Months',skills:'SEO, SEM, Social Media, Analytics',desc:'Grow brands through digital channels.'}
];
const grid=document.getElementById('courseGrid');
function renderCourses(filter=''){if(!grid)return;grid.innerHTML='';courses.filter(c=>c.name.toLowerCase().includes(filter.toLowerCase())).forEach(c=>{const card=document.createElement('article');card.className='card';card.innerHTML=`<h3>${c.name}</h3><p>${c.desc}</p><p><strong>Duration:</strong> ${c.duration}</p><p><strong>Skills:</strong> ${c.skills}</p><a class="btn btn-outline" href="contact.html">Enquire Now</a>`;grid.appendChild(card);});}
renderCourses();document.getElementById('courseSearch')?.addEventListener('input',e=>renderCourses(e.target.value));

const imgs=[1,2,3,4,5,6,7,8].map(i=>`https://picsum.photos/seed/charvee${i}/500/350`);const gallery=document.getElementById('galleryGrid');const lightbox=document.getElementById('lightbox');if(gallery){imgs.forEach(src=>{const im=document.createElement('img');im.src=src;im.alt='Institute gallery';im.onclick=()=>{lightbox.style.display='flex';lightbox.querySelector('img').src=src};gallery.appendChild(im);});document.getElementById('closeLightbox').onclick=()=>lightbox.style.display='none';lightbox.onclick=e=>{if(e.target===lightbox)lightbox.style.display='none';};}

document.getElementById('contactForm')?.addEventListener('submit',e=>{e.preventDefault();const f=e.target;const msg=document.getElementById('formMsg');if(!f.checkValidity()){msg.textContent='Please fill all fields correctly.';msg.style.color='crimson';return;}msg.textContent='Thanks! We will contact you soon.';msg.style.color='green';f.reset();});

document.querySelector('.menu-toggle')?.addEventListener('click',()=>document.querySelector('.nav-links')?.classList.toggle('open'));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.15});document.querySelectorAll('[data-animate]').forEach(el=>obs.observe(el));
