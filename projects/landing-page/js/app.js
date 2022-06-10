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
 * Declared rectangle which are used in the scroll event listener function
 * and for the getBoundingClientRect().
 */
let rectangle;
/* Declared getid and text for getidsections function.
let getid;
let text;*/

// Use in list function, the unorderlist (ul) has navbar__list id where it will have li node being added
//whenever new section is made from the createsection function.
const navbarlist = document.querySelector('.navbar__menu #navbar__list');
//The click function is addeventlistener for <a> tag link and to scroll smoothly. Called in href <a> tag and implemented in
//attributes. Can find it in the list function and the click function at the end of this file.
let click =()=>{};
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
/**
 * This function return the sections id value, loop the getsection array to get section tags
 * then get the id attribute value.
 */
/*const getidsections = () =>{

        for(let i=0; i<=getsections.length-1; i++){
          getid = document.getElementsByTagName('section')[i];
          console.log(getid);
          text = getid.getAttribute('id');

        }
        return text;

};*/

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
 //getnav.classList.add('menu__link');


 const list = () => {

   for (let i = 1; i<=getsections.length; i++){
     const navlist = document.createElement('li');
     const anchor = document.createElement('a');
     anchor.innerHTML += `Section ${i}`;
     //anchor.setAttribute('href', `#section${i}`);
     anchor.setAttribute('href', `javascript:click()`);
     anchor.classList.add('menu__link');
     navlist.appendChild(anchor);
     navbarlist.append(navlist);
  }

};




// Add class 'active' to section when near top of viewport
/**
 * The viewport function will go through a loop of getsections array and
 * loop through the section ids which then will get the size of each section
 * using built in function called .getBoundingClientRect().
 * Each ids will be set class attributes and then will compare the top and bottom size with the
 * window height. So the window height is 918, when the top is less than and bottom is greater than
 *  the window height it should make the classes as active and highlight each tab at the navbar when it is in the view or near in view. But, if
 * it is not then it should remove the classes as active and remove the highlighted tab. A event listener is added at the end where it call the viewport
 * function when it is scrolling.
 */

const viewport = () =>{
  let sectionbox;
  let top;
  for(let i=0; i<getsections.length; i++){
    sectionbox = document.getElementById(`section${i+1}`);
  //console.log(sectionbox);
  rectangle = sectionbox.getBoundingClientRect();
  sectionbox.className === '';
  sectionbox.setAttribute('class', '');
  //top = sectionbox.scrollTop += rectangle.top;
  let id = document.querySelectorAll('a');

   if((rectangle.top <= window.innerHeight) && (rectangle.bottom >= window.innerHeight)){

       sectionbox.classList.add('active');
      if(sectionbox.className === 'active'){
           id[i].setAttribute('style', 'color: white; background-color: black;');
      }

    }
    else{

    sectionbox.classList.remove('active');
    id[i].removeAttribute('style');

    }

     //console.log(window.innerHeight);
    //console.log( "Left: " + rectangle.left+ " Top:" + rectangle.top + " Bottom " + rectangle.bottom);
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
  //console.log(getsections);
  h2();
};
createsection(2);
list();
//getidsections();
//viewport();


/**
 * End Main Functions
 * Begin Events
 *
*/
/*This event listener listen for scroll and check viewport function
* where it check which section is in or nearest top view to add class as active
* also implemented a timer whenever it stop scrolling it will hide the navbar until it is scrolling again.
*/
document.addEventListener("scroll", () =>{
  viewport();
  let timer;
  let pageheader = document.getElementById('navbar__list');
  if (pageheader.style.display==='none'){
    pageheader.style.display = 'block';
  }
  else{
  timer = setTimeout(() => {
   pageheader.style.display = 'none';
  }, 10000);
}

});
// Scroll to section on link click
/**
 * This is the click function declared globaly, it is looping through the <a> tag whenever it is clicked the addeventlistener
 * is tiggered to get the scrollintoview() to scroll smoothly to the sections ids.
 */


 let a = document.querySelectorAll('a');
 //console.log(a);
 click = () =>{
 for(let h=0; h<a.length; h++){
   //console.log(a[h]);
  let id = document.getElementById(`section${h+1}`);
  a[h].addEventListener("click", (event) =>{
   //console.log(id[h]);
      id.scrollIntoView({behavior: 'smooth'});

     });
  }
 };


 /*let  clicked;
 const checkingclicks = (evt) => {
  clicked = evt.target;

  //console.log(clicked);
  let getid;*/
  /*for(let h =0; h<getsections.length; h++){
    getid = document.getElementById(`section${h+1}`);*/
    /*if(clicked.classList.contains('active') == false){
    //console.log(getclass[h]);
    clicked.classList.add('active');
    clicked.setAttribute('style', 'color: white; background-color: black;');
    }
   else if(clicked.classList.contains('active') == true) {
    clicked.removeEventListener('click', ()=>{
      clicked.classList.remove('active');
      clicked.removeAttribute('style');
    });
   }
   evt.preventDefault();
//}
//event.preventDefault();
};*/




//click();
/*for (let i=0; i<a.length; i++){
  a[i].addEventListener('click', () =>{
    if(click()){
      if(a[i].className === 'active'){
        a[i].classList.remove('active');
        a[i].removeAttribute('style');
      }

    }
  }, true);
}*/

//checkingclicks();

// Set sections as active



