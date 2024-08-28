// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
document.addEventListener("DOMContentLoaded", () => {
    const primaryhHeader=document.querySelector(".primary-header")
    const navtoggle = document.querySelector(".mobile-nav-toggle");
    const primarynav = document.querySelector(".primary-navigation");

    if (primarynav) { // Check if primarynav is not null
        document.addEventListener("click", () => {
            primarynav.hasAttribute("data-visible")
                ? navtoggle.setAttribute("aria-expanded",false)
                :navtoggle.setAttribute("aria-expanded",true)
            primarynav.toggleAttribute("data-visible");
            primaryhHeader.toggleAttribute("data-overley");
        });
    } else {
        console.error("Element with class 'primary-navigation' not found.");
    }

  
   
});