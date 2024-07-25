//testing deployment again
function scrollTop(){
  var scrollElement = document.getElementById("summary");
  scrollElement.scrollIntoView({ behavior: "smooth"});
}

document.addEventListener("DOMContentLoaded", function() {
  //About clicked --> summary and about color
  //summary clicked --> summary and about color
  const sidenavLinks = document.querySelectorAll('a[href^="#"]');
  const topnavLinks = document.querySelectorAll('#topNav a[href^="#"]');

  const logoElement = document.getElementById('logo');
  logoElement.addEventListener('click', function(){
    const targetElement = document.getElementById('summary');
    targetElement.scrollIntoView({
      behavior: 'smooth' // Smooth scrolling
    });
  });

  sidenavLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      console.log(targetId);
      console.log(targetElement);

      const aboutList = ['summary', 'education', 'experience'];
      const projectList = ['machine2', 'dataVisualization', 'natural', 'GUI',
      'tinkering', 'musicProduction'];
      const contactList = ['contactInfo'];

      if (targetElement) {

        targetElement.scrollIntoView({

          behavior: 'smooth' // Smooth scrolling
        });

        // Remove active class from all links
        sidenavLinks.forEach(link => {
          link.classList.remove('active');
        });

        const currentId = targetElement.getAttribute('id');
        console.log(currentId);
        if (aboutList.includes(currentId)) {
          document.getElementById('about').classList.add('active');
        }else if (projectList.includes(currentId)) {
          document.getElementById('project').classList.add('active');
        }else if(contactList.includes(currentId)){
          document.getElementById('contact').classList.add('active');
        }
        this.classList.add('active');
        console.log(this.classList);
      }
    });
  });
});
/*
const allDividers = document.querySelectorAll('.divider [id]');

const topDiv = document.getElementById('div-border');
//const targetIdList = ['summary', 'education', 'experience','machine2', 'dataVisualization', 'natural', 'GUI','tinkering', 'musicProduction','contactInfo'];
allDividers.forEach(divider => {
  divider.style.color = 'blue';
  console.log(divider);
});


allDividers.forEach(divider => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Check if the entry intersects with div-border
      if (entry.isIntersecting) {
        // Action to take when intersection occurs, e.g., change background color
        divider.style.backgroundColor = 'green';
        console.log('here');
      } else {
        // Action to take when intersection does not occur, e.g., revert background color
        divider.style.backgroundColor = 'blue';
        console.log('no intersection');
      }
    });
  });


    observer.observe(topDiv);
});

*/
