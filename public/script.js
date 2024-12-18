$(".dark").show();
$(".light").hide();

var app = document.querySelector(".role");
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(500)
  .typeString("FRONTEND DEVELOPER")
  .pauseFor(1000)
  .deleteChars(18)
  .pauseFor(500)
  .typeString("BACKEND DEVELOPER")
  .pauseFor(1000)
  .deleteChars(17)
  //   .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  .start();

//   if($('.content').hasClass('bg-gradient-light')) {
//   }
//   else {
//     $('.dark').hide();
//     $('.light').show();
//   }

function changeTheme() {
  if ($(".content").hasClass("bg-gradient-light")) {
    $(".content").removeClass("bg-gradient-light");
    $(".content").addClass("bg-gradient-dark");
    $(".dark").hide();
    $(".light").show();
  } else {
    $(".content").removeClass("bg-gradient-dark");
    $(".content").addClass("bg-gradient-light");
    $(".dark").show();
    $(".light").hide();
  }
}

//   document.addEventListener('DOMContentLoaded', function () {
//     const sr = ScrollReveal({
//         origin: 'bottom',
//         distance: '50px',
//         duration: 1000,
//         reset: true
//     });

//     sr.reveal('.title', { interval: 200 });
// });

// // To handle partial load (like reload in the middle of the page)

var slideUp = {
  distance: "150%",
  origin: "bottom",
  opacity: 0,
  duration: 1000,
};

let nodeArray = [
  document.querySelector(".title"),
  document.querySelector(".personal"),
  document.querySelector(".info-details"),
];
// ScrollReveal().reveal(nodeArray, slideUp);
ScrollReveal().reveal(".title", slideUp);
ScrollReveal().reveal(".side-title", slideUp);
ScrollReveal().reveal(".info-details", slideUp);
ScrollReveal().reveal(".education-title", slideUp);
ScrollReveal().reveal(".education", slideUp);
ScrollReveal().reveal(".skill-container", slideUp);
ScrollReveal().reveal(".service-container", slideUp);
ScrollReveal().reveal(".project-container", slideUp);
ScrollReveal().reveal(".contact-container", slideUp);

(function () {
  emailjs.init({
    publicKey: "aREL8IDmHjOe_tCPL",
  });
})();

let contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", () => {
  console.log("clicked");
  event.preventDefault();
  let serviceID = "service_q58lxzi";
  let templateID = "template_1tlfyox";
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs.send(serviceID, templateID, params).then(
    (res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    },
    (error) => {
      console.log("fail", error);
    }
  );
});

function opennav() {
  $(".res-navigation").show();
  $(".hamburger").hide();
  $('.nav').removeClass('fixed top-30 right-0 bg-[#FCFCFC] transition-all w-full z-[100]');

}

function closenav() {
  $(".res-navigation").hide();
  $(".hamburger").show();
  $('.nav').addClass('fixed top-30 right-0 bg-[#FCFCFC] transition-all w-full z-[100]');

}

$(".nav-menu").click(function () {
  closenav();
});

if (window.pageYOffset > 500) {
  $(".top-scroll").removeClass("hidden");
}
window.onscroll = function () {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 500) {
    $(".top-scroll").removeClass("hidden");
    $('.nav').addClass('fixed top-30 right-0 bg-[#FCFCFC] transition-all w-full z-[100]');
    
  } else {
    $(".top-scroll").addClass("hidden");
    $('.nav').removeClass('fixed top-30 right-0 bg-[#FCFCFC] transition-all w-full z-[100]');
  }
};

function toTop() {
  $(window).scrollTop(0);
}
