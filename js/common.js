$(function() {
    //Слайдер со страницы land-page
    $('.slider_land_play').slick ({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: true,
        nextArrow: '<img class="next-arrow" src="img/10_land_page/slider_images/arrow-next.png">',
        prevArrow: '<img class="prev-arrow" src="img/10_land_page/slider_images/arrow-prev.png">'
});
    //Слайдер в шапке
  $('.header_slider').slick ({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<img class="header_slider_arrow_back" src="img/1_header/back_arrow.svg" alt="">',
        nextArrow: '<img class="header_slider_arrow_next" src="img/1_header/next_arrow.svg" alt="">',
        responsive: [
              {
                  breakpoint: 577,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true,
                      arrows: false
                  }
              }
          ]
    });

    //Слайдер дизайна проектов домов
    // $('.design_slider').slick ({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 100,
    //     arrows: true,
    //     infinite: false,
    //     prevArrow: '<div class="arrow_design_slider_back"></div>',
    //     nextArrow: '<div class="arrow_design_slider_next"></div>',
    //     responsive: [
    //         {
    //           breakpoint: 1200,
    //           settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //             infinite: true,
    //             dots: false
    //           }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //               slidesToShow: 2,
    //               slidesToScroll: 1,
    //               infinite: true,
    //               dots: false
    //             }
    //           },
    //           {
    //               breakpoint: 576,
    //               settings: {
    //                   slidesToShow: 1,
    //                   slidesToScroll: 1,
    //                   infinite: true,
    //                   dots: true,
    //                   arrows: false
    //               }
    //           }
    //       ]
    // });

    const designProjects = document.getElementsByClassName('design_home')[0];
    const projectButtons = designProjects.getElementsByClassName('look_project');
    const overlaySlider  = document.getElementsByClassName('overlay_slider')[0];
    const closeOverlay   = document.getElementsByClassName('close_overlay')[0];

        // for (let i = 0; i < projectButtons.length; i++) {
        //     projectButtons[i].onclick = function(e) {
        //         e.preventDefault();
        //         overlaySlider.classList.add('overlay_slider_active');
        //     }
        // }
    
    // closeOverlay.onclick = function () {
    //     overlaySlider.classList.remove('overlay_slider_active');
    // }

    //Первый попап слайдеры
    $('#project__modal_1 .full_image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: true,
        asNavFor: '.modal_slider'
      });

    $('#project__modal_1 .modal_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.full_image',
        dots: true,
        centerMode: true,
        infinite: false,
        arrows: true,
        prevArrow: '<img class="modal_slider_arrow_back" src="img/8_modal_window/arrow_pre.png" alt="">',
        nextArrow: '<img class="modal_slider_arrow_next" src="img/8_modal_window/arrow_next.png" alt="">',
        focusOnSelect: true
      });
    //Второй попап слайдеры
    $('#project__modal_2 .full_image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: true,
        asNavFor: '.modal_slider'
      });

    $('#project__modal_2 .modal_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.full_image',
        dots: true,
        centerMode: true,
        infinite: false,
        arrows: true,
        prevArrow: '<img class="modal_slider_arrow_back" src="img/8_modal_window/arrow_pre.png" alt="">',
        nextArrow: '<img class="modal_slider_arrow_next" src="img/8_modal_window/arrow_next.png" alt="">',
        focusOnSelect: true
      });
    //Третий попап слайдеры
    $('#project__modal_3 .full_image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: true,
        asNavFor: '.modal_slider'
      });

    $('#project__modal_3 .modal_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.full_image',
        dots: true,
        centerMode: true,
        infinite: false,
        arrows: true,
        prevArrow: '<img class="modal_slider_arrow_back" src="img/8_modal_window/arrow_pre.png" alt="">',
        nextArrow: '<img class="modal_slider_arrow_next" src="img/8_modal_window/arrow_next.png" alt="">',
        focusOnSelect: true
      });
    //Четвертый попап слайдеры
    $('#project__modal_4 .full_image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: true,
        asNavFor: '.modal_slider'
      });

    $('#project__modal_4 .modal_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.full_image',
        dots: true,
        centerMode: true,
        infinite: false,
        arrows: true,
        prevArrow: '<img class="modal_slider_arrow_back" src="img/8_modal_window/arrow_pre.png" alt="">',
        nextArrow: '<img class="modal_slider_arrow_next" src="img/8_modal_window/arrow_next.png" alt="">',
        focusOnSelect: true
      });
    //Пятый попап слайдеры
    $('#project__modal_5 .full_image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: true,
        asNavFor: '.modal_slider'
      });

    $('#project__modal_5 .modal_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.full_image',
        dots: true,
        centerMode: true,
        infinite: false,
        arrows: true,
        prevArrow: '<img class="modal_slider_arrow_back" src="img/8_modal_window/arrow_pre.png" alt="">',
        nextArrow: '<img class="modal_slider_arrow_next" src="img/8_modal_window/arrow_next.png" alt="">',
        focusOnSelect: true
      });

    //Шестой попап слайдеры
    $('#project__modal_6 .full_image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: true,
        asNavFor: '.modal_slider'
      });

    $('#project__modal_6 .modal_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.full_image',
        dots: true,
        centerMode: true,
        infinite: false,
        arrows: true,
        prevArrow: '<img class="modal_slider_arrow_back" src="img/8_modal_window/arrow_pre.png" alt="">',
        nextArrow: '<img class="modal_slider_arrow_next" src="img/8_modal_window/arrow_next.png" alt="">',
        focusOnSelect: true
      });

    //Седьмой попап слайдеры
    $('#project__modal_7 .full_image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: true,
        asNavFor: '.modal_slider'
      });

    $('#project__modal_7 .modal_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.full_image',
        dots: true,
        centerMode: true,
        infinite: false,
        arrows: true,
        prevArrow: '<img class="modal_slider_arrow_back" src="img/8_modal_window/arrow_pre.png" alt="">',
        nextArrow: '<img class="modal_slider_arrow_next" src="img/8_modal_window/arrow_next.png" alt="">',
        focusOnSelect: true
      });

    //Седьмой попап слайдеры
    $('#project__modal_8 .full_image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: true,
        asNavFor: '.modal_slider'
      });

    $('#project__modal_8 .modal_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.full_image',
        dots: true,
        centerMode: true,
        infinite: false,
        arrows: true,
        prevArrow: '<img class="modal_slider_arrow_back" src="img/8_modal_window/arrow_pre.png" alt="">',
        nextArrow: '<img class="modal_slider_arrow_next" src="img/8_modal_window/arrow_next.png" alt="">',
        focusOnSelect: true
      });

    $('#project__modal_9 .full_image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: true,
        asNavFor: '.modal_slider'
      });

    $('#project__modal_9 .modal_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.full_image',
        dots: true,
        centerMode: true,
        infinite: false,
        arrows: true,
        prevArrow: '<img class="modal_slider_arrow_back" src="img/8_modal_window/arrow_pre.png" alt="">',
        nextArrow: '<img class="modal_slider_arrow_next" src="img/8_modal_window/arrow_next.png" alt="">',
        focusOnSelect: true
      });

    $('#project__modal_10 .full_image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: true,
        asNavFor: '.modal_slider'
      });

    $('#project__modal_10 .modal_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.full_image',
        dots: true,
        centerMode: true,
        infinite: false,
        arrows: true,
        prevArrow: '<img class="modal_slider_arrow_back" src="img/8_modal_window/arrow_pre.png" alt="">',
        nextArrow: '<img class="modal_slider_arrow_next" src="img/8_modal_window/arrow_next.png" alt="">',
        focusOnSelect: true
      });

    $('#project__modal_11 .full_image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: true,
        asNavFor: '.modal_slider'
      });

    $('#project__modal_11 .modal_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.full_image',
        dots: true,
        centerMode: true,
        infinite: false,
        arrows: true,
        prevArrow: '<img class="modal_slider_arrow_back" src="img/8_modal_window/arrow_pre.png" alt="">',
        nextArrow: '<img class="modal_slider_arrow_next" src="img/8_modal_window/arrow_next.png" alt="">',
        focusOnSelect: true
      });
