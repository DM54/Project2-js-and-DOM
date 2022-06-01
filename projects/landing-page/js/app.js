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
 * getting all section tag and add them to an array which later
 * it will check how many new sections were added to the array. Then
 * will update the li node to the exact length of array.
 */

let getsections = [...document.querySelectorAll('section')];
let getidsections = document.querySelectorAll('#section');
console.log(getidsections);
// Use in list function
let rectangle;
let classanchorsec;
const navbarlist = document.querySelector('.navbar__menu #navbar__list');
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
 * to create li for unordered list and use for loop getsections.length where it will update automatically with li - anchor link inside. Then add them
 * to the  navbar__menu class and navbar__list id. Also, set attribute called menu_link from the
 * stylesheet.
 *
 */

 const getnav = document.querySelector('#navbar__list');


 const list = () => {

   for (let i = 1; i<=getsections.length; i++){
     const navlist = document.createElement('li');
     navlist.innerHTML += `<a href="#section${i}">Section ${i}</a>`;
     navlist.className="menu__link";
    // navlist.setAttribute('class', 'menu__link');
    navbarlist.append(navlist);
  }

};




// Add class 'active' to section when near top of viewport

const viewport = () =>{


  for(let i=0; i<=getsections.length; i++){
   //if(i === getidsec[i]){
   rectangle = document.body.getBoundingClientRect();
  // getidsec = getsections[i].document.querySelectorAll(`#section${i}`);
   //console.log(getidsec[i]);
  // console.log(rectangle);
  //classanchorsec = getsections[i].className='your-active-class';
  //console.log(classanchorsec);
    if(getsections[i].scrollTo(rectangle.left, rectangle.top )){
           console.log(getsections[i]);
           getsections[i].classList.add('active');
            console.log(
              "Left:" + rectangle.left + " Top:" + rectangle.top + " Right:"+ rectangle.right + " Bottom:" + rectangle.bottom + " Width:" + rectangle.width +
              " Height:" + rectangle.height
            );


    }
    else {
     // console.log(getsections[i]);

     getsections[i].classList.remove('active');
    }
  /* console.log(
    "Left:" + rectangle.left + " Top:" + rectangle.top + " Right:"+ rectangle.right + " Bottom:" + rectangle.bottom + " Width:" + rectangle.width +
    " Height:" + rectangle.height
  );*/
 // }
  }

};



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
/**
 * num will be for the amount of sections want to be created, for example, num =2 will create two more sections
 * for the menu.
 * created another section in the main which is section 4,
 * first created another section and set the attributes for the section tag then added to the main tag.
 * I use cloneNode to the clone everything from the landing__container class and its descendants then
 * add to the section tag that I created. I declared an array called getsections where it saves created
 * sections to the array with the existing sections.
 *
 */

 const createsection = (num) =>{


  //let section = document.querySelector('section');
  let maintag = document.querySelector('main');
  console.log(maintag);
  let createnewsection;
  //let count =0;
  for(let i=1; i<=num; i++){
      createnewsection= document.createElement('section');
      createnewsection.setAttribute('id', `section${i}`);
      createnewsection.setAttribute('data-nav', `Section ${i}`);
    //Changed the h2 Text
     const geth2 = document.getElementById(`section${i}`).querySelector('h2');
     geth2.innerHTML=`Section ${i}` ;
     const innercontent = document.querySelector('.landing__container');
     const clone = innercontent.cloneNode(true);
     createnewsection.append(clone);
      getsections.push(createnewsection);
      maintag.append(createnewsection);
  }
  console.log(getsections);

};
createsection(2);
list();
//viewport();

document.addEventListener('scroll', () =>{getsections.onscroll = viewport()});
// Scroll to section on link click

// Set sections as active



