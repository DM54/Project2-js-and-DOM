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
/*let getidsection = document.getElementById('section');
console.log(getidsection);*/
/**
 * Declared rectangle and classanchorsec which are used in the viewport function
 * and for the getBoundingClientRect().
 */
let rectangle;
let classanchorsec;
let getid;
let text;

// Use in list function
const navbarlist = document.querySelector('.navbar__menu #navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
const getidsections = () =>{

        for(let i=0; i<=getsections.length-1; i++){
          getid = document.getElementsByTagName('section')[i];
          console.log(getid);
          text = getid.getAttribute('id');

        }
        return text;

};

/**
 * This function is called in the createsection function whenever new section is created
 * and push to the getsection array, this function will loop through the sections and get the h2
 * to change the text.
 */
const h2 = () =>{

  //Changed the h2 Text from the section array
  for(let j=1; j<=getsections.length; j++){

    const geth2 = document.getElementById(`section${j}`).querySelector('h2');
    //console.log(geth2);
    geth2.innerHTML=`Section ${j}`;
  }

};



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

let getidsec;
let highlight;

  for(let i=1; i<=getsections.length; i++){

  getidsec =  document.getElementById(`section${i}`);
   //console.log(getidsec);

    if(getidsec.className === 'your-active-class'){
          getidsec.classList.add('active');

          }
    else if (getidsec.className === ''){

        getidsec.setAttribute('class', '');
        getidsec.classList.add('active');

      }

    else{
        getidsec.classList.remove('active');
      }

}

};



// Scroll to anchor ID using scrollTO event


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
  //console.log(maintag);
  let createnewsection;
  //let count =0;
  for(let i=1; i<=num; i++){

      createnewsection= document.createElement('section');
      createnewsection.setAttribute('id', `section${i+3}`);
      createnewsection.setAttribute('data-nav', `Section ${i+3}`);

     const innercontent = document.querySelector('.landing__container');
     const clone = innercontent.cloneNode(true);
     createnewsection.append(clone);
      getsections.push(createnewsection);
      maintag.append(createnewsection);
  }
  console.log(getsections);
  h2();
};
createsection(2);
list();
//getidsections();
viewport();


/**
 * End Main Functions
 * Begin Events
 *
*/

document.addEventListener("scroll", () =>{
  let sectionbox;
  let top;
  for(let i=1; i<=getsections.length; i++){
    sectionbox = document.getElementById(`section${i}`);
  //console.log(sectionbox);
  rectangle = sectionbox.getBoundingClientRect();
  sectionbox.className === '';
  sectionbox.setAttribute('class', '');
  top = sectionbox.scrollTop = rectangle.top;

   if(top < window.innerHeight){

    sectionbox.classList.add('active');

    }
    else {
      sectionbox.classList.remove('active');
    }

    console.log( "Left: " + rectangle.left+ " Top:" + rectangle.top + " width" + rectangle.width + " height" + rectangle.height);
}


 });
// Scroll to section on link click

// Set sections as active



