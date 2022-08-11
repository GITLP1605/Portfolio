const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

/* First you define the hamburgerButton and navList, by getting it fromt the id names in the HTML
    Then you make a function named a toggleButton that is going to perform something.
    This function has to take the navList, then classList en toggle is --> Show (Showing it)
    
    Then you use the hamburgerButton and make sure that only by clicking on it the toggleButton function will perform */