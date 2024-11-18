
window.addEventListener('resize', function(){
    addRequiredClass();
})


function addRequiredClass() {
    if (window.innerWidth < 860) {
        document.body.classList.add('mobile')
    } else {
        document.body.classList.remove('mobile') 
    }
}

window.onload = addRequiredClass

let hamburger = document.querySelector('.hamburger')
let hamburger1 = document.querySelector('.hamburger1')
let mobileNav = document.querySelector('.nav-list')

let bars = document.querySelectorAll('.hamburger span')
let bars1 = document.querySelectorAll('.hamburger1 span')

let isActive = false
let isActive1 = false

hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('open')
    if(!isActive) {
        bars[0].style.transform = 'rotate(45deg)'
        bars[1].style.opacity = '0'
        bars[2].style.transform = 'rotate(-45deg)'
        isActive = true
    } else {
        bars[0].style.transform = 'rotate(0deg)'
        bars[1].style.opacity = '1'
        bars[2].style.transform = 'rotate(0deg)'
        isActive = false
    }
})

hamburger1.addEventListener('click', function() {
    mobileNav.classList.toggle('open')
    if(!isActive1) {
        bars1[0].style.transform = 'rotate(45deg)'
        bars1[1].style.opacity = '0'
        bars1[2].style.transform = 'rotate(-45deg)'
        isActive1 = true
    } else {
        bars1[0].style.transform = 'rotate(0deg)'
        bars1[1].style.opacity = '1'
        bars1[2].style.transform = 'rotate(0deg)'
        isActive1 = false
    }
})



document.addEventListener('DOMContentLoaded', function() {
    let hamburger = document.querySelector('.hamburger');
    let hamburger1 = document.querySelector('.hamburger1');
    let navList = document.querySelector('.nav-list');
    let navList1 = document.querySelector('.nav-list1');
    let additionalContent = document.querySelector('.hamburger-additional-content');
    let additionalContent1 = document.querySelector('.hamburger-additional-content1');


    let logo = document.querySelector('.brand img'); // Selecting the image inside the brand class
    let logoContainer = document.querySelector('.brand'); // The container of the logo

    // Set margin-left for hamburger1
    hamburger1.style.marginLeft = '40px';

    function toggleHamburger(activeHamburger, inactiveHamburger, contentElement, menuContent) {
        activeHamburger.classList.toggle('active');

        if (activeHamburger.classList.contains('active')) {
            inactiveHamburger.style.display = 'none';
            contentElement.style.display = 'block';
            contentElement.innerHTML = menuContent;



             // Center the logo
             logo.style.display = 'block'; // Ensure the logo is displayed
             logo.style.margin = '0 auto'; // Center the logo
             logo.parentElement.style.textAlign = 'center'; // Center the parent container of the logo
            
             logoContainer.style.display = 'flex'; // Make the parent a flex container
             logoContainer.style.justifyContent = 'center'; // Center children horizontally
             logoContainer.style.width = '100%'; // Ensure the width is 100%
 
             // Make hamburger1 fixed
             hamburger1.style.position = 'fixed';
             hamburger1.style.top = '10px'; // Adjust as needed
             hamburger1.style.right = '30px'; // Adjust as needed
 
            // Add CSS styles for h3 tags
            let h3Tags = contentElement.getElementsByTagName('h3');
            for (let h3 of h3Tags) {
                h3.style.marginLeft = '20px'; // Set margin-left for h3
            }

            contentElement.style.opacity = '1';
            contentElement.style.visibility = 'visible';
            contentElement.style.position = 'fixed';
            contentElement.style.top = '60px'; // Adjust based on your header height
            contentElement.style.left = '0';
            contentElement.style.width = '100%';
            contentElement.style.backgroundColor = '#fff';
            contentElement.style.zIndex = '1000';
            contentElement.style.padding = '20px';
            contentElement.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
   
        } else {
            inactiveHamburger.style.display = 'flex'; // or 'block', depending on your layout
            contentElement.style.display = 'none';



             // Reset styles when menu is closed
             logo.style.display = ''; // Reset to default
             logo.style.marginTop = '5px'; // Reset to default
             logo.style.maxWidth = ''; // Reset to default
             logoContainer.style.display = ''; // Reset to default
             logoContainer.style.justifyContent = ''; // Reset to default
             logoContainer.style.width = ''; // Reset to default
             hamburger1.style.position = ''; // Reset to default
             hamburger1.style.top = ''; // Reset to default
             hamburger1.style.right = ''; // Reset to default
       
        }
    }

    hamburger.addEventListener('click', function() {
        const additionalText = `
            <h3>Services Provided By US</h3>
            <ul>
                 <li><a href="social-media-marketing-services.html">Social Media Marketing</a></li>
                <li><a href="social-media-management-services.html">Social Media Management</a></li>
                <li><a href="social-media-advertising-solutions.html">Social Media Advertising</a></li>
                <li><a href="social-media-strategy-development.html">Social Media Strategy Development</a></li>
                <li><a href="social-media-analytics-reporting.html">Social Media Analytics and Reporting</a></li>
                <li><a href="local-seo-services.html">Local SEO Services</a></li>
                <li><a href="seo-audit-analysis.html">SEO Audit and Analysis</a></li>
                <li><a href="google-map-optimization.html">Google Map Optimization</a></li>
                <li><a href="ppc-keyword-research-analysis.html">Keyword Research</a></li>
                <li><a href="ad-campaign-setup-management.html">Ad Campaign Management</a></li>
                <li><a href="landing-page-optimization-ppc.html">Landing Page Optimization</a></li>
                <li><a href="ppc-performance-tracking-reporting.html">Performance Tracking</a></li>
                <li><a href="whatsapp-marketing-solutions.html">WhatsApp Marketing Services</a></li>
                <li><a href="secure-payment-gateway-solutions.html">Payment Gateway Integration</a></li>
                <li><a href="professional-email-marketing.html">Email Marketing Solution</a></li>
                <li><a href="creative-graphics-design-services.html">Graphics Design Solution</a></li>
                <li><a href="website-designing-services.html">Website Designing Services</a></li>
                <li><a href="reliable-web-hosting-services.html">Web Hosting Solution</a></li>
                <li><a href="enterprise-resource-planning-solutions.html">ERP Solution</a></li>
            </ul>
        `;
        toggleHamburger(hamburger, hamburger1, additionalContent, additionalText);
    });

    hamburger1.addEventListener('click', function() {
        const menuText = `
            <h3>Menu</h3>
            <ul>
                <li class="current"><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="service.html">Service</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        `;

        logo.style.margin = '19px 3px 0px 109px';
        logo.style.display = 'block'; // Ensure the logo is displayed
        logo.style.margin = '0 auto'; // Center the logo
        logo.parentElement.style.textAlign = 'center'; // Center the parent container of the logo
       
        toggleHamburger(hamburger1, hamburger, additionalContent1, menuText);

      

    });

    // Debug logging
    console.log('Hamburger:', hamburger);
    console.log('Hamburger1:', hamburger1);
    console.log('Nav List:', navList);
    console.log('Nav List1:', navList1);
    console.log('Additional Content:', additionalContent);
    console.log('Additional Content1:', additionalContent1);
});

