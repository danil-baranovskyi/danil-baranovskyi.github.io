$(document).ready(function () {


    // Маска для телефона
    $("#form-phone1, #form-phone2, #form-phone3, #form-phone5").mask("(999) 999-99-99"); 

     // открыть окно call me
    $('.call_me_win_open').click(function () {
        $('#call_me, .bg_body').fadeIn();
        $('body').addClass('overflow-hidden');
    });
      // открыть мобильное меню
    $('.head_item .logo').click(function () {
        $('.mmenu, .bg_body').fadeIn();
        $('body').addClass('overflow-hidden');
    });
    // окно регистрации на мобильном
    $('.bl_registr_info .send_butt').click(function () {
        $('#registr_win_mob, .bg_body').fadeIn();
        $('body').addClass('overflow-hidden');
    });
    
    // открыть окно главное окно
    $('.open_win_questionnaire, .open_win, .butt_mob .send_butt').click(function () {
        $('#main_win, .bg_body').fadeIn();
        $('body').addClass('overflow-hidden');
    });
    // Закрыть окна
    $('.bg_body, .close_win').click(function () {
        $('#main_win, .mmenu, #registr_win_mob, #call_me, .bg_body').fadeOut();
        $('body').removeClass('overflow-hidden');
    });
   
    // скролл вверх
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('#up_back').fadeIn();
            } else {
                $('#up_back').fadeOut();
            }
        });
        $('#up_back').click(function() {
            $('body,html').animate({scrollTop:0},800);
        });
    });
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('#up_back_mob').fadeIn();
            } else {
                $('#up_back_mob').fadeOut();
            }
        });
        $('#up_back_mob').click(function() {
            $('body,html').animate({scrollTop:0},800);
        });
    });

    // скрыть кнопку обратной связи
    $(window).scroll(function(){
        if ( ($(this).scrollTop()) <= $(".section_5").offset().top ) {
            $('.up_back, .call_me_win_open').removeClass('active__up') ;
        }
    });
    // плказать кнопку обратной связи
    $(window).scroll(function(){
        if ( ($(this).scrollTop()) >= $(".section_6").offset().top ) {
            $('.up_back, .call_me_win_open').addClass('active__up') ;
        }
    });

    // скрывать меню на моб. при скролле
    $(window).resize(function(){
        if($(window).width() <= 992){
            $('.mmenu a').click(function () {
                $('.mmenu, .bg_body').fadeOut();
                $('body').removeClass('overflow-hidden');
            });
        }   
    });
    // плавный скролл
    $('.mmenu a').on('click',
      function(){
        var scroll_el = $(this).attr('href');
          if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 50}, 500);
          }
          return false;
      }
    ); 

     // выносим главное меню с плашки
    $(function() {
        var first = $(".regist_mob");
        var second = $(".empty_bl");
        $(window).resize(function() {
            var i = $(".regist_mob, .empty_bl").index(first);
            if ($(window).width() <= "580" && !i) {
                var a = $("<abracadabra/>");
                a.insertAfter(first);
                first.insertAfter(second);
                second.insertAfter(a);
                a.remove()
            } else if ($(window).width() > "580" && i) {
                var a = $("<abracadabra/>");
                a.insertAfter(first);
                first.insertAfter(second);
                second.insertAfter(a);
                a.remove()
            }
        }).resize()
    });
    
     // подсчеты -- раздел (детский сад почемучка)
    var show = true;
    var countbox = "#counter";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".milestone-value").spincrement({
                thousandSeparator: "",
                duration: 5000,
                from: 0,
                decimalPlaces: 0
            });
 
            show = false;
        }
    });

    
    $('.list_advantages').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },{
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
});
