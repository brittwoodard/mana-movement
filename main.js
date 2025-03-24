// Slick
$('.testimonial-container').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    accessibility: true,
    dots: true,
    fade: true,
    infinite: true,
    pauseOnHover: true,
});

$('.text-container').slick({
    autoplay: true,
    speed: 1000,
    arrows: true,
    accessibility: true,
    dots: true,
    fade: true,
    infinite: true,
    pauseOnHover: false,
});

// Popup Gallery
document.addEventListener('DOMContentLoaded', function () {
    if (typeof Fancybox !== 'undefined') {
      Fancybox.bind('[data-fancybox="gallery"]', {
        Toolbar: {
          display: [
            { id: "counter", position: "center" },
            "close"
          ]
        },
        Carousel: {
          Navigation: true
        }
      });
    } else {
      console.warn("Fancybox is not loaded yet.");
    }
  });

  // Mobile Menu
  // Mobile Menu
// A $( document ).ready() block.
$(document).ready(function () {
  $(document).ready(function () {
      $(".mobile-button").click(function () {
          $(".mobile-button").toggleClass("active");
          $(".mobile-menu").toggleClass("active");
      });
  });
});
  