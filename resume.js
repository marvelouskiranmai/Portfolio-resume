const contactForm=document.getElementById('Contact'),
   contactMessage=document.getElementById('contact-message')
   const sendEmail=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_93198xv','template_lmo4h3m','#Contact','1kR8VCbeuO9BJadQB')
    .then(()=>{
        contactMessage.textContent='Message sent successfully '
    setTimeout(()=>{
        contactMessage.textContent=''
    },5000)
    contactForm.reset()
   },()=>{
    contactMessage.textContent='Message not sent(service error)'
   })
   }
   contactForm.addEventListener('submit',sendEmail)
///////////
///////////

let menuIcon=document.querySelector('#menuicon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
        sections.forEach(sec=>{
            let top=window.scrollY;
            let offset=sec.offsetTop-150;
            let height=sec.offsetHeight;
            let id=sec.getAttribute('id');
    
            if(top >=offset && top<offset+height){
                navlinks.forEach.apply(links =>{
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*='+id+']').classList.add('active');
                });
            }
        });
        let header=document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY>100);
    
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
    
ScrollReveal({
    distance:'800px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.details',{origin:'top'} );
ScrollReveal().reveal('.photo,.page4,.page2,.contactform', {origin:'button'});
ScrollReveal().reveal('.photo1', {origin:'left'});
ScrollReveal().reveal('.info', {origin:'right'});

