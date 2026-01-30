/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/* Home Typed Js */
const typedHome = new Typed('#home-typed', {
      strings: ['Youtuber','Video Editor','Content Creator'],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      cursorChar: '_',
});

/* Add Shadow Header */
const scrollHeader = () =>{
   const header = document.getElementById('header')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
   this.scrollY >= 50 ? header.classList.add('shadow-header') 
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/* Contact Email Js */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()
   /*
    The code for sending email is a sample test.
    
    Create your account at https://www.emailjs.com/
    and follow the instructions in the video and images
    to send emails with your account.
    */

    //serviceID - templateID - #form - publicKey
   emailjs.sendForm('service_12012001', 'template_oz7fyfc', '#contact-form', 'nXakz7EWiRNZWw62v')
   .then(() =>{
      // Show sent message
      contactMessage.textContent = 'Tin nhắn đã gửi thành công✅'

      // Remove message after five seconds
      setTimeout(() =>{
         contactMessage.textContent = ''
      }, 5000)

      // Clear input fields
      contactForm.reset()
   },()=>{
      // Show error message
      contactMessage.textContent = 'Có lỗi xảy ra, vui lòng thử lại.❌'
   })
  
}

contactForm.addEventListener('submit', sendEmail)
/* Show Scroll Up */


/* Scroll Sections Active link */


/* Scroll Reveal Animation */