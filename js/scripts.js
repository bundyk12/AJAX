var header = document.getElementsByTagName('header')[0];
header.classList.add('headerContainer');

var imgHeader = document.createElement('img');
imgHeader.setAttribute('src', 'images/t24d_logo.jpg')
header.appendChild(imgHeader);

var pHeader = document.createElement('p');
pHeader.classList.add('name');
pHeader.textContent = "Twelve 24 Design";
header.appendChild(pHeader);

var sectionHeader = document.createElement('section');
sectionHeader.setAttribute('id', 'quote');
header.appendChild(sectionHeader);

var pSectionHeader = document.createElement('p');
pSectionHeader.classList.add('quote');
pSectionHeader.textContent = "Good advertising penetrates the public mind with desires and beliefs. –Leo Burnett";
sectionHeader.appendChild(pSectionHeader);

var footer = document.getElementsByTagName('footer')[0];
var pFooter = document.createElement('p');
pFooter.classList.add('footer');
footer.appendChild(pFooter);

var spanFooter1 = document.createElement('span');
spanFooter1.classList.add('footer');
spanFooter1.textContent = "Copyright ©2015 Twelve 24 Design • All rights reserved. • 757.343.9145 • 1972 S. Macon Way • Aurora, CO • 80014 •";
pFooter.appendChild(spanFooter1);

var aEmail = document.createElement('a');
aEmail.classList.add('footerLink');
aEmail.setAttribute('href', 'mailto:kb@twelve24design.com');
aEmail.textContent = " E-mail Us ";
pFooter.appendChild(aEmail);

var spanFooter2 = document.createElement('span');
spanFooter2.classList.add('footer');
spanFooter2.textContent = " • "
pFooter.appendChild(spanFooter2);

var aTerms = document.createElement('a');
aTerms.classList.add('footerLink');
aTerms.setAttribute('href', 'terms.html');
aTerms.textContent = " Terms of Use";
pFooter.appendChild(aTerms);
