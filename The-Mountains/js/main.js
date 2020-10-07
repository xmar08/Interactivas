function checkForm() {

    let hasErrors;

    let name = document.getElementById('contact_name');
    if (validator.isEmpty(name.value)) {
        name.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "This field is required";
        showErrorMsg(name, msg);
        hasErrors = true;
    }

    let email = document.getElementById('contact_email');
    if (!validator.isEmail(email.value)) {
       // console.log("not an email");
        email.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Valid email is required";
        showErrorMsg(email, msg);
        hasErrors = true;
    }

    let comment = document.getElementById('contact_message');
    if (validator.isEmpty(comment.value)) {
        comment.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "This field is required";
        showErrorMsg(comment, msg);
        hasErrors = true;
    }

    if (hasErrors) {
        return false;
    } else { return true; }

};

function showErrorMsg(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    hideError(referenceNode);
}

function hideError(el) {
    el.addEventListener("blur", (event) => {
        el.classList.remove("error");
        if (el.nextElementSibling !== null) {
            el.nextElementSibling.remove();
        }
    });
}

let copy = [];

//Mostrar desde un inicio para que se vea que hay algo en la pagina
document.addEventListener('DOMContentLoaded', (event)=>{
    //console.log("DOM Loaded");
        
    initializeArray();   
    loadMainContent();
    AOS.init();
});
//Retrasar la carga del documento para que todos los datos estén antes de mostrar la información
for(let i = 0; i < 1000000000; i++){}

function openMobileMenu(){
    //console.log("Tap - open");

    let nav = document.body.getElementsByClassName('top-nav')[0];

    nav.style.left = "0";
}

function closeMobileMenu(){
    //console.log("Tap - close");

    let nav = document.body.getElementsByClassName('top-nav')[0];

    nav.style.left = "-25em";
}

function initializeArray() {
   // console.log('initializate');
    copy =[
        /*Main menu*/
        { home: "HOME", about: "ABOUT", work: "WORK", blog: "BLOG", contact: "CONTACT", request_btn: "Request for quote", logo: "./images/08.png"},
        /*Intro*/
         { h1:"RUN OVER EVERYTHING" }
        { intro: "#", download_btn: "See Details"}
        /*About*/
        { about_title: "what we offer", transform: "Skiing and snowboarding still rank among the undisputed winter sport highlights for"
        "all ages and ability levels. The perfectly groomed ski slopes makes a real heaven for skiers and riders. Our professional"
        "ski and snowboard instructors can show you all the little details while improving your skiing techniques and riding skills."
          /*Quote*/
        { quote: "Design is a plan for arranging elements in such a way as best to accomplish a particular purpose.",author: "- Charles Eames"},
        /*Contact*/
        { contact_title: "Contact", contact_text: "Start your project today or Maybe you're here just to say 'Hi'?", name: "Name *", email: "Email *", message: "Message *", submit_btn: "SEND NOW"},
        /*Footer icons*/
        { envelope: "<i class='fas fa-envelope'></i>", twitter: "<i class='fab fa-twitter'></i>", dribbble: "<i class='fab fa-dribbble'></i>", linkedin: "<i class='fab fa-linkedin-in'></i>", behance: "<i class='fab fa-behance'></i>"},
        /*Disclaimer*/
        { disclaimer: "2020 All Rights Reserved."}
    ]
}

function loadMainContent() {
    TOP NAV
    let top_nav = document.body.getElementsByClassName('top-nav-link')[0];
    top_nav.textContent = copy[0].home;

    top_nav = document.body.getElementsByClassName('top-nav-link')[1];
    top_nav.textContent = copy[0].about;

    top_nav = document.body.getElementsByClassName('top-nav-link')[2];
    top_nav.textContent = copy[0].work;

    top_nav = document.body.getElementsByClassName('top-nav-link')[3];
    top_nav.textContent = copy[0].blog;

    top_nav = document.body.getElementsByClassName('top-nav-link')[4];
    top_nav.textContent = copy[0].contact;*/

    top_nav = document.body.getElementsByClassName('request-btn')[0];
    top_nav.textContent = copy[0].request_btn;

    let logo = document.body.getElementsByTagName('img')[0];
    logo.src = copy[0].logo;

    /*INTRO*/
    let title = document.body.getElementsByTagName('h1')[0];
    title.textContent = copy[1].intro;
    
    let download_btn = document.body.getElementsByClassName('btn-label')[0];
    download_btn.textContent = copy[1].download_btn;
    
    /*ABOUT*/
    let about_title = document.body.getElementsByTagName('h2')[0];
    about_title.textContent = copy[2].about_title;

    let about = document.body.getElementsByClassName('about-section')[0];
    about.insertAdjacentHTML('beforeend', "<h3 class='about-intro'>" + copy[2].transform + "</h3>");

    about.insertAdjacentHTML('beforeend', "<p  class='about-text'>" + copy[2].simply + "</p>");

    about.insertAdjacentHTML('beforeend', "<p  class='about-text'>" + copy[2].popularised + "</p>");

    about.insertAdjacentHTML('beforeend', "<p  class='about-text'>" + copy[2].passages + "</p>");

    /*QUOTE*/
    let quote = document.body.getElementsByClassName('quote-section')[0];
    quote.insertAdjacentHTML('beforeend', "<p class='quote-text'>" + copy[3].quote + "</p>");

    quote.insertAdjacentHTML('beforeend', "<p  class='quote-author'>" + copy[3].author + "</p>");

    /*CONTACT*/
    let contact_section = document.body.getElementsByClassName('contact-section')[0];
    contact_section.insertAdjacentHTML('afterbegin', "<p>" + copy[4].contact_text + "</p>");
    
    contact_section.insertAdjacentHTML('afterbegin', "<h2 class='secondary-title'>" + copy[4].contact_title + "</h2>");

    let contact_field = document.body.getElementsByClassName('input-text')[0];
    contact_field.placeholder = copy[4].name;

    contact_field = document.body.getElementsByClassName('input-text')[1];
    contact_field.placeholder = copy[4].email;

    contact_field = document.body.getElementsByClassName('text-area')[0];
    contact_field.placeholder = copy[4].message;
    
    let submit = document.body.getElementsByClassName('submit-btn')[0];
    submit.value = copy[4].submit_btn;

    /*FOOTER ICONS*/
    let icon = document.body.getElementsByClassName('footer-link')[0];
    icon.insertAdjacentHTML('afterbegin', copy[5].envelope);

    icon = document.body.getElementsByClassName('footer-link')[1];
    icon.insertAdjacentHTML('afterbegin', copy[5].twitter);

    icon = document.body.getElementsByClassName('footer-link')[2];
    icon.insertAdjacentHTML('afterbegin', copy[5].dribbble);

    icon = document.body.getElementsByClassName('footer-link')[3];
    icon.insertAdjacentHTML('afterbegin', copy[5].linkedin);

    icon = document.body.getElementsByClassName('footer-link')[4];
    icon.insertAdjacentHTML('afterbegin', copy[5].behance);

    /*FOOTER DISCLAIMER*/
    let disclaimer = document.body.getElementsByClassName('footer-disclaimer')[0];
    disclaimer.textContent = copy[6].disclaimer;
}