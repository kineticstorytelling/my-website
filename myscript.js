// const carouselSlide = document.querySelector('.product_images');
// const carouselImages = document.querySelector('.product_images img');

// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// let counter = 1;
// const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// nextBtn.addEventListener('click', ()=>{
//     if(counter >= carouselImages.length - 1) return;
//     carouselSlide.style.transition = 'transform 0.4s ease-in-out';
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// });
// prevBtn.addEventListener('click', ()=>{
//     carouselSlide.style.transition = 'transform 0.4s ease-in-out';
//     counter--;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });
// carouselSlide.addEventListener('transitioned',()=>{
//     if (carouselImages(counter).id === 'lastClone') {
//         carouselSlide.style.transition = 'none';
//         counter = carouselImages.length - 2;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
//     if(carouselImages[counter].id === 'firstClone') {
//         carouselSlide.style.transition = "none";
//         counter = carouselImage.length - counter;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });

// const currentSlide = wrapper.children[currentSlideIndex];
// const nextSlide = wrapper.children[index];

const accordionHeader = document.querySelectorAll('.competencies__accordion-header');

accordionHeader.forEach(accordionHeader =>{
    accordionHeader.addEventListener('click', event =>{
        accordionHeader.classList.toggle('active');
        const accordionItemBody =
        accordionHeader.nextElementSibling;
        if(accordionHeader.classList.contains('active')){
            accordionItemBody.style.maxHeight=
            accordionItemBody.scrollHeight + 'px';
        } else{
            accordionItemBody.style.maxHeight=0;
        }
    });
});
