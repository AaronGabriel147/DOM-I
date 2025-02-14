const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// ______________ NAV BAR __________________


// Nav selector and adding text via indexing.
const navigation = document.querySelectorAll('nav a');
navigation[0].textContent = siteContent.nav['nav-item-1'];
navigation[1].textContent = siteContent.nav['nav-item-2'];
navigation[2].textContent = siteContent.nav['nav-item-3'];
navigation[3].textContent = siteContent.nav['nav-item-4'];
navigation[4].textContent = siteContent.nav['nav-item-5'];
navigation[5].textContent = siteContent.nav['nav-item-6'];


// _____________ SECTION CONTAINER ______________


const headerText = document.querySelector('.cta h1')
headerText.textContent = siteContent.cta.h1;

const headerBtn = document.querySelector('.cta button');
headerBtn.textContent = siteContent.cta.button;

const headerImg = document.querySelector('#cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src']);


//______________ MAIN CONTENT ____________________


// 3 selectors "All H4's, all P's, & the 1 image"
const mainH4 = document.querySelectorAll(".text-content h4");
const mainP = document.querySelectorAll('.text-content p');
const mainImage = document.getElementById('middle-img');

// Adding Features.
mainH4[0].textContent = siteContent['main-content']['features-h4'];
mainP[0].textContent = siteContent['main-content']["features-content"];

// Adding About
mainH4[1].textContent = siteContent['main-content']['about-h4'];
mainP[1].textContent = siteContent['main-content']["about-content"];

// Adding Image
mainImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Adding Services
mainH4[2].textContent = siteContent['main-content']['services-h4'];
mainP[2].textContent = siteContent['main-content']["services-content"];

// Adding Product
mainH4[3].textContent = siteContent['main-content']['product-h4'];
mainP[3].textContent = siteContent['main-content']["product-content"];

// Adding Vision
mainH4[4].textContent = siteContent['main-content']['vision-h4'];
mainP[4].textContent = siteContent['main-content']["vision-content"];


//___________________ CONTACT _______________________


// Contact H4 Selector
const contactH4 = document.querySelector(".contact h4");
// Contact H4 text.
contactH4.textContent = siteContent.contact["contact-h4"];


// Contact P selector.
const contactP = document.querySelectorAll('.contact p');

// Contact Address text
contactP[0].textContent = siteContent.contact.address;
// Contact Phone text
contactP[1].textContent = siteContent.contact.phone;
// Contact Email text
contactP[2].textContent = siteContent.contact.email;


// ________________ FOOTER _________________


// Footer P Selector.
const footerP = document.querySelector('footer p');

// Footer P text.
footerP.textContent = siteContent.footer.copyright;

// console.log(footerP)