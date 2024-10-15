// Preloader
$(document).ready(function () {
    setTimeout(function () {
        $('.wrapper').addClass('loaded');
    }, 2500);
});

// olivia moswa text
document.getElementsByClassName("riddhi_shah")[0];
// olivia moswa text end

// designer text
firstText = "Software Developer";
secondText = "Data Scientist";
thridText = "AI/ML Engineer"
intervalTime = 600;
window.load = displayText();
function displayText() {
    document.querySelector('.designer').innerText = firstText;
    firstText.innerText
    setTimeout(() => {
        document.querySelector('.designer').innerText = secondText;
    }, intervalTime * 3);
    setTimeout(() => {
        document.querySelector('.designer').innerText = thridText;
    }, intervalTime * 5);
}
setInterval(() => {
    displayText();
}, intervalTime * 7);
// designer text end

// card Tabs 
var tabs = document.getElementById('icetab-container').children;
var tabs2 = document.getElementById('icetab-container2').children;
var tabcontents = document.getElementById('icetab-content').children;
 
var mybtn = function () {
    var tabchange = this.mynum;
    for (var int = 0; int < tabcontents.length; int++) {
        tabcontents[int].className = 'tabcontent';

        if (tabs[int].className = 'icetab') {
            tabs[int].className = 'icetab';
            this.classList.add('current-tab');
            tabcontents[int].className = 'tabcontent'
            tabcontents[tabchange].classList.add('tab-active');
        }
    }
}

var mybtn2 = function () {
    var tabchange = this.mynum;
    for (var int = 0; int < tabcontents.length; int++) {
        tabcontents[int].className = 'tabcontent';
        if (tabs2[int].className = 'icetab') {
            tabs2[int].className = 'icetab';
            this.classList.add('current-tab');
            tabcontents[int].className = 'tabcontent'
            tabcontents[tabchange].classList.add('tab-active');
        }
    }
}

for (var index = 0; index < tabs.length; index++) {
    tabs[index].mynum = index;
    tabs[index].addEventListener('click', mybtn, false);
}

for (var index = 0; index < tabs2.length; index++) {
    tabs2[index].mynum = index;
    tabs2[index].addEventListener('click', mybtn2, false);
}
// card Tabs end

// circle Img my project click event
const elements = document.getElementById("portfolio");
const homeNavabr = document.getElementById("home");
const circular_imgClick = document.getElementsByClassName("circular_text_main");

circular_imgClick[0].addEventListener("click", () => {
    homeNavabr.classList.remove("tab-active");
    elements.classList.add("tab-active");
});

// Dark/ Light Mode Toggle
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var sunIcon = document.getElementById("sunIcon");
    var moonIcon = document.getElementById("moonIcon");

    if (element.classList.contains("dark-mode")) {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
        localStorage.setItem("mode", "dark");
    } else {
        moonIcon.classList.add("hidden");
        sunIcon.classList.remove("hidden");
        localStorage.setItem("mode", "light");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const storedMode = localStorage.getItem("mode");
    if (storedMode === "dark") {
        document.body.classList.add("dark-mode");
        var sunIcon = document.getElementById("sunIcon");
        var moonIcon = document.getElementById("moonIcon");
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
    }
});
// Dark/ Light Mode Toggle end

// Portfolio Pop-up
// $(".pop-up").on("click", function () {
//     $(".overlay").addClass("is-on");
// });

// $("#close").on("click", function () {
//     $(".overlay").removeClass("is-on");
// });

// Open the pop-up based on the project ID
$(".pop-up").on("click", function () {
    const projectId = $(this).attr("id"); // Get the ID of the clicked element
    console.log(`Opening pop-up with ID: ${projectId}`);
    $(`#${projectId}.overlay`).addClass("is-on"); // Target the specific overlay
});

// Close the pop-up
$(".overlay #close").on("click", function () {
    $(this).closest(".overlay").removeClass("is-on"); // Close the nearest overlay
});

// Portfolio Pop-up end

// Delegate click event for dynamically created elements
// $(document).on("click", ".pop-up", function () {
//     var projectId = $(this).closest('.fade_up').data('project');  // Get the project ID
//     $(".overlay").removeClass("is-on");  // Hide any other open pop-up
//     $('.overlay[data-project="' + projectId + '"]').addClass("is-on");  // Show the specific pop-up
// });

// // Close pop-up
// $(document).on("click", "#close", function () {
//     $(this).closest('.overlay').removeClass("is-on");
// });

