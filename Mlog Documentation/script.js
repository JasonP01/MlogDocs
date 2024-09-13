document.getElementById('hamburger-menu').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.main-content');
    
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        content.classList.remove('open');
    } else {
        sidebar.classList.add('open');
        content.classList.add('open');
    }
    
}); 


document.querySelectorAll('.sidebar-link').forEach(function(link) {
    link.addEventListener('click', function() {
        var sidebar = document.getElementById('sidebar');
        var content = document.querySelector('.main-content');
        
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            content.classList.remove('open');
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';

        let errorMessage = document.createElement('span');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Image loading error, try reloading the page';
        
        this.parentNode.insertBefore(errorMessage, this.nextSibling);
        errorMessage.style.display = 'block';
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const tocLinks = document.querySelectorAll('#sidebar a');
  
    function highlightCurrentSection() {
      const centerX = window.innerWidth / 1.5;
      const centerY = window.innerHeight / 2;
  
      const elementAtCenter = document.elementFromPoint(centerX, centerY);

      let currentSection = elementAtCenter.closest('section');
      let parentSections = [];
  
      while (currentSection) {
        parentSections.push(currentSection);
        currentSection = currentSection.parentElement.closest('section');
      }
  
      tocLinks.forEach(link => link.classList.remove('highlight'));
  
      parentSections.forEach(section => {
        const activeLink = document.querySelector(`#sidebar a[href="#${section.id}"]`);
        if (activeLink) {
          activeLink.classList.add('highlight');
        }
      });
    }
  
    window.addEventListener('scroll', highlightCurrentSection);
  
    highlightCurrentSection();
  });
  
