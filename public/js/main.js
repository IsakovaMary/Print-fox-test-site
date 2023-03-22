// Gallery filtered
$(window).load(function() {
const elem = document.querySelectorAll('.gallery-items');

elem.forEach(el => {
  var iso = new Isotope( el, {
  // options
  itemSelector: '.gallery-item',
  layoutMode: 'fitRows',
  filter: '.a'
});

document.querySelectorAll('.filter-btn').forEach(el => {
    el.addEventListener('click', (e) => {
        let filter = e.currentTarget.dataset.filter;

        iso.arrange({filter: `${filter}`})
    })
})
});
})



//Увеличение картинки


$(function(){
    $('.minimized').click(function(event) {
      var i_path = $(this).attr('src');
      var articul = $(this).attr('title');
      $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><p class="text-articul">'+articul+'</p><div id="close-popup"><i></i></div></div>');
      $('#magnify').css({
       left: ($(document).width() - $('#magnify').outerWidth())/2,
              top: ($(window).height() - $('#magnify').outerHeight())/2
     });
      $('#overlay, #magnify').fadeIn('fast');
    });
    
    $('body').on('click', '#close-popup, #overlay', function(event) {
      event.preventDefault();
      $('#overlay, #magnify').fadeOut('fast', function() {
        $('#close-popup, #magnify, #overlay').remove();
      });
    });
  });


// Кнопка для прокрутки вверх

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 800 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();



