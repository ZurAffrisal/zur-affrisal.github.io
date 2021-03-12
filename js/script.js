// sidebar hamburger
const link = document.querySelector('.link');
const hamburger = document.querySelector('nav .hamburger');

window.addEventListener('scroll', ()=>{
  let span1 = document.querySelector('nav .hamburger .line:nth-child(1)');
  let span2 = document.querySelector('nav .hamburger .line:nth-child(2)');
  let span3 = document.querySelector('nav .hamburger .line:nth-child(3)');
  if(window.pageYOffset > 500){
    span1.classList.toggle('bingu1');
    span2.classList.toggle('bingu2');
    span3.classList.toggle('bingu3');
  }else{
    span1.classList.remove('bingu1');
    span2.classList.remove('bingu2');
    span3.classList.remove('bingu3');
  }
})

hamburger.addEventListener('click',()=>{
    link.classList.toggle('linkR');
    hamburger.classList.toggle('cek');
    anime({
        targets: '#line path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 3000,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: false,
      });
});
// sidebar hamburger end


// logo
    anime({
        targets: '#logo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 3000,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
      });
// logo end


// bg svg 
anime({
    targets: '#lineBg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 90 },
    direction: 'alternate',
    loop: true
  });
// bg svg end

// HI animation
anime({
  targets: '.textLine path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2000,
  delay: function(el, i) { return i * 1000 },
  direction: 'alternate',
  loop: true
});
// HI animation end


// about 
anime({
  targets: '.lineAbout path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

anime({
  targets: '.kotak1 .kotak',
  keyframes: [
    {translateY: 20},
    {translateX: 20},
    {translateY: 0},
    {translateX: 0}
  ],
  duration: 5000,
  easing: 'easeInOutSine',
  loop: true
});

anime({
  targets: '.bulat1 .bulat',
  keyframes: [
    {translateY: 20},
    {translateX: 20},
    {translateY: 0},
    {translateX: 0}
  ],
  delay: 500,
  duration: 5000,
  easing: 'easeInOutSine',
  loop: true
});
// About  end