//Мобильное меню
      let mobileMenu = document.querySelector('.mobile_menu_button_img');
      if (mobileMenu != null) {
        let mobileMenuBlock = document.querySelector('.mobile_menu');
        mobileMenu.onclick = function() {
            mobileMenuBlock.classList.toggle('active_mobile');
        }
    }

    const wrapperGenPlan = document.querySelector('.gen_plan .wrapper_img');
    const zoomInButton = document.querySelector('.gen_plan_plus');
    const zoomOutButton = document.querySelector('.gen_plan_minus');
    
    zoomInButton.addEventListener ('click', zoomIn);
    zoomOutButton.addEventListener('click', zoomOut);
    let counter = 120;
    //Приближаем карту
    function zoomIn() {
        counter += 120;
        if (counter >= 601) {
            counter = 600;
            return;
        }
        wrapperGenPlan.style.width = counter + '%';
    }
     //Отдаляем карту
    function zoomOut() {
        counter -= 120;
        if (counter < 119) {
            counter = 120;
            return;
        }
        wrapperGenPlan.style.width = counter + '%';
    }
});
const modalMoreButton1 = document.querySelector('.popup__btn');
const modalMoreButton = document.querySelector('.header_phone_number button');
const modalMore = document.querySelector('.modal_learn_more_overlay');
const closeMore = document.querySelector('.modal_learn_more img');

