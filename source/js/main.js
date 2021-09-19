
const initSwiperSlider = () => {
  const slider = document.querySelector('.proorb-slider');
  if (slider) {
    slider.classList.remove('slider--no-js');

    const swiper = new Swiper('.proorb-slider', {
      slidesPerView: 1,
      spaceBetween: 130,
      slidesPerGroup: 1,
      loop: false,
      autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
      breakpoints: {
        1024: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          //     slidesPerView: 3,
          //     slidesPerGroup: 3,
          //     pagination: {
          //       el: '.swiper-pagination',
          //       type: 'bullets',
          //       renderBullet: function (index, className) {
          //         return `<span class="${className}">${index + 1}</span>`;
          //       },
          //     },
        },
      },
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {

  initSwiperSlider();

});
