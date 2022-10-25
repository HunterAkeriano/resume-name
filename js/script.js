const swiper = new Swiper('.swiper', {
    effect: 'cards',
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})


var audio=document.querySelector("audio");
audio.volume = 0.1;