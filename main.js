let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

//variables for viewing more description of my services
let moredescription = document.getElementById("more-description-webdev");
var moredescription_graphic = document.getElementById("more-description-graphic");
let moredescription_ui = document.getElementById("more-description-ui");
var learnmore = document.getElementById("learnMore-webdev");
var learnless = document.getElementById("learnLess-webdev");
var learnless_graphic = document.getElementById("Less-des-graphic");
var learnmore_graphic = document.getElementById("More-des-graphic");
var learnless_ui = document.getElementById("Less-des-ui");
var learnmore_ui = document.getElementById("More-des-ui");


function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// for togge menu on small screen

let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-130px";
}

//functions for viewing more description of my services
function showMore()
     {
    if (moredescription.style.display !== "block") {
        moredescription.style.display = "block";
        moredescription_ui.style.display="block";
        moredescription_graphic.style.display="block";
        learnmore.style.display = "none";
        learnless.style.display = "block";
        learnless_ui.style.display="block";
        learnmore_ui.style.display="none";
        learnless_graphic.style.display="block";
        learnmore_graphic.style.display="none" 

    }
    else {
        div.style.display = "none";
    }
}

//functions for viewing less description of my services
function showLess()
     {
    if (moredescription.style.display == "block") {
        moredescription.style.display = "none";
        moredescription_ui.style.display="none";
        moredescription_graphic.style.display="none";                
        learnless.style.display = "none";
        learnmore.style.display = "block";
        learnless_ui.style.display="none";
        learnmore_ui.style.display="block";
        learnless_graphic.style.display="none";
        learnmore_graphic.style.display="block"

    }
    else {
        div.style.display = "block";
    }
}












