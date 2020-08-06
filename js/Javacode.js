$(document).ready(function () {
  let gallery = $(".img-gallery");
  if (gallery.length && $.fn.owlCarousel) {
    gallery.owlCarousel({
      rtl: true,
      nav: false,
      items: 7,
      dots: true,
      center: true,
      autoplay: true,
      loop: true,
      responsive: {
        0: {
          items: 1.5,
        },
        768: {
          items: 4,
        },
      },
    });
  }

  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  $("#navbarCollapse .navbar-nav a").on("click", function (e) {
    let target = $(this.hash);
    if (target.length) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });

  $("#nav-footer  a.link-footer").on("click", function (a) {
    let target = $(this.hash);
    if (target.length) {
      a.preventDefault();
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });

  $("#btn-top  i.fa-arrow-up").on("click", function (b) {
    let target = $(this.hash);
    if (target.length) {
      b.preventDefault();
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  setInterval(function () {
    $(".profile-img").css("animation", "shakeMe");
  }, 2000);

});





