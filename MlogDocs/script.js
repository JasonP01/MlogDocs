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

document.getElementById('hamburger-menu-right').addEventListener('click', function() {
  var sidebar = document.getElementById('sidebar-right');
  var hamburgermenu = document.getElementById('hamburger-menu-right')
  if (sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      hamburgermenu.classList.remove('open');
  } else {
      sidebar.classList.add('open');
      hamburgermenu.classList.add('open');
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
        errorMessage.textContent = 'Image loading error, try reloading the page, if persist contact me';
        
        this.parentNode.insertBefore(errorMessage, this.nextSibling);
        errorMessage.style.display = 'block';
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const tocLinks = document.querySelectorAll('#sidebar a');
  
    function highlightCurrentSection() {
      const centerX = window.innerWidth / 1.5;
      let centerY = window.innerHeight / 2;
      let elementAtCenter = document.elementFromPoint(centerX, centerY);

      let currentSection = elementAtCenter.closest('section');
      let parentSections = [];
  
      while (currentSection) {
        parentSections.push(currentSection);
        currentSection = currentSection.parentElement.closest('section');
      }

      let section = elementAtCenter.closest('section'); // Find the closest section to the element at the center
      const maxHeight = window.innerHeight - 30;
      while (section == parentSections[0] && centerY < maxHeight || !section && centerY < maxHeight) {
        centerY += 10;
        elementAtCenter = document.elementFromPoint(centerX, centerY);
        section = elementAtCenter.closest('section');
      }
      if (section != null)
        parentSections.push(section);
      

  
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


// Add event listener 'onclick' to every a[href = (with #)]
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', triggerGlow);
});
  
function triggerGlow(event) {

  event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const targetTop = target.getBoundingClientRect().top + window.scrollY;

    let scrollToPosition;
    if (target.offsetHeight > window.innerHeight){
      scrollToPosition = targetTop
    } else {
      scrollToPosition = targetTop - (window.innerHeight / 2) + (target.offsetHeight / 2);
    }
      
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });

  // Get the href attribute and extract the target ID
  const targetId = event.target.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);


  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        triggerGlow1(targetElement);
        observer.disconnect();
      }
    });
  });

  observer.observe(targetElement);
}

function triggerGlow1(section) {
  section.classList.remove('glow-section');
  void section.offsetWidth;
  section.classList.add('glow-section');
}

// Get the modal
const modal = document.getElementById('imageModal');

// Get the image and insert it inside the modal
const modalImg = document.getElementById('modalImage');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// Add click event to all images
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = 'flex';
    modalImg.src = this.src;
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}

// Add zoom functionality
modalImg.addEventListener('click', function() {
  this.classList.toggle('zoom');
});

modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});