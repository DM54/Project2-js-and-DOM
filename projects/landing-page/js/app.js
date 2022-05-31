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
 * First look for navbar__menu class and navbar__list id, made arrow function called list
 * to create li for unordered list and use for loop to create 4 li with anchor link inside. Then add them
 * to the  navbar__menu class and navbar__list id. Also, set attribute called menu_link from the
 * stylesheet.
 *
 */
 const navbarlist = document.querySelector('.navbar__menu #navbar__list');
 //const getnav = document.querySelector('#navbar__list');
//getnav.setAttribute("class", "menu__link");

 const list = () => {

   for (let i = 1; i<=4; i++){
     const navlist = document.createElement('li');
     navlist.innerHTML += `<a href="#section${i}">Section ${i}</a>`;
     navlist.setAttribute('class', 'menu__link');
    navbarlist.append(navlist);
  }

};
list();



// Add class 'active' to section when near top of viewport

const viewport = (num) =>{

  let getsections = [...document.querySelectorAll('section')];
  //let section = document.querySelector('section');
  let maintag = document.querySelector('main');
  console.log(maintag);

  for(let i=1; i<=getsections.length; i++){
        if(i === num){
      let createnewsection = document.createElement('section');

      createnewsection.setAttribute('id', `section${i}`);
      createnewsection.setAttribute('data-nav', `Section ${i}`);

      const innercontent = document.querySelector('.landing__container');
      const clone = innercontent.cloneNode(true);
      createnewsection.append(clone);
      //section.append(createnewsection);

     //Changed the h2 Text
      const geth2 = document.getElementById(`section${i}`).querySelector('h2');
      geth2.innerHTML=`Section ${i}` ;
      maintag.append(createnewsection);

          getsections.push(createnewsection);
           console.log(...getsections);
        }


  }


};
viewport(3);


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
/**
 * created another section in the main which is section 4,
 * first created another section and set the attributes for the section tag then added to the main tag.
 * I use cloneNode to the clone everything from the landing__container class and its descendants then
 * add to the section tag that I created.
 *
 */
/*const maintag = document.querySelector('main');
const createnewsection = document.createElement('section');
createnewsection.setAttribute('id', 'section4');
createnewsection.setAttribute('data-nav', 'Section 4');
maintag.appendChild(createnewsection);
const innercontent = document.querySelector('.landing__container');
const clone = innercontent.cloneNode(true);
//console.log(clone);
createnewsection.append(clone);
//Changed the h2 Text
const geth2 = document.getElementById('section4').querySelector('h2');
geth2.innerHTML='Section 4';*/




// Scroll to section on link click

// Set sections as active



