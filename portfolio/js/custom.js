/* =============================
        Services
==============================*/

$(function () {
    //animate on scroll//
    new WOW().init();
})
/* =============================
        Work
==============================*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*========================================================
                        team
=========================================================*/
$(function () {
    $("#team-members").owlCarousel(
        {items: 3, autoplay: true, smartSpeed: 500, loop: true, autoplayHoverPause: true}
    );
});
/*========================================================
                        testimonials
=========================================================*/
$(function () {
    $("#customers-testimonials").owlCarousel(
        {items: 1, autoplay: true, smartSpeed: 700, loop: true, autoplayHoverPause: true}
    );
});

/*========================================================
                        stats
=========================================================*/
$(function () {
    $('.counter').counterUp({delay: 10, time: 3000})
});
/*========================================================
                        on clicks
=========================================================*/

//dannys linked in


$(document).on("click", '.danielLinkedin', function () {
    window.open('https://www.linkedin.com/in/dkhalek/'
    );
});
//my stuff
// $(document).on("click", '.linkedin', function () {
//     window.open('https://www.linkedin.com/in/tatehut/'
//     );
// });
$(document).on("click", '.github', function () {
    window.open('https://github.com/hutwagnert');
});
$(document).on("click", '.resumet', function () {
    window.open('https://hutwagnert.github.io/resume/resume.html');
});
function copyToClipboard() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp
        .val($('#clickcopy').text())
        .select();
    document.execCommand("copy");
    $temp.remove();
}

var currentid = "";
$(document).on("click", '.lirisearch', function () {
    $('#popupmodal').modal('show');
    currentid = this.id;
});
$(document).on("click", '.giphy', function () {
    $('#popupmodal').modal('show');
    currentid = this.id;
});
$(document).on("click", '.rpg', function () {
    $('#popupmodal').modal('show');
    currentid = this.id;
});
$(document).on("click", '.project', function () {
    $('#popupmodal').modal('show');
    currentid = this.id;
});
$(document).on("click", '.mysql', function () {
    $('#popupmodal').modal('show');
    currentid = this.id;
});

$(document).on("click", '.contactme', function () {

    $('#mymodal').modal('show');
});
function hidemodal() {
    $('#popupmodal').modal('hide');
}
function linksearch() {
    console.log(currentid);
    if (currentid === 'project') {
        window.open('https://hutwagnert.github.io/TH-G-TT-WW-group-project-1/');
    } else if (currentid === 'rpg') {
        window.open('https://hutwagnert.github.io/unit-7/');
    } else if (currentid === 'giphy') {
        window.open('https://hutwagnert.github.io/unit-6/unit-6-giphy/');
    } else if (currentid === 'lirisearch') {
        window.open('https://inthekitchen-ucb.herokuapp.com/');
    }  else if (currentid === 'mysql') {
        window.open('https://github.com/hutwagnert/SQLbananza');
    }
    else if (currentid === 'express') {
        window.open('https://expressfriendfinder.herokuapp.com/');
    }else if (currentid === 'burgertime') {
        window.open('https://calm-chamber-50496.herokuapp.com/');
    }else {
        console.log("error");
    }
    hidemodal();
}


function githubsearch() {
    console.log(currentid);
    if (currentid === 'project') {
        window.open('https://github.com/hutwagnert/TH-G-TT-WW-group-project-1');
    } else if (currentid === 'rpg') {
        window.open('https://github.com/hutwagnert/unit-7');
    } else if (currentid === 'giphy') {
        window.open('https://github.com/hutwagnert/unit-6');
    } else if (currentid === 'lirisearch') {
        window.open('https://github.com/ucb-project/project-2');
    } else if (currentid === 'mysql') {
        window.open('https://github.com/hutwagnert/SQLbananza');
    }else if (currentid === 'express') {
        window.open('https://github.com/hutwagnert/inexpress');
    }else if (currentid === 'burgertime') {
        window.open('https://github.com/hutwagnert/burgertime');
    }else {
        console.log("error");
    }
    hidemodal();
}
/*========================================================
                        copy email
=========================================================*/

document
    .getElementById("cp_btn")
    .addEventListener("click", copy_password);

function copy_password() {
    var copyText = document.getElementById("pwd_spn");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document
        .body
        .appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}
$(document).on("hover", '.testimonial-author', function () {
    $(".icontest").css({"animation":"shake 0.5s","animation-iteration-count":"infinite"});
  
});
