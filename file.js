// Smooth Scroll for Navigation Links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Confirmation for Email Link
  document.querySelector('a[href^="mailto:"]').addEventListener('click', function (event) {
    const confirmed = confirm("Do you want to send an email to Tommy?");
    if (!confirmed) {
      event.preventDefault(); // Prevent navigation if the user cancels
    }
  });
  
  // Alert for External Links
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function () {
      alert("You are being redirected to an external site.");
    });
  });