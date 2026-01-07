const readMore = document.querySelector('.js-read-more');
const jsArticle = document.querySelector('.js-article');

readMore.addEventListener('click', (e) => {
      let target = e.target;
      
      if (!jsArticle.classList.contains('article-2')) {
        jsArticle.classList.add('article-2');
        target.textContent = 'Read Less';
        

        
        
      } else{
        jsArticle.classList.remove('article-2');
         target.innerHTML = "Read more";
         
      }
})
const animateMe = document.querySelectorAll('.animate-me');
const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>  {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }})
 
  }, {
  threshold: 0.3 // Animation triggers when 50% of the element is visible
});
animateMe.forEach((element) => {
  observer.observe(element);
});

const animateAs = document.querySelectorAll('.wrap-child');
const observing = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>  {
        if (entry.isIntersecting) {
          entry.target.classList.add('fly');
      }})
 
  }, {
  threshold: 0.3 // Animation triggers when 50% of the element is visible
});
animateAs.forEach((element) => {
  observing.observe(element);
});


const freeTrial = document.querySelectorAll('.freetrial');
let invisible = document.querySelectorAll('.pop');
let cs = document.getElementsByClassName('cross');

 freeTrial.forEach((element, index) => {
    if (Number (element.getAttribute('id')) === index){
      element.addEventListener('click',  (e) => {
        invisible[index].style.display = 'block';

      })
    }
 })

  cs = Array.from(cs);
  cs.forEach((item, index) => {
    item.addEventListener('click', ()=> {
      if(index === Number(freeTrial[index].getAttribute('id'))) {
        invisible[index].style.display = 'none';
      }
    })
  })

