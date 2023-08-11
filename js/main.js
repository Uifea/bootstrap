
const slider = document.querySelector('.slider-container');
const sliderItems = Array.from(slider.children);
const indicatorButtons = Array.from(document.querySelectorAll('.slider-indicator'));
const sliderControl = document.querySelector('.slider-control');


sliderItems.forEach(function (slide, index){
    
    if(index !==0) {
        slide.classList.add('hidden');
    }


    slide.dataset.index = index;

    sliderItems[0].setAttribute('data-active', '');

});

indicatorButtons.forEach(function (btn, index){
    const activeBtn = document.querySelector('.slider-indicator--active');
    
    btn.dataset.index = index;

    activeBtn.setAttribute('data-active', '');

    btn.addEventListener('click', function () {
        const currentSlide = slider.querySelector('[data-active]');
        const lastButton = sliderControl.querySelector('[data-active]');
        
        
        

        currentSlide.classList.add('hidden');
        currentSlide.removeAttribute('data-active', '');
        lastButton.classList.remove('slider-indicator--active');
        lastButton.removeAttribute('data-active', '');
        
        


        const currentIndexBtn = index;
        const nextSlide = slider.querySelector(`[data-index="${currentIndexBtn}"]`);
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
        this.classList.add('slider-indicator--active');
        this.setAttribute('data-active', '');
    })
});