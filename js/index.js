const siteContent1 = {
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

const siteContent2 = {
  "nav": {
    "nav-item-1": "Services 2",
    "nav-item-2": "Product!",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "Changing the DOM!",
    "button": "Get Started YAY!",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services2",
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

let currentSiteContent = siteContent1

// Example: Update the img src for the logo
const updateLogo = (siteContent) => {
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])
}

/* HEADER */
// Navigation
const createNavLink = text => {
  const navLink = document.createElement('a')
  navLink.style.color = 'green'
  navLink.textContent = text
  return navLink
}

const updateNavLinks = (siteContent) => {
  const nav = document.querySelector('nav')
  const navLinks = [...nav.querySelectorAll('a')]
  const updateLink = (link, idx) => {
    link.textContent = siteContent.nav[`nav-item-${idx + 1}`]
  }
  if (navLinks.length <= 6) {
    navLinks.forEach((navLink, idx) => {
      updateLink(navLink, idx)
      navLink.style.color = 'green'
    })
    nav.prepend(createNavLink('Hello'))
    nav.appendChild(createNavLink('World!'))
  } else {
    navLinks.slice(1, navLinks.length - 1).forEach(updateLink)
  }
}
/* END HEADER */

/* CTA */
const updateCTA = (siteContent) => {
  const ctaHeader = document.querySelector('.cta-text > h1')
  ctaHeader.textContent = siteContent.cta.h1

  const ctaButton = document.querySelector('.cta-text > button')
  ctaButton.textContent = siteContent.cta.button

  const ctaImg = document.querySelector('#cta-img')
  ctaImg.setAttribute('src', siteContent.cta["img-src"])
}
/* END CTA */

/* MAIN CONTENT */
const updateMainSection = (siteContent) => {
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
}
/* END MAIN CONTENT */

/* CONTACT */
const updateContact = (siteContent) => {
  const contact = document.querySelector('.contact')
  contact.querySelector('h4').textContent = siteContent.contact['contact-h4']
  const [address, phone, email] = [...contact.querySelectorAll('p')]
  address.textContent = siteContent.contact.address
  phone.textContent = siteContent.contact.phone
  email.textContent = siteContent.contact.email
}
/* END CONTACT */

/* FOOTER */
const updateFooter = (siteContent) => document.querySelector('footer > p').textContent = siteContent.footer.copyright
/* END FOOTER */

/* MAIN */

const runWithArgs = (...fns) => (...args) => fns.forEach(fn => fn(...args))

const updateDOM = runWithArgs(
  updateLogo, 
  updateNavLinks, 
  updateCTA,
  updateMainSection,
  updateContact,
  updateFooter
)

const update = () => updateDOM(currentSiteContent)

const updateButton = document.createElement('button')
updateButton.textContent = 'Update Content'
updateButton.addEventListener('click', () => {
  if (currentSiteContent === siteContent1) {
    currentSiteContent = siteContent2
  } else {
    currentSiteContent = siteContent1
  }
  update()
})
document.querySelector('.cta-text').appendChild(updateButton)

update()