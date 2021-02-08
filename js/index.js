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
logo.setAttribute('src', siteContent["nav"]["img-src"])

/* HEADER */
// Navigation
const nav = document.querySelector('nav')
const navLinks = nav.querySelectorAll('a')
navLinks.forEach((navLink, idx) => {
  navLink.textContent = siteContent.nav[`nav-item-${idx + 1}`]
})
/* END HEADER */

/* CTA */
const ctaHeader = document.querySelector('.cta-text > h1')
ctaHeader.textContent = siteContent.cta.h1

const ctaButton = document.querySelector('.cta-text > button')
ctaButton.textContent = siteContent.cta.button

const ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', siteContent.cta["img-src"])
/* END CTA */

/* MAIN CONTENT */
const getContentFromMainContent = (sectionName) => {
  return {
    h4: siteContent['main-content'][`${sectionName}-h4`],
    content: siteContent['main-content'][`${sectionName}-content`]
  }
}

const updateMainContentSection = (parentEl, sectionNames) => {
  parentEl.querySelectorAll('.text-content').forEach((textEl, idx) => {
    const { h4, content } = getContentFromMainContent(sectionNames[idx])
    textEl.querySelector('h4').textContent = h4
    textEl.querySelector('p').textContent = content
  })
}

const topContent = document.querySelector('.top-content')
const topContentSectionNames = ['features', 'about']
updateMainContentSection(topContent, topContentSectionNames)

const bottomContent = document.querySelector('.bottom-content')
const bottomContentSectionNames = ['services', 'product', 'vision']
updateMainContentSection(bottomContent, bottomContentSectionNames)

const middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])
/* END MAIN CONTENT */