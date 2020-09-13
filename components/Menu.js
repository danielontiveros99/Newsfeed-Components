// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

let menuMaker = (data) => {
  let menu = document.createElement('div');
  let ul = document.createElement('ul');
  //structure
  menu.appendChild(ul);

  data.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  })
  // add classes
  menu.classList.add('menu');
  let btn = document.querySelector('.menu-button');
  // add event listener
  btn.addEventListener('click', (e)=>{
    menu.classList.toggle('menu--open')
  });
  return menu;

}

let header = document.querySelector('.header');
header.appendChild(menuMaker(menuItems));

  // for(var i = 0; i < data.array.length; i++){
  //   list = document.createElement('li')
  //   list.textContent = data.array[i];
  //   ul = list; 
  // }
  // let btn = document.querySelector('.menu-button')
  // btn.addEventListener('click', ()=>{
  //   menu.classList.toggle('.menu--open');
  // });

  // return menu;




// menuItems.appendChild(menuMaker());


// const menuMaker = (data) =>{
//   const ul = document.createElement('ul');
//   const menu = document.createElement('div');
//   menu.classList.add('menu');
// for (var i = 0; i < data.array.length; i++){
//   let list = data.array[i];
//   list = document.createElement('li');
//   // document.querySelector('.menu-button').appendChild(list);
//   ul = list;
// }
// // document.querySelector('.menu-button').appendChild(ul);
// menu = document.querySelector('.menu-button');

//  menu.addEventListener('click', () =>{
//     menu.classList.toggle('.menu--open')
//     })

  
// console.log(ul)
// return menu;

// }
// const header = document.querySelector('.header');
// menuItems.appendChild(menuMaker());




// console.log(menuItems)

  // // const menu = document.createElement('div');
  // const menu1 = document.querySelector('.menu-button');
  // const ul = document.createElement('ul');
  // const li = document.createElement('li');

  // menu.appendChild(ul);
  // ul.appendChild(li);

  // // menu.classList.add('menu');

  // array.forEach(array =>{
  //   li.textContent = array;
  //   ul = li;
  // });

  // // const menu1 = document.querySelector('.menu-button');
  
  // // array.forEach(array => 
  // //   menu1.appendChild(menuMaker(array.menuItems))
  // //   )
  
  // menu1.addEventListener('click', () =>{
  //   menu.classList.toggle('.menu--open')
  //   })

  // const header = document.querySelector(".header")
  // header.appendChild(menuMaker(array));

  // return menu;