// Share Btn
$(document).ready(function () {
    $(".share-btn").click(function (e) {
        $('.networks-5').not($(this).next(".networks-5")).each(function () {
            $(this).removeClass("active");
        });
        $(this).next(".networks-5").toggleClass("active");
    });
});
// Share Btn End

// Testimonial Card Slider
$(function () {
    $('.testimonials_card').on('init', function (event, slick) {
        $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
        $('.current').text(slick.currentSlide + 1);
        $('.total').text(slick.slideCount);
    })
        .slick({
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            arrows: true,
            prevArrow: '<span class="prev-arrow"><i class="ri-arrow-left-s-line"></i></span>',
            nextArrow: '<span class="next-arrow"><i class="ri-arrow-right-s-line"></i></span>',
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.current').text(nextSlide + 1);
        });
});
// Testimonial Card Slider End

// View More View Less btn
$(document).ready(function () {
    $("#toggle").click(function () {
        var elem = $("#toggle").text();
        if (elem == "View More") {
            $("#toggle").text("View Less");
            $("#text").slideDown();
        } else {
            $("#toggle").text("View More");
            $("#text").slideUp();
        }
    });
});
// View More View Less btn End

// blog Page Pop Up
$(document).ready(function () {
    $('.trigger').click(function () {
        $('.modal-wrapper').toggleClass('open');
        $('.page-wrapper').toggleClass('blur');
        return false;
    });
});
// blog Page Pop Up End

// blog_pop_up_slider
$(function () {
    $('.blog_pop_up_slider').slick({
        infinity: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        prevArrow: '<span class="prev-btn"><i class="fa-solid fa-arrow-left"></i> Prev </span>',
        nextArrow: '<span class="next-btn"> Next <i class="fa-solid fa-arrow-right"></i> </span>',
        responsive: [
            {
                breakpoint: 645,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false,
                }
            }
        ]
    });
});
// blog_pop_up_slider end

// form
$('input').focus(function () {
    $(this).parent().addClass('active');
    $('input').focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    })
});
// form end

// side Nav 
function openNav() {
    var side = document.getElementById("mySidenav");
    if (side.style.width == "300px") {
        side.style.width = "0px";
    } else {
        side.style.width = "300px";
    }
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// cursor
let cursor = document.querySelector('.cursor');
let cursorScale = document.querySelectorAll('a,button,.pop-up,.trigger,.share,#close,.toggle,#vimeo,#youtube,.link,.gallery');
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY,
            }
        })
    }
});

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})
cursorScale.forEach(link => {
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if (link.classList.contains('small')) {
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });

    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
});

// Whole Page Scrolling Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.fade_up');
hiddenElements.forEach((el) => observer.observe(el));


// pop video
$(document).ready(function () {
    $('#vimeo').magnificPopup({
        items: {
            src: 'https://vimeo.com/259411563'
        },
        type: 'iframe'
    });

    $('#youtube').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=OZzoAw9QHXY'
        },
        type: 'iframe'
    });

    $('.link').magnificPopup({
        type: 'soundcloud',
        items: {
            src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163522130&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        },
        type: 'iframe',
    });

});

// gallary code
window.addEventListener("load", () => {
    for (let i of document.querySelectorAll(".gallery img")) {
        i.onclick = () => i.classList.toggle("full");
    }
});

// skill bar function
$(function () {
    $('.circlechart').circlechart();
});

projects1 = [
    {
      id: "project1",
      title: "Steam game recommendation",
      image: "../assets/images/content_img.jpg",
      description: "",
      bigImage: "../assets/images/portfolio_big_img.jpg",
      details: {
        name: "Steam game recommendation",
        // createdBy: "Riddhi",
        date: "16/07/2023",
        // client: "Rayan Patrick",
        category: "Machine learning model",
        content: "Developed a Flask RESTful API for a game recommendation model based on users' past purchases. Performed exploratory data analysis using Pyspark on large dataset, achieving 84% accuracy.",
        subImages: [
          "../assets/images/project_sub_images1.jpg",
          "../assets/images/project_sub_images2.jpg"
        ]
      }
    },
    {
      id: "project2",
      title: "Face mask detection",
      image: "../assets/images/content_img.jpg",
      description: "Detecting if a person is wearing mask or not.",
      bigImage: "../assets/images/portfolio_big_img.jpg",
      details: {
        name: "Face mask detection",
        // createdBy: "Cuberto",
        date: "26/08/2022",
        // client: "Rayan Patrick",
        category: "Deep learning model",
        content: "Trained an AI model using Convolutional Neural Network to detected mask-wearing and categorize mask types. Utilized Python libraries like NumPy and Pandas and achieved an accuracy of 73.4% on the validation model.",
        subImages: [
          "../assets/images/project_sub_images1.jpg",
          "../assets/images/project_sub_images2.jpg"
        ]
      }
    },
];

projects2 = [
    {
        id: "project3",
        title: "Pulse rate detection",
        image: "../assets/images/content_img.jpg",
        description: "Branding project for a corporate client.",
        bigImage: "../assets/images/portfolio_big_img.jpg",
        details: {
          name: "Pulse rate detection",
          // createdBy: "Cuberto",
          date: "20/12/2021",
          // client: "Rayan Patrick",
          category: "Computer vision model",
          content: "Ornare sagittis blandit imperdiet cursus risus. Amet proin cras mattis arcu pellentesque lorem sagittis.",
          subImages: [
            "../assets/images/project_sub_images1.jpg",
            "../assets/images/project_sub_images2.jpg"
          ]
        }
      },
];

// window.addEventListener('DOMContentLoaded', () => {
//     function renderProjects(projects, containerSelector) {
//         let projectListHtml = '';
//         let popupsHtml = '';

//         projects.forEach((project) => {
//             const createdBy = project.details.createdBy || "N/A";
//             const client = project.details.client || "N/A";

//             const subImagesHtml = project.details.subImages
//                 .map(image => `<div><img class="project_sub_images" src="${image}" alt="Sub Image"></div>`)
//                 .join('');

//             projectListHtml += `
//                 <div class="content_portfolio pop-up" data-project="${project.id}">
//                     <div class="content-overlay"></div>
//                     <img class="content-image" src="${project.image}" alt="${project.title}">
//                     <div class="content-details fadeIn-bottom">
//                         <h3 class="content-title">${project.title}</h3>
//                         <p class="content-text">${project.description || "No description available"}</p>
//                     </div>
//                     <h4 class="project_name font_w_font_s">${project.title}</h4>
//                 </div>
//             `;

//             popupsHtml += `
//                 <div class="overlay" id="${project.id}" style="display: none;">
//                     <div class="content2">
//                         <div class="close-btn" data-close="${project.id}">
//                             <i class="ri-close-fill"></i>
//                         </div>
//                         <img class="pop-up-video" src="${project.bigImage}" alt="${project.title} image">
//                         <div class="corporate_main">
//                             <div class="corporate_sub">
//                                 <h3 class="project_name corp font_w_font_s">${project.details.name}</h3>
//                                 <p class="project_name_sub font_w_font_s1">${project.details.content}</p>
//                             </div>
//                             <div class="cuberto_main">
//                                 <p class="created_by">Created By:</p>
//                                 <p class="cuberto">${createdBy}</p>
//                             </div>
//                             <div class="cuberto_main">
//                                 <p class="created_by">Date:</p>
//                                 <p class="cuberto">${project.details.date}</p>
//                             </div>
//                             <div class="cuberto_main">
//                                 <p class="created_by">Client:</p>
//                                 <p class="cuberto">${client}</p>
//                             </div>
//                             <div class="cuberto_main">
//                                 <p class="created_by">Categories:</p>
//                                 <p class="cuberto">${project.details.category}</p>
//                             </div>
//                         </div>
//                         <div class="project_second">${subImagesHtml}</div>
//                         <div class="pop-up-footer">
//                             <button class="download_cv view_project font_w_font_s"
//                                 onClick="window.open('https://themeforest.net/user/the_krishna');">
//                                 <i class="ri-eye-line"></i> View Project
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });

//         document.querySelector(containerSelector).innerHTML = projectListHtml;
//         document.querySelector('.popup-container').innerHTML = popupsHtml;

//         document.querySelectorAll('.content_portfolio').forEach((project) => {
//             project.addEventListener('click', () => {
//                 const projectId = project.getAttribute('data-project');
//                 const popup = document.getElementById(projectId);
//                 console.log(projectId)
//                 if (popup) {
//                     popup.style.display = 'block';
//                 } else {
//                     console.error(`Popup with ID ${projectId} not found.`);
//                 }
//             });
//         });

//         document.querySelectorAll('.close-btn').forEach((btn) => {
//             btn.addEventListener('click', () => {
//                 const projectId = btn.getAttribute('data-close');
//                 const popup = document.getElementById(projectId);

//                 if (popup) {
//                     popup.style.display = 'none';
//                 } else {
//                     console.error(`Popup with ID ${projectId} not found.`);
//                 }
//             });
//         });
//     }

//     renderProjects(projects1, '.content_main1');
//     renderProjects(projects2, '.content_main2');
// });

