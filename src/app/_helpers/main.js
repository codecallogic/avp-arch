export const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-button')
  const mobileMenu = document.getElementById('mobile-menu')
  const nav = document.getElementById('nav')
  
  if (!hamburgerBtn || !mobileMenu) {
    console.error('Button or menu element not found.');
    return;
  }

  if(hamburgerBtn && mobileMenu){
    mobileMenu.classList.toggle("hidden")
    mobileMenu.classList.toggle("flex")
    hamburgerBtn.classList.toggle('toggle-btn')
  }
  
}

export const projectSlider = (index, increment, setSlider) => {
  
  setSlider((prevProjects) => {
    console.log(prevProjects)
    return prevProjects.map((project, i) => {
      if (i === index) {
        let newCount = project.count + increment;

        // Prevent count from going below zero
        if (newCount < 0) {
          newCount = 0;
        }

        // Reset count to zero if it reaches the length of the list
        if (newCount >= project.list.length) {
          newCount = 0;
        }

        return { ...project, count: newCount };
      }
      return project;
    });
  });
  
}