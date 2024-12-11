// Owl Carousel тохиргоо
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,               // Үргэлжилсэн эргэлт
        margin: 0,                // Слайдыг хооронд нь зайгүй
        nav: true,                // Навигацийн товчлууруудыг харуулах
        dots: true,               // Дотсуудыг харуулах
        items: 1,                 // 1 элементийг харуулах
        autoplay: true,           // Автомат хуулбарлах
        autoplayTimeout: 1000,    // 1 секундын дараа шинэчилнэ
        autoplayHoverPause: true, // Хулгай хийх үед зогсоох
        responsive: {
            0: { items: 1 },      // Гар утас
            600: { items: 1 },    // Таблет
            1000: { items: 1 }    // Компьютер
        }
    });
});