if(closeMore) {
    closeMore.onclick = function () {
        modalMore.classList.remove('active_modal_more');
    }
}
if (modalMoreButton) {
    modalMoreButton.onclick = function () {
        modalMore.classList.toggle('active_modal_more');
    }
}
if (modalMoreButton1) {
    modalMoreButton1.onclick = function(e) {
        e.preventDefault();
        modalMore.classList.toggle('active_modal_more');

    }
}

//яндекс карта
ymaps.ready(init);

function init() {
// Создаем карту.
var myMap = new ymaps.Map("map", {
        center: [53.3028,50.2100],
        zoom: 11
    }, {
        searchControlProvider: 'yandex#search'
    });

// Создаем ломаную, используя класс GeoObject.
var myGeoObject = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Ломаная линия".
            type: "LineString",
            // Указываем координаты вершин ломаной.
            coordinates: [
                [53.2016,50.1016],
                [53.2164,50.1346],
                [53.2137,50.1408],
                [53.2203,50.1559],
                [53.2199,50.1637],
                [53.2372,50.1925],
                [53.2802,50.2282],
                [53.2905,50.2237],
                [53.2987,50.2258],
                [53.3028,50.2251],
                [53.3086,50.2334],
                [53.3160,50.2300],
                [53.3483,50.2334],
                [53.3497,50.2255],
                [53.3476,50.2193]
            ]
        },
    }, {
        // Задаем опции геообъекта.
        // Включаем возможность перетаскивания ломаной.
        draggable: true,
        // Цвет линии.
        strokeColor: "#0BA873",
        // Ширина линии.
        strokeWidth: 5
    });
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    );
    myPlacemark = new ymaps.Placemark([53.3505,50.2107], {
        hintContent: 'Сокол Парк',
        balloonContent: 'Сокол Парк'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: './img/6_map/logo.svg',
        // Размеры метки.
        iconImageSize: [93, 114],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-50, -80],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 0],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });

// Добавляем линии на карту.
myMap.geoObjects.add(myGeoObject)
myMap.geoObjects.add(myPlacemark)
 // Отключаем перетаскивание карты
//  myMap.behaviors.disable(['drag', 'false']);
//  myMap.behaviors.disable('multiTouch');
 // Отключаем зуммирование карты
 myMap.behaviors.disable('scrollZoom');
}




