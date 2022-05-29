/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

/**
 * I am creating li for unordered list and using for loop to create 4 li with text inside.
 *
 */
 const navbarlist = document.querySelector('.navbar__menu #navbar__list');

 const list = () => {
   for (let i = 1; i<=4; i++){
     const navlist = document.createElement('li');
     navlist.innerHTML = `Section ${i}`;

    navbarlist.append(navlist);
  }
  navbarlist.style = "color: black";
   //document.body.append(list);
};
list();



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
const maintag = document.querySelector('main');
const createnewsection = document.createElement('section');
createnewsection.setAttribute('id', 'section4');
createnewsection.setAttribute('data-nav', 'section 4');
maintag.appendChild(createnewsection);
const innercontent = document.querySelector('.landing__container');
const clone = innercontent.cloneNode(true);
//console.log(clone);
createnewsection.append(clone);



// Scroll to section on link click

// Set sections as